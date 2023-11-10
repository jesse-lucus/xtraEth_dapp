import { CurrencyAmount, Token } from '@uniswap/sdk-core'
import { dexIdToPermitHashName } from 'constants/dexs'
import { useCurrentDEX } from 'state/dex/hooks'

import { PermitInfo, PermitType, useERC20Permit } from './useERC20Permit'
import useTransactionDeadline from './useTransactionDeadline'

export function useV2LiquidityTokenPermit(
  liquidityAmount: CurrencyAmount<Token> | null | undefined,
  spender: string | null | undefined
) {
  const dexInfo = useCurrentDEX()
  const permitName = dexIdToPermitHashName[dexInfo.currentDEX] || 'Xchange AMM V1'

  const REMOVE_V2_LIQUIDITY_PERMIT_INFO: PermitInfo = {
    version: '1',
    name: permitName,
    type: PermitType.AMOUNT,
  }
  const transactionDeadline = useTransactionDeadline()

  return useERC20Permit(liquidityAmount, spender, transactionDeadline, REMOVE_V2_LIQUIDITY_PERMIT_INFO)
}
