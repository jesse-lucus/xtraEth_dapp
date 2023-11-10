import { BigNumber } from '@ethersproject/bignumber'
import { Contract } from '@ethersproject/contracts'
import type { TransactionResponse } from '@ethersproject/providers'
import { Currency, CurrencyAmount, Percent, Price, Token } from '@uniswap/sdk-core'
import { Pair } from '@uniswap/v2-sdk'
import { useWeb3React } from '@web3-react/core'
import { parseEther } from 'ethers/lib/utils'
import { useLendingPoolV1Contract, useLoanTerm00 } from 'hooks/useContract'
import JSBI from 'jsbi'
import { useSingleCallResult, useSingleContractMultipleData } from 'lib/hooks/multicall'
import tryParseCurrencyAmount from 'lib/utils/tryParseCurrencyAmount'
import { ReactNode, useCallback, useMemo, useState } from 'react'
import { useCurrentDEX } from 'state/dex/hooks'
import { useAppDispatch, useAppSelector } from 'state/hooks'
import { useTransactionAdder } from 'state/transactions/hooks'
import { TransactionType } from 'state/transactions/types'
import { calculateGasMargin } from 'utils/calculateGasMargin'
import { Trans } from 'utils/transShim'

import { useTotalSupply } from '../../hooks/useTotalSupply'
import { PairState, useXV2Pair } from '../../hooks/useXV2Pairs'
import { useCurrencyBalances } from '../connection/hooks'
import { AppState } from '../index'
import { Field, typeInput } from './actions'

const ZERO = JSBI.BigInt(0)

// export function useILL001Contract(): Contract | null {
//   return useContract(LENDING_POOL_ADDRESSES, LENDING_POOL_ABI, false)
// }
interface DiscountQuote {
  account: string | undefined
  loanTerm: string | undefined
  loanAmount: BigNumber
  loanDurationSeconds: string
}

export function useActiveLoansByBorrower(contract: Contract | null, account: string | undefined): BigNumber {
  const { result } = useSingleCallResult(contract, 'activeLoansByBorrower', [account])
  return result?.[0]
}

export interface LoanId {
  id: BigNumber
}

export interface LoanRepaymentSchedule {
  paymentDueTimeStamp: BigNumber[]
  paymentAmount: BigNumber[]
}
// get data for all past and active proposals
export function useLoanIdsByBorrower(contract: Contract | null, loanIds: any): { data: LoanId[]; loading: boolean } {
  const callData = useSingleContractMultipleData(contract, 'loanLookupByBorrower', loanIds)
  // early return until events are fetched
  return useMemo(() => {
    if (callData.some((p) => p.loading)) {
      return { data: [], loading: true }
    }

    return {
      data: callData.reverse().map((loan, i) => {
        const id = loan?.result?.[0]
        return {
          id,
        }
      }),
      loading: false,
    }
  }, [callData])
}

function useGetDiscountedQuote(contract: Contract | null, args: DiscountQuote): [] {
  const { result } = useSingleCallResult(contract, 'getDiscountedQuote', [
    args['account'],
    args['loanTerm'],
    args['loanAmount'],
    args['loanDurationSeconds'],
  ])

  return result?.[0]
}
export function useLoanTermLookUp(contract: Contract | null, loanTermId: number): string {
  const { result } = useSingleCallResult(contract, 'activeLoanTerms', [loanTermId])
  return result?.[0]
}

export function useGetTotalDue(contract: Contract | null, loanTermId: number, asOf: number): BigNumber {
  const { result } = useSingleCallResult(contract, 'getTotalDue', [loanTermId, asOf])
  return result?.[0]
}

export function useGetPremiumPaymentSchedule(
  contract: Contract | null,
  loanId: number
): LoanRepaymentSchedule | undefined {
  const { result } = useSingleCallResult(contract, 'getPremiumPaymentSchedule', [loanId])

  return { paymentDueTimeStamp: result?.[0], paymentAmount: result?.[1] }
}

export function useGetPrincipalPaymentSchedule(contract: Contract | null, loanId: number): LoanRepaymentSchedule {
  const { result } = useSingleCallResult(contract, 'getPrincipalPaymentSchedule', [loanId])
  return { paymentDueTimeStamp: result?.[0], paymentAmount: result?.[1] }
}

export function useGetAvailableCapital(contract: Contract | null): string | undefined {
  const { result } = useSingleCallResult(contract, 'availableCapital')
  return result?.[0]
}

export function useAvailableCapital(): string | undefined {
  const LENDING_POOL = useLendingPoolV1Contract()

  return useGetAvailableCapital(LENDING_POOL)
}

