import { BigNumber } from '@ethersproject/bignumber'
import { Implementation, SwapRouter, Trade } from '@uniswap/router-sdk'
import { Currency, Percent, TradeType } from '@uniswap/sdk-core'
import { Pair, Route as V2Route, Router as V2SwapRouter, Trade as V2Trade } from '@uniswap/v2-sdk'
import { FeeOptions } from '@uniswap/v3-sdk'
import { useWeb3React } from '@web3-react/core'
import { SWAP_ROUTER_ADDRESSES } from 'constants/addresses'
import { useV2RouterContract } from 'hooks/useContract'
import { useMemo } from 'react'
import approveAmountCalldata from 'utils/approveAmountCalldata'

import { useArgentWalletContract } from './useArgentWalletContract'
import useENS from './useENS'
import { SignatureData } from './useERC20Permit'

interface SwapCall {
  address: string
  calldata: string
  value: string
}

/**
 * Returns the swap calls that can be used to make the trade
 * @param trade trade to execute
 * @param allowedSlippage user allowed slippage
 * @param recipientAddressOrName the ENS name or address of the recipient of the swap output
 * @param signatureData the signature data of the permit of the input token amount, if available
 */
export function useSwapCallArguments(
  trade: Trade<Currency, Currency, TradeType> | undefined,
  allowedSlippage: Percent,
  recipientAddressOrName: string | null | undefined,
  signatureData: SignatureData | null | undefined,
  deadline: BigNumber | undefined,
  feeOptions: FeeOptions | undefined,
  implementation: Implementation | undefined
): SwapCall[] {
  const { account, chainId, provider } = useWeb3React()

  const { address: recipientAddress } = useENS(recipientAddressOrName)
  const recipient = recipientAddressOrName === null ? account : recipientAddress

  const argentWalletContract = useArgentWalletContract()
  const routerContract = useV2RouterContract(chainId as number, implementation)

  return useMemo(() => {
    if (!trade || !recipient || !provider || !account || !chainId || !deadline || !implementation) return []

    if (implementation !== Implementation.XCHANGE) {
      const swapRouterAddress = chainId ? SWAP_ROUTER_ADDRESSES[chainId] : undefined
      if (!swapRouterAddress) return []

      const { value, calldata } = SwapRouter.swapCallParameters(trade, {
        fee: feeOptions,
        recipient,
        slippageTolerance: allowedSlippage,
        ...(signatureData
          ? {
              inputTokenPermit:
                'allowed' in signatureData
                  ? {
                      expiry: signatureData.deadline,
                      nonce: signatureData.nonce,
                      s: signatureData.s,
                      r: signatureData.r,
                      v: signatureData.v as any,
                    }
                  : {
                      deadline: signatureData.deadline,
                      amount: signatureData.amount,
                      s: signatureData.s,
                      r: signatureData.r,
                      v: signatureData.v as any,
                    },
            }
          : {}),

        deadlineOrPreviousBlockhash: deadline.toString(),
      })

      if (argentWalletContract && trade.inputAmount.currency.isToken) {
        return [
          {
            address: argentWalletContract.address,
            calldata: argentWalletContract.interface.encodeFunctionData('wc_multiCall', [
              [
                approveAmountCalldata(trade.maximumAmountIn(allowedSlippage), swapRouterAddress),
                {
                  to: swapRouterAddress,
                  value,
                  data: calldata,
                },
              ],
            ]),
            value: '0x0',
          },
        ]
      }
      return [
        {
          address: swapRouterAddress,
          calldata,
          value,
        },
      ]
    } else {
      const swapMethods = []

      const pairs = trade.swaps[0].route.pools.filter((pool) => pool instanceof Pair) as Pair[]
      if (pairs.length === 0) {
        return []
      }

      const v2Route = new V2Route(pairs, trade.inputAmount.currency, trade.outputAmount.currency)
      const v2Trade = new V2Trade(
        v2Route,
        // trade.tradeType === TradeType.EXACT_INPUT ? trade.inputAmount : trade.outputAmount,
        trade.inputAmount,
        TradeType.EXACT_INPUT
      )

      if (!routerContract) return []

      // console.log('v2 trade', v2Trade)

      // @ts-ignore
      if (v2Trade.tradeType === TradeType.EXACT_OUTPUT) {
        swapMethods.push(
          V2SwapRouter.swapCallParameters(v2Trade, {
            feeOnTransfer: false,
            allowedSlippage,
            recipient,
            deadline: deadline.toNumber(),
          })
        )
      }

      if (v2Trade.tradeType === TradeType.EXACT_INPUT) {
        swapMethods.push(
          V2SwapRouter.swapCallParameters(v2Trade, {
            feeOnTransfer: true,
            allowedSlippage,
            recipient,
            deadline: deadline.toNumber(),
          })
        )
      }

      return swapMethods.map(({ methodName, args, value }) => {
        if (argentWalletContract && trade.inputAmount.currency.isToken) {
          return {
            address: argentWalletContract.address,
            calldata: argentWalletContract.interface.encodeFunctionData('wc_multiCall', [
              [
                approveAmountCalldata(trade.maximumAmountIn(allowedSlippage), routerContract.address),
                {
                  to: routerContract.address,
                  value,
                  data: routerContract.interface.encodeFunctionData(methodName, args),
                },
              ],
            ]),
            value: '0x0',
          }
        } else {
          return {
            address: routerContract.address,
            calldata: routerContract.interface.encodeFunctionData(methodName, args),
            value,
          }
        }
      })
    }
  }, [
    account,
    allowedSlippage,
    argentWalletContract,
    chainId,
    deadline,
    feeOptions,
    provider,
    recipient,
    signatureData,
    trade,
  ])
}
