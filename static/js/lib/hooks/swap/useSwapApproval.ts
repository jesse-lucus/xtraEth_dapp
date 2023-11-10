import { Implementation, Trade } from '@uniswap/router-sdk'
import { Currency, CurrencyAmount, Percent, Token, TradeType } from '@uniswap/sdk-core'
import { useWeb3React } from '@web3-react/core'
import { SWAP_ROUTER_ADDRESSES, XCHANGE_ROUTER_ADDRESS } from 'constants/addresses'
import { useMemo } from 'react'

import { useApproval } from '../useApproval'

export { ApprovalState } from '../useApproval'

// wraps useApproveCallback in the context of a swap
export default function useSwapApproval(
  trade: Trade<Currency, Currency, TradeType> | undefined,
  allowedSlippage: Percent,
  useIsPendingApproval: (token?: Token, spender?: string) => boolean,
  implementation: Implementation | undefined,
  amount?: CurrencyAmount<Currency> // defaults to trade.maximumAmountIn(allowedSlippage)
) {
  const { chainId } = useWeb3React()

  const amountToApprove = useMemo(
    () => amount || (trade && trade.inputAmount.currency.isToken ? trade.maximumAmountIn(allowedSlippage) : undefined),
    [amount, trade, allowedSlippage]
  )

  let spender

  if (implementation !== Implementation.XCHANGE) {
    spender = chainId ? SWAP_ROUTER_ADDRESSES[chainId] : undefined
  } else {
    spender = chainId ? XCHANGE_ROUTER_ADDRESS[chainId] : undefined
  }

  return useApproval(amountToApprove, spender, useIsPendingApproval)
}