export function useGetLiquidationRewardCost(contract: Contract | null): string | undefined {
  const { result } = useSingleCallResult(contract, 'liquidationReward')
  return result?.[0]
}

export function useCanLiquidate(contract: Contract | null, loanId: number): string {
  const { result } = useSingleCallResult(contract, 'canLiquidate', [loanId])
  return result?.[0]
}

export function useGetMaxLoanAmount(contract: Contract | null): string | undefined {
  const { result } = useSingleCallResult(contract, 'maximumLoanAmount')
  return result?.[0]
}

export function useGetPrincipalDue(contract: Contract | null, loanId: number, asOf: number): BigNumber {
  const { result } = useSingleCallResult(contract, 'getPrincipalDue', [loanId, asOf])
  return result?.[0]
}
export function useGetPremiumDue(contract: Contract | null, loanId: number, asOf: number): BigNumber {
  const { result } = useSingleCallResult(contract, 'getPremiumsDue', [loanId, asOf])
  return result?.[0]
}

export function usePayLiabilityCallback(): (paymentValue: string, loanId: number) => undefined | Promise<string> {
  const { account, chainId } = useWeb3React()
  const latestLendingPoolContract = useLendingPoolV1Contract()
  const addTransaction = useTransactionAdder()
  const [attemptingTxn, setAttemptingTxn] = useState<boolean>(false) // clicked confirm

  return useCallback(
    async (paymentValue: string, loanId: number) => {
      // const wrappedNativeContract = getContract(wrappedNative.address, WETH_ABI, provider) as Weth

      // const balance = await wrappedNativeContract.balanceOf(account, { blockTag: 'latest' })

      if (!account || !latestLendingPoolContract || !chainId || !loanId) return undefined
      const paymentValueEth = parseEther(paymentValue || '0')
      const args = [loanId]
      return latestLendingPoolContract.estimateGas
        .payLiability(...args, { value: paymentValueEth })
        .catch((error) => {
          console.error('Failed to send transaction', error)
          setAttemptingTxn(false)
          // we only care if the error is something _other_ than the user rejected the tx
          return error
        })
        .then((estimatedGasLimit) => {
          return latestLendingPoolContract
            .payLiability(...args, { value: paymentValueEth, gasLimit: calculateGasMargin(estimatedGasLimit) })
            .then((response: TransactionResponse) => {
              addTransaction(response, {
                type: TransactionType.DEPOSIT_ETH_LENDING_POOL,
                value: paymentValueEth.toString(),
                account,
              })
              return response.hash
            })
            .catch((error: any) => {
              console.error('Failed to send transaction', error)
              setAttemptingTxn(false)

              // we only care if the error is something _other_ than the user rejected the tx
              return error
            })
        })
    },
    [account, addTransaction, latestLendingPoolContract, chainId]
  )
}

export function useGetLoanAmount(contract: Contract | null, loanId: number): string {
  const { result } = useSingleCallResult(contract, 'loanAmount', [loanId])
  return result?.[0]
}

export function useGetBuyoutLoanQuote(contract: Contract | null, loanId: number): string {
  const { result } = useSingleCallResult(contract, 'buyoutLoanQuote', [loanId])
  return result?.[0]
}

export function useGeRemainingLiability(contract: Contract | null, loanId: number): BigNumber {
  const { result } = useSingleCallResult(contract, 'getRemainingLiability', [loanId])
  return result?.[0]
}

export function useGetLoanPairQuote(contract: Contract | null, loanId: number): string {
  const { result } = useSingleCallResult(contract, 'loanPair', [loanId])
  return result?.[0]
}

export function useMaxLoanAmount(): string | undefined {
  const loan00 = useLoanTerm00()

  return useGetMaxLoanAmount(loan00)
}

export function useGetMinLoanAmount(contract: Contract | null): string | undefined {
  const { result } = useSingleCallResult(contract, 'minimumLoanAmount')

  return result?.[0]
}

export function useMinLoanAmount(): string | undefined {
  const loan00 = useLoanTerm00()
  const result = useGetMinLoanAmount(loan00)

  return result
}

export function useLiquidationFee(): string | undefined {
  const LENDING_POOL = useLendingPoolV1Contract()

  return useGetLiquidationRewardCost(LENDING_POOL)
}
interface quote {
  _hex: string
  _isBigNumber: boolean
}

interface QuoteObject {
  data: quote[]
  address: string
}

