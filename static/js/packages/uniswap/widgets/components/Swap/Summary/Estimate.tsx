// eslint-disable-next-line no-restricted-imports

import { formatCurrencyAmount, NumberType } from '@uniswap/conedison/format'
import { useMemo } from 'react'
import styled from 'styled-components/macro'

import { Slippage } from '../../../hooks/useSlippage'
import { InterfaceTrade } from '../../../state/routing/types'
import { ThemedText } from '../../../theme'
import { isExactInput } from '../../../utils/tradeType'

const StyledEstimate = styled(ThemedText.Caption)`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  max-height: 3em;
`

interface EstimateProps {
  slippage: Slippage
  trade: InterfaceTrade
}

export default function SwapInputOutputEstimate({ trade, slippage }: EstimateProps) {
  const { estimateMessage } = useMemo(() => getEstimateMessage(trade, slippage), [slippage, trade])
  return <StyledEstimate color="secondary">{estimateMessage}</StyledEstimate>
}

export function getEstimateMessage(trade: InterfaceTrade, slippage: Slippage) {
  const { inputAmount, outputAmount } = trade
  const inputCurrency = inputAmount.currency
  const outputCurrency = outputAmount.currency

  if (isExactInput(trade.tradeType)) {
    const localizedMinReceived = formatCurrencyAmount(trade.minimumAmountOut(slippage.allowed), NumberType.TokenTx)
    const minReceivedString = `${localizedMinReceived} ${outputCurrency.symbol}`

    return {
      estimateMessage: `Output is estimated. You will receive at least ${minReceivedString} or the transaction will revert.`,
      descriptor: `Minimum output after slippage`,
      value: minReceivedString,
    }
  } else {
    const localizedMaxSent = formatCurrencyAmount(trade.maximumAmountIn(slippage.allowed), NumberType.TokenTx)
    const maxSentString = `${localizedMaxSent} ${inputCurrency.symbol}`

    return {
      estimateMessage: `Output is estimated. You will send at most ${maxSentString} or the transaction will revert.`,
      descriptor: `Maximum input after slippage`,
      value: maxSentString,
    }
  }
}
