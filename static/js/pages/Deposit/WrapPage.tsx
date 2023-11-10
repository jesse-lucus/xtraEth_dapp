import { parseEther, parseUnits } from '@ethersproject/units'
import { Currency, CurrencyAmount } from '@uniswap/sdk-core'
import { useWeb3React } from '@web3-react/core'
// import CurrencyInputPanel from 'components/CurrencyInputPanel'
import CurrencyInputPanel from 'components/CurrencyInputPanel'
import { nativeOnChain } from 'constants/tokens'
import React from 'react'
import styled from 'styled-components/macro'

import { useStablecoinValue } from '../../hooks/useStablecoinPrice'

// import {currencyBalances} from

const TokenDetailContainer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
`

export const WrapPage = ({
  className,
  currency,
  amount,
  onAmountInput,
}: {
  className?: string
  currency: Currency | undefined
  amount: string
  onAmountInput: (amount: string) => void
}) => {
  // balances
  const { account, chainId } = useWeb3React()
  if (amount === '.') amount = '0.'

  try {
    parseUnits(amount, 18)
  } catch {
    amount = amount.substring(0, -18)
  }
  const depositValueEth = parseEther(amount || '0')
  const nativeCurrency = nativeOnChain(chainId || 1)
  let ethAmount
  try {
    ethAmount = CurrencyAmount.fromRawAmount(nativeCurrency, depositValueEth.toString())
  } catch {
    ethAmount = CurrencyAmount.fromRawAmount(nativeCurrency, '0')
  }
  const fiatValueOutput = useStablecoinValue(ethAmount)

  return (
    <TokenDetailContainer className={className}>
      <CurrencyInputPanel
        key="loan"
        value={amount}
        currency={currency}
        onUserInput={(amount: string) => onAmountInput(amount)}
        showMaxButton={false}
        showCommonBases={true}
        showCurrencyAmount={true}
        disableNonToken={true}
        hideBalance={false}
        id="currency-input"
        fiatValue={fiatValueOutput}
      />
    </TokenDetailContainer>
  )
}