export function useAllLoanTerms(
  loanAmount: BigNumber,
  loanDurationSeconds: string
): { loan1: QuoteObject; loan2: QuoteObject; loan3: QuoteObject } {
  const LENDING_POOL = useLendingPoolV1Contract()
  const { account } = useWeb3React()
  let caller
  caller = account
  if (account === undefined) {
    // const discount
    // caller = '0xdb9175f3a76eea493b52b69b67155df715c8b605'

    caller = '0x000000000000000000000000000000000000dEaD'
  }

  const loan1 = useLoanTermLookUp(LENDING_POOL, 0)
  const loan2 = useLoanTermLookUp(LENDING_POOL, 1)
  const loan3 = useLoanTermLookUp(LENDING_POOL, 2)

  const loan1quote = useGetDiscountedQuote(LENDING_POOL, {
    account: caller,
    loanTerm: loan1,
    loanAmount,
    loanDurationSeconds,
  })

  const loan2quote = useGetDiscountedQuote(LENDING_POOL, {
    account: caller,
    loanTerm: loan2,
    loanAmount,
    loanDurationSeconds,
  })
  const loan3quote = useGetDiscountedQuote(LENDING_POOL, {
    account: caller,
    loanTerm: loan3,
    loanAmount,
    loanDurationSeconds,
  })

  return {
    loan1: { data: loan1quote, address: loan1 },
    loan2: { data: loan2quote, address: loan2 },
    loan3: { data: loan3quote, address: loan3 },
  }
}

export function useMintState(): AppState['mint'] {
  return useAppSelector((state) => state.mint)
}

export function useMintActionHandlers(noLiquidity: boolean | undefined): {
  onFieldAInput: (typedValue: string) => void
  onFieldBInput: (typedValue: string) => void
} {
  const dispatch = useAppDispatch()

  const onFieldAInput = useCallback(
    (typedValue: string) => {
      dispatch(typeInput({ field: Field.CURRENCY_A, typedValue, noLiquidity: noLiquidity === true }))
    },
    [dispatch, noLiquidity]
  )

  const onFieldBInput = useCallback(
    (typedValue: string) => {
      dispatch(typeInput({ field: Field.CURRENCY_B, typedValue, noLiquidity: noLiquidity === true }))
    },
    [dispatch, noLiquidity]
  )

  return {
    onFieldAInput,
    onFieldBInput,
  }
}

