import { BigNumber } from '@ethersproject/bignumber'
import type { TransactionResponse } from '@ethersproject/providers'
// eslint-disable-next-line no-restricted-imports
import { parseUnits } from '@ethersproject/units'
import { Implementation } from '@uniswap/router-sdk'
import { Currency, CurrencyAmount, Percent } from '@uniswap/sdk-core'
import { useWeb3React } from '@web3-react/core'
import Slider from 'components/Slider'
import UnsupportedCurrencyFooter from 'components/swap/UnsupportedCurrencyFooter'
import { SwitchLocaleLink } from 'components/SwitchLocaleLink'
import { MouseoverTooltipContent } from 'components/Tooltip'
import { formatUnits } from 'ethers/lib/utils'
import useNativeCurrency from 'lib/hooks/useNativeCurrency'
import { ResponsiveHeaderText } from 'pages/RemoveLiquidity/styled'
import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Text } from 'rebass'
import { useCurrentDEX } from 'state/dex/hooks'
import { useTheme } from 'styled-components/macro'

import { ButtonLight, ButtonPrimary } from '../../components/Button'
import { ButtonError } from '../../components/Button'
import { LightCard } from '../../components/Card'
import { AutoColumn, ColumnCenter } from '../../components/Column'
import CurrencyInputPanel from '../../components/CurrencyInputPanel'
import DoubleCurrencyLogo from '../../components/DoubleLogo'
import { AddRemoveTabs } from '../../components/NavigationTabs'
import { MinimalPositionCard } from '../../components/PositionCard'
import Row, { RowBetween, RowFlat } from '../../components/Row'
import TransactionConfirmationModal, { ConfirmationModalContent } from '../../components/TransactionConfirmationModal'
import { ACTIVE_LOAN_TERMS } from '../../constants/loans'
import { WRAPPED_NATIVE_CURRENCY } from '../../constants/tokens'
import { useCurrency } from '../../hooks/Tokens'
import { ApprovalState, useApproveCallback } from '../../hooks/useApproveCallback'
import { useLendingPoolV1Contract } from '../../hooks/useContract'
import { useIsSwapUnsupported } from '../../hooks/useIsSwapUnsupported'
import useTransactionDeadline from '../../hooks/useTransactionDeadline'
import { PairState } from '../../hooks/useV2Pairs'
import { useToggleWalletModal } from '../../state/application/hooks'
import { useTransactionAdder } from '../../state/transactions/hooks'
import { TransactionType } from '../../state/transactions/types'
import { useIsExpertMode, useUserSlippageToleranceWithDefault } from '../../state/user/hooks'
import { Field } from '../../state/xmint/actions'
import {
  useAvailableCapital,
  useDerivedMintInfo,
  useMaxLoanAmount,
  useMinLoanAmount,
  useMintActionHandlers,
  useMintState,
} from '../../state/xmint/hooks'
import { useAllLoanTerms, useLiquidationFee } from '../../state/xmint/hooks'
import { HideSmall, ThemedText } from '../../theme'
import { calculateGasMargin } from '../../utils/calculateGasMargin'
import { currencyId } from '../../utils/currencyId'
import { maxAmountSpend } from '../../utils/maxAmountSpend'
import AppBody from '../AppBody'
import { Dots, Wrapper } from '../Pool/styleds'
import { ConfirmAddModalBottom } from './ConfirmAddModalBottom'
import LoadingCard from './LoadingCard'
import LoanCard from './LoanCard'

const hexToDecimal = (hex: string) => parseInt(hex, 16)

const DEFAULT_ADD_V2_SLIPPAGE_TOLERANCE = new Percent(50, 10_000)