export function useDerivedMintInfo(
  isLoan: boolean | undefined,
  currencyA: Currency | undefined,
  currencyB: Currency | undefined
): {
  dependentField: Field
  currencies: { [field in Field]?: Currency }
  pair?: Pair | null
  pairState: PairState
  currencyBalances: { [field in Field]?: CurrencyAmount<Currency> }
  parsedAmounts: { [field in Field]?: CurrencyAmount<Currency> }
  price?: Price<Currency, Currency>
  noLiquidity?: boolean
  liquidityMinted?: CurrencyAmount<Token>
  poolTokenPercentage?: Percent
  error?: ReactNode
} {
  const { account } = useWeb3React()

  const { independentField, typedValue, otherTypedValue } = useMintState()

  const dependentField = independentField === Field.CURRENCY_A ? Field.CURRENCY_B : Field.CURRENCY_A
  const currentDEX = useCurrentDEX()

  // tokens
  const currencies: { [field in Field]?: Currency } = useMemo(
    () => ({
      [Field.CURRENCY_A]: currencyA ?? undefined,
      [Field.CURRENCY_B]: currencyB ?? undefined,
    }),
    [currencyA, currencyB]
  )

  // pair
  const [pairState, pair] = useXV2Pair(
    currentDEX.currentDEX,
    currencies[Field.CURRENCY_A],
    currencies[Field.CURRENCY_B]
  )
  const totalSupply = useTotalSupply(pair?.liquidityToken)

  const noLiquidity: boolean =
    pairState === PairState.NOT_EXISTS ||
    Boolean(totalSupply && JSBI.equal(totalSupply.quotient, ZERO)) ||
    Boolean(
      pairState === PairState.EXISTS &&
        pair &&
        JSBI.equal(pair.reserve0.quotient, ZERO) &&
        JSBI.equal(pair.reserve1.quotient, ZERO)
    )

  // balances
  const balances = useCurrencyBalances(
    account ?? undefined,
    useMemo(() => [currencies[Field.CURRENCY_A], currencies[Field.CURRENCY_B]], [currencies])
  )

  const currencyBalances: { [field in Field]?: CurrencyAmount<Currency> } = {
    [Field.CURRENCY_A]: balances[0],
    [Field.CURRENCY_B]: balances[1],
  }

  // amounts
  const independentAmount: CurrencyAmount<Currency> | undefined = tryParseCurrencyAmount(
    typedValue,
    currencies[independentField]
  )
  const dependentAmount: CurrencyAmount<Currency> | undefined = useMemo(() => {
    if (noLiquidity) {
      if (otherTypedValue && currencies[dependentField]) {
        return tryParseCurrencyAmount(otherTypedValue, currencies[dependentField])
      }
      return undefined
    } else if (independentAmount) {
      // we wrap the currencies just to get the price in terms of the other token
      const wrappedIndependentAmount = independentAmount?.wrapped
      const [tokenA, tokenB] = [currencyA?.wrapped, currencyB?.wrapped]
      if (tokenA && tokenB && wrappedIndependentAmount && pair) {
        const dependentCurrency = dependentField === Field.CURRENCY_B ? currencyB : currencyA
        const dependentTokenAmount =
          dependentField === Field.CURRENCY_B
            ? pair.priceOf(tokenA).quote(wrappedIndependentAmount)
            : pair.priceOf(tokenB).quote(wrappedIndependentAmount)
        return dependentCurrency?.isNative
          ? CurrencyAmount.fromRawAmount(dependentCurrency, dependentTokenAmount.quotient)
          : dependentTokenAmount
      }
      return undefined
    } else {
      return undefined
    }
  }, [noLiquidity, otherTypedValue, currencies, dependentField, independentAmount, currencyA, currencyB, pair])

  const parsedAmounts: { [field in Field]: CurrencyAmount<Currency> | undefined } = useMemo(() => {
    return {
      [Field.CURRENCY_A]: independentField === Field.CURRENCY_A ? independentAmount : dependentAmount,
      [Field.CURRENCY_B]: independentField === Field.CURRENCY_A ? dependentAmount : independentAmount,
    }
  }, [dependentAmount, independentAmount, independentField])

  const price = useMemo(() => {
    if (noLiquidity) {
      const { [Field.CURRENCY_A]: currencyAAmount, [Field.CURRENCY_B]: currencyBAmount } = parsedAmounts
      if (currencyAAmount?.greaterThan(0) && currencyBAmount?.greaterThan(0)) {
        const value = currencyBAmount.divide(currencyAAmount)
        return new Price(currencyAAmount.currency, currencyBAmount.currency, value.denominator, value.numerator)
      }
      return undefined
    } else {
      const wrappedCurrencyA = currencyA?.wrapped
      return pair && wrappedCurrencyA ? pair.priceOf(wrappedCurrencyA) : undefined
    }
  }, [currencyA, noLiquidity, pair, parsedAmounts])

  // liquidity minted
  const liquidityMinted = useMemo(() => {
    const { [Field.CURRENCY_A]: currencyAAmount, [Field.CURRENCY_B]: currencyBAmount } = parsedAmounts
    const [tokenAmountA, tokenAmountB] = [currencyAAmount?.wrapped, currencyBAmount?.wrapped]
    if (pair && totalSupply && tokenAmountA && tokenAmountB) {
      try {
        return pair.getLiquidityMinted(totalSupply, tokenAmountA, tokenAmountB)
      } catch (error) {
        console.error(error)
        return undefined
      }
    } else {
      return undefined
    }
  }, [parsedAmounts, pair, totalSupply])

  const poolTokenPercentage = useMemo(() => {
    if (liquidityMinted && totalSupply) {
      return new Percent(liquidityMinted.quotient, totalSupply.add(liquidityMinted).quotient)
    } else {
      return undefined
    }
  }, [liquidityMinted, totalSupply])

  let error: ReactNode | undefined
  if (!account) {
    error = <Trans>Connect Wallet</Trans>
  }

  if (pairState === PairState.INVALID) {
    error = error ?? <Trans>Invalid pair</Trans>
  }

  if (!parsedAmounts[Field.CURRENCY_A] || !parsedAmounts[Field.CURRENCY_B]) {
    error = error ?? <Trans>Enter an amount</Trans>
  }

  const { [Field.CURRENCY_A]: currencyAAmount, [Field.CURRENCY_B]: currencyBAmount } = parsedAmounts

  if (isLoan) {
    if (!noLiquidity) {
      error = <Trans>Enter Pair Without Xchange Liquidity</Trans>
    }
  } else {
    if (currencyAAmount && currencyBalances?.[Field.CURRENCY_A]?.lessThan(currencyAAmount)) {
      error = <Trans>Insufficient {currencies[Field.CURRENCY_A]?.symbol} balance</Trans>
    }
  }

  if (currencyBAmount && currencyBalances?.[Field.CURRENCY_B]?.lessThan(currencyBAmount)) {
    error = <Trans>Insufficient {currencies[Field.CURRENCY_B]?.symbol} balance</Trans>
  }

  return {
    dependentField,
    currencies,
    pair,
    pairState,
    currencyBalances,
    parsedAmounts,
    price,
    noLiquidity,
    liquidityMinted,
    poolTokenPercentage,
    error,
  }
}