export default function AddLoanLiquidity() {
  const { currencyIdB } = useParams<{ currencyIdB?: string }>()

  const navigate = useNavigate()
  const { account, chainId, provider } = useWeb3React()

  const theme = useTheme()
  const currencyIdA = 'ETH'
  const currencyA = useCurrency(currencyIdA)
  const currencyB = useCurrency(currencyIdB)

  const wrappedNativeCurrency = chainId ? WRAPPED_NATIVE_CURRENCY[chainId] : undefined

  const oneCurrencyIsWETH = Boolean(
    chainId &&
      wrappedNativeCurrency &&
      ((currencyA && currencyA.equals(wrappedNativeCurrency)) || (currencyB && currencyB.equals(wrappedNativeCurrency)))
  )

  const toggleWalletModal = useToggleWalletModal() // toggle wallet when disconnected

  const expertMode = useIsExpertMode()

  // mint state
  const { independentField, typedValue, otherTypedValue } = useMintState()
  const {
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
  } = useDerivedMintInfo(true, currencyA ?? undefined, currencyB ?? undefined)
  const minLoanAmountRaw = useMinLoanAmount()
  const minLoanAmount = formatUnits(minLoanAmountRaw?.toString() || '0', 18)
  const maxLoanAmountRaw = useMaxLoanAmount()
  const maxLoanAmount = formatUnits(maxLoanAmountRaw?.toString() || '0', 18)

  const amountAvailableRaw = useAvailableCapital()
  const amountAvailable = formatUnits(amountAvailableRaw?.toString() || '0', 18)

  const { onFieldAInput, onFieldBInput } = useMintActionHandlers(noLiquidity)

  const isValid = !error
  // Days
  const [loanDays, setLoanDays] = useState<number>(1)
  const [activeLoan, setActiveLoan] = useState('0x0')

  // modal and loading
  const [showConfirm, setShowConfirm] = useState<boolean>(false)
  const [attemptingTxn, setAttemptingTxn] = useState<boolean>(false) // clicked confirm

  // txn values
  const deadline = useTransactionDeadline() // custom from users settings
  const allowedSlippage = useUserSlippageToleranceWithDefault(DEFAULT_ADD_V2_SLIPPAGE_TOLERANCE) // custom from users
  const [txHash, setTxHash] = useState<string>('')
  const liquidationReward = useLiquidationFee()

  // get formatted amounts
  const formattedAmounts = {
    [independentField]: typedValue,
    [dependentField]: noLiquidity ? otherTypedValue : parsedAmounts[dependentField]?.toSignificant(6) ?? '',
  }

  //Quote
  const loanQuotes = useAllLoanTerms(
    parseFloat(formattedAmounts[Field.CURRENCY_A]) > 0
      ? parseUnits(formattedAmounts[Field.CURRENCY_A], 18)
      : BigNumber.from('0'),
    (loanDays * 24 * 60 * 60).toString()
  )

  const nativeCurrency = useNativeCurrency()

  // get the max amounts user can add
  const maxAmounts: { [field in Field]?: CurrencyAmount<Currency> } = [Field.CURRENCY_A, Field.CURRENCY_B].reduce(
    (accumulator, field) => {
      return {
        ...accumulator,
        [field]: maxAmountSpend(currencyBalances[field]),
      }
    },
    {}
  )

  const atMaxAmounts: { [field in Field]?: CurrencyAmount<Currency> } = [Field.CURRENCY_A, Field.CURRENCY_B].reduce(
    (accumulator, field) => {
      return {
        ...accumulator,
        [field]: maxAmounts[field]?.equalTo(parsedAmounts[field] ?? '0'),
      }
    },
    {}
  )

  useEffect(() => {
    // console.log('You clicked times')
  }, [typedValue, loanDays])

  const lendingPool = useLendingPoolV1Contract()

  // check whether the user has approved the lendingPool on the tokens
  const [approvalA, approveACallback] = useApproveCallback(parsedAmounts[Field.CURRENCY_A], lendingPool?.address)
  const [approvalB, approveBCallback] = useApproveCallback(parsedAmounts[Field.CURRENCY_B], lendingPool?.address)
  const currentDEX = useCurrentDEX()
  const addTransaction = useTransactionAdder()

  async function onAdd() {
    if (!chainId || !provider || !account || !lendingPool) return

    const { [Field.CURRENCY_A]: parsedAmountA, [Field.CURRENCY_B]: parsedAmountB } = parsedAmounts
    if (!parsedAmountA || !parsedAmountB || !currencyA || !currencyB || !deadline) {
      return
    }

    let estimate,
      method: (...args: any) => Promise<TransactionResponse>,
      args: Array<string | string[] | number>,
      value: BigNumber
    value = BigNumber.from(liquidationReward)
    if (currencyA.isNative || currencyB.isNative) {
      const tokenBIsETH = currencyB.isNative
      estimate = lendingPool.estimateGas.getInitialLiquidityLoan
      method = lendingPool.getInitialLiquidityLoan

      const term = ACTIVE_LOAN_TERMS[activeLoan]

      args = [
        tokenBIsETH ? '' : currencyB.address, // address tokenAddress,
        parsedAmountB.quotient.toString(), // uint256 amount, to borrow
        term?.address, // address loanTermContract,
        parsedAmountA.quotient.toString(), // uint256 loanAmount,
        (loanDays * 24 * 60 * 60).toString(), // uint256 loanDurationSeconds,
        account, // address liquidityReceiver,
        deadline.toHexString(), // uint256 deadline
      ]

      // TODO MOVE THIS INTO A HELPER
      if (loanQuotes?.loan1.address == term?.address) {
        const loan1 = loanQuotes?.loan1.data
        value = BigNumber.from(loan1[3]).add(BigNumber.from(liquidationReward))
      } else if (loanQuotes?.loan2.address == term?.address) {
        const loan2 = loanQuotes?.loan2.data
        value = BigNumber.from(loan2[3]).add(BigNumber.from(liquidationReward))
      } else if (loanQuotes?.loan3.address == term?.address) {
        const loan3 = loanQuotes?.loan3.data
        value = BigNumber.from(loan3[3]).add(BigNumber.from(liquidationReward))
      }
    } else {
      // Cant supply NON ETH, on v1
      return
    }

    setAttemptingTxn(true)
    await estimate(...args, { value })
      .then((estimatedGasLimit) =>
        method(...args, {
          ...{ value },
          gasLimit: calculateGasMargin(estimatedGasLimit),
        }).then((response) => {
          setAttemptingTxn(false)

          addTransaction(response, {
            type: TransactionType.ADD_LIQUIDITY_V2_POOL,
            baseCurrencyId: currencyId(currencyA),
            expectedAmountBaseRaw: parsedAmounts[Field.CURRENCY_A]?.quotient.toString() ?? '0',
            quoteCurrencyId: currencyId(currencyB),
            expectedAmountQuoteRaw: parsedAmounts[Field.CURRENCY_B]?.quotient.toString() ?? '0',
          })

          setTxHash(response.hash)
        })
      )
      .catch((error) => {
        setAttemptingTxn(false)
        // we only care if the error is something _other_ than the user rejected the tx
        if (error?.code !== 4001) {
          console.error(error)
        }
      })
  }

  const modalHeader = () => {
    return noLiquidity ? (
      <AutoColumn gap="20px">
        <LightCard mt="20px" $borderRadius="20px">
          <RowFlat>
            <Text fontSize="48px" fontWeight={500} lineHeight="42px" marginRight={10}>
              {currencies[Field.CURRENCY_A]?.symbol + '/' + currencies[Field.CURRENCY_B]?.symbol}
            </Text>
            <DoubleCurrencyLogo
              currency0={currencies[Field.CURRENCY_A]}
              currency1={currencies[Field.CURRENCY_B]}
              size={30}
            />
          </RowFlat>
        </LightCard>
      </AutoColumn>
    ) : (
      <AutoColumn gap="20px">
        <RowFlat style={{ marginTop: '20px' }}>
          <Text fontSize="48px" fontWeight={500} lineHeight="42px" marginRight={10}>
            {liquidityMinted?.toSignificant(6)}
          </Text>
          <DoubleCurrencyLogo
            currency0={currencies[Field.CURRENCY_A]}
            currency1={currencies[Field.CURRENCY_B]}
            size={30}
          />
        </RowFlat>
        <Row>
          <Text fontSize="24px">
            {currencies[Field.CURRENCY_A]?.symbol + '/' + currencies[Field.CURRENCY_B]?.symbol + ' Pool Tokens'}
          </Text>
        </Row>
        <ThemedText.DeprecatedItalic fontSize={12} textAlign="left" padding="8px 0 0 0 ">
          Output is estimated. If the price changes by more than {allowedSlippage.toSignificant(4)}% your transaction
          will revert.
        </ThemedText.DeprecatedItalic>
      </AutoColumn>
    )
  }

  const modalBottom = () => {
    return (
      <ConfirmAddModalBottom
        price={price}
        currencies={currencies}
        parsedAmounts={parsedAmounts}
        noLiquidity={noLiquidity}
        onAdd={onAdd}
        poolTokenPercentage={poolTokenPercentage}
      />
    )
  }

  const pendingText = (
    <>
      Supplying {parsedAmounts[Field.CURRENCY_A]?.toSignificant(6)} {currencies[Field.CURRENCY_A]?.symbol} and{' '}
      {parsedAmounts[Field.CURRENCY_B]?.toSignificant(6)} {currencies[Field.CURRENCY_B]?.symbol}
    </>
  )

  const handleCurrencyBSelect = useCallback(
    (currencyB: Currency) => {
      const newCurrencyIdB = currencyId(currencyB)
      if (currencyIdA === newCurrencyIdB) {
        if (currencyIdB) {
          navigate(`/add/loan/v2/${'ETH'}/${newCurrencyIdB}`)
        } else {
          navigate(`/add/loan/v2/${'ETH'}`)
        }
      } else {
        navigate(`/add/loan/v2/${'ETH'}/${newCurrencyIdB}`)
      }
    },
    [currencyIdA, navigate, currencyIdB]
  )

  const handleDismissConfirmation = useCallback(() => {
    setShowConfirm(false)
    // if there was a tx hash, we want to clear the input
    if (txHash) {
      onFieldAInput('')
    }
    setTxHash('')
  }, [onFieldAInput, txHash])

  const { pathname } = useLocation()
  const isCreate = pathname.includes('/create')

  const addIsUnsupported = useIsSwapUnsupported(currencies?.CURRENCY_A, currencies?.CURRENCY_B)

  const handleClick = (targetLoanAddress: string) => {
    if (targetLoanAddress === activeLoan) {
      setActiveLoan('0x0')
    } else {
      setActiveLoan(targetLoanAddress)
    }
  }

  return (
    <>
      <AppBody>
        <AddRemoveTabs
          creating={isCreate}
          adding={false}
          loan={true}
          defaultSlippage={DEFAULT_ADD_V2_SLIPPAGE_TOLERANCE}
        />
        <Wrapper>
          <TransactionConfirmationModal
            isOpen={showConfirm}
            onDismiss={handleDismissConfirmation}
            attemptingTxn={attemptingTxn}
            hash={txHash}
            content={() => (
              <ConfirmationModalContent
                title={noLiquidity ? 'You are creating a pool' : 'You will receive'}
                onDismiss={handleDismissConfirmation}
                topContent={modalHeader}
                bottomContent={modalBottom}
              />
            )}
            pendingText={pendingText}
            currencyToAdd={pair?.liquidityToken}
          />
          <AutoColumn gap="20px">
            {currentDEX.currentImplementation === Implementation.XCHANGE ? (
              <></>
            ) : (
              <ColumnCenter>
                <AutoColumn gap="10px">
                  <ThemedText.DeprecatedLink fontWeight={400} color="deprecated_purple1">
                    <b>Only on Xchange:</b> Initial liquidity loans are only available on Xchange, supplying will launch
                    a pair on Xchange.
                  </ThemedText.DeprecatedLink>
                </AutoColumn>
              </ColumnCenter>
            )}

            <ThemedText.DeprecatedLink fontWeight={400} color="deprecated_text4">
              <ThemedText.DeprecatedLink fontWeight={400} color="deprecated_text4">
                <b>Select Currency:</b>{' '}
              </ThemedText.DeprecatedLink>
              <CurrencyInputPanel
                value={formattedAmounts[Field.CURRENCY_B]}
                onUserInput={onFieldBInput}
                onCurrencySelect={handleCurrencyBSelect}
                onMax={() => {
                  onFieldBInput(maxAmounts[Field.CURRENCY_B]?.toExact() ?? '')
                }}
                showMaxButton={!atMaxAmounts[Field.CURRENCY_B]}
                currency={currencies[Field.CURRENCY_B] ?? null}
                id="add-loan-liquidity-input-tokenb"
                showCommonBases
              />

              <MouseoverTooltipContent
                content={
                  <ThemedText.DeprecatedLink fontWeight={400} color="deprecated_purple1">
                    <b>Available Liquidity:</b>{' '}
                    <>
                      {amountAvailable} {nativeCurrency.symbol?.toString() ?? 'ETH'}
                    </>
                  </ThemedText.DeprecatedLink>
                }
              >
                <b>Loan Amount:</b> Up to {maxLoanAmount}{' '}
                <HideSmall> {nativeCurrency.symbol?.toString() ?? 'ETH'}.</HideSmall>
              </MouseoverTooltipContent>
            </ThemedText.DeprecatedLink>
            <CurrencyInputPanel
              value={formattedAmounts[Field.CURRENCY_A]}
              onUserInput={onFieldAInput}
              onMax={() => {
                onFieldAInput(maxLoanAmount)
              }}
              // onCurrencySelect={handleCurrencyASelect}
              showMaxButton={true}
              onCurrencySelect={() => ({})}
              hideBalance={false}
              currency={currencies[Field.CURRENCY_A] ?? null}
              id="add-loan-liquidity-input-tokena"
              showCommonBases
            />
            <ThemedText.DeprecatedLink fontWeight={400} color="deprecated_text4">
              <b>Loan Duration:</b>{' '}
            </ThemedText.DeprecatedLink>

            <AutoColumn gap="md">
              <RowBetween>
                <ResponsiveHeaderText>
                  {loanDays} {loanDays === 1 ? 'day' : 'days'}
                </ResponsiveHeaderText>
              </RowBetween>
              <Slider value={loanDays} onChange={setLoanDays} min={1} max={28} style={{ color: 'white' }} />
            </AutoColumn>
            <AutoColumn>
              {' '}
              <ColumnCenter>
                <AutoColumn gap="10px">
                  <ThemedText.DeprecatedLink fontWeight={400} color="deprecated_purple1" padding={10}>
                    <b>Loan - Leverage - Origination Fee</b>{' '}
                  </ThemedText.DeprecatedLink>
                </AutoColumn>
              </ColumnCenter>
            </AutoColumn>
            {loanQuotes?.loan1?.data && (
              <>
                {' '}
                {loanQuotes?.loan1 ? (
                  <LoanCard
                    loanData={loanQuotes?.loan1}
                    loanTerm={0}
                    selectedTerm={activeLoan}
                    loanDuration={loanDays}
                    handleSelectTerm={handleClick}
                  />
                ) : (
                  <LoadingCard />
                )}
                {loanQuotes?.loan2 ? (
                  <LoanCard
                    loanData={loanQuotes?.loan2}
                    loanTerm={1}
                    selectedTerm={activeLoan}
                    loanDuration={loanDays}
                    handleSelectTerm={handleClick}
                  />
                ) : (
                  <LoadingCard />
                )}
                {loanQuotes?.loan3 ? (
                  <LoanCard
                    loanData={loanQuotes?.loan3}
                    loanTerm={2}
                    selectedTerm={activeLoan}
                    loanDuration={loanDays}
                    handleSelectTerm={handleClick}
                  />
                ) : (
                  <LoadingCard />
                )}
              </>
            )}

            {addIsUnsupported ? (
              <ButtonPrimary disabled={true}>
                <ThemedText.DeprecatedMain mb="4px">Unsupported Asset</ThemedText.DeprecatedMain>
              </ButtonPrimary>
            ) : !account ? (
              <ButtonLight onClick={toggleWalletModal}>Connect Wallet</ButtonLight>
            ) : (
              <AutoColumn gap="md">
                {(approvalA === ApprovalState.NOT_APPROVED ||
                  approvalA === ApprovalState.PENDING ||
                  approvalB === ApprovalState.NOT_APPROVED ||
                  approvalB === ApprovalState.PENDING) &&
                  isValid && (
                    <RowBetween>
                      {approvalA !== ApprovalState.APPROVED && (
                        <ButtonPrimary
                          onClick={approveACallback}
                          disabled={approvalA === ApprovalState.PENDING}
                          width={approvalB !== ApprovalState.APPROVED ? '48%' : '100%'}
                        >
                          {approvalA === ApprovalState.PENDING ? (
                            <Dots>
                              <>Approving {currencies[Field.CURRENCY_A]?.symbol}</>
                            </Dots>
                          ) : (
                            <>Approve {currencies[Field.CURRENCY_A]?.symbol}</>
                          )}
                        </ButtonPrimary>
                      )}
                      {approvalB !== ApprovalState.APPROVED && (
                        <ButtonPrimary
                          onClick={approveBCallback}
                          disabled={approvalB === ApprovalState.PENDING}
                          width={approvalA !== ApprovalState.APPROVED ? '48%' : '100%'}
                        >
                          {approvalB === ApprovalState.PENDING ? (
                            <Dots>
                              <>Approving {currencies[Field.CURRENCY_B]?.symbol}</>
                            </Dots>
                          ) : (
                            <>Approve {currencies[Field.CURRENCY_B]?.symbol}</>
                          )}
                        </ButtonPrimary>
                      )}
                    </RowBetween>
                  )}
                {/*HERE */}
                {parseFloat(formattedAmounts[Field.CURRENCY_A]) < parseFloat(minLoanAmount) ||
                parseFloat(formattedAmounts[Field.CURRENCY_A]) > parseFloat(maxLoanAmount) ? (
                  <ButtonError disabled={true} error={true}>
                    <Text fontSize={20} fontWeight={500}>
                      Loaned amount must be between {minLoanAmount} and {maxLoanAmount}
                    </Text>
                  </ButtonError>
                ) : (
                  <ButtonError
                    onClick={() => {
                      expertMode ? onAdd() : setShowConfirm(true)
                    }}
                    disabled={
                      !isValid ||
                      approvalA !== ApprovalState.APPROVED ||
                      approvalB !== ApprovalState.APPROVED ||
                      activeLoan === '0x0'
                    }
                    error={!isValid && !!parsedAmounts[Field.CURRENCY_A] && !!parsedAmounts[Field.CURRENCY_B]}
                  >
                    <Text fontSize={20} fontWeight={500}>
                      {error ?? 'Supply With Initial Liquidity Loan'}
                    </Text>
                  </ButtonError>
                )}
              </AutoColumn>
            )}
          </AutoColumn>
        </Wrapper>
      </AppBody>
      <SwitchLocaleLink />

      {!addIsUnsupported ? (
        pair && !noLiquidity && pairState !== PairState.INVALID ? (
          <AutoColumn style={{ minWidth: '20rem', width: '100%', maxWidth: '400px', marginTop: '1rem' }}>
            <MinimalPositionCard showUnwrapped={oneCurrencyIsWETH} pair={pair} />
          </AutoColumn>
        ) : null
      ) : (
        <UnsupportedCurrencyFooter
          show={addIsUnsupported}
          currencies={[currencies.CURRENCY_A, currencies.CURRENCY_B]}
        />
      )}
    </>
  )
}
