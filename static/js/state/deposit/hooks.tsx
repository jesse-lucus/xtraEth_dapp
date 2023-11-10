import type { TransactionResponse } from '@ethersproject/providers'
import { parseEther } from '@ethersproject/units'
// eslint-disable-next-line no-restricted-imports
import { useWeb3React } from '@web3-react/core'
import { useLendingPoolReserveContract, useLendingPoolV1Contract } from 'hooks/useContract'
import { useCallback, useState } from 'react'
import { calculateGasMargin } from 'utils/calculateGasMargin'

import { useTransactionAdder } from '../transactions/hooks'
import { TransactionType } from '../transactions/types'

// function useLendingPoolV1Contract(): Contract | null {
//   return useContract(XCHANGE_LENDING_POOL_V1, X7LendingPoolV1, true)
// }

// function useLendingPoolReserveContract(): Contract | null {
//   return useContract(XCHANGE_LENDING_POOL_RESERVE, X7LendingPoolReserve, true)
// }

const useLatestLendingPoolContract = useLendingPoolV1Contract

export function useCreateX7DMintCallback(): (depositValue: string) => undefined | Promise<string> {
  const { account, chainId } = useWeb3React()
  const latestLendingPoolReserveContract = useLendingPoolReserveContract()
  const addTransaction = useTransactionAdder()
  const [attemptingTxn, setAttemptingTxn] = useState<boolean>(false) // clicked confirm
  return useCallback(
    (depositValue: string) => {
      if (!account || !latestLendingPoolReserveContract || !chainId) return undefined
      const depositValueEth = parseEther(depositValue || '0')
      return latestLendingPoolReserveContract.estimateGas
        .depositETH({ value: depositValueEth })
        .catch((error) => {
          console.error('Failed to send transaction', error)
          setAttemptingTxn(false)
          // we only care if the error is something _other_ than the user rejected the tx
          return error
        })
        .then((estimatedGasLimit) => {
          return latestLendingPoolReserveContract
            .depositETH({ value: depositValueEth, gasLimit: calculateGasMargin(estimatedGasLimit) })
            .then((response: TransactionResponse) => {
              addTransaction(response, {
                type: TransactionType.WITHDRAW_ETH_LENDING_POOL,
                value: depositValueEth.toString(),
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
    [account, addTransaction, latestLendingPoolReserveContract, chainId]
  )
}

export function useCreateX7DRedeemCallback(): (redeemValue: string) => undefined | Promise<string> {
  const { account, chainId } = useWeb3React()
  const latestLendingPoolReserveContract = useLendingPoolReserveContract()
  const addTransaction = useTransactionAdder()
  const [attemptingTxn, setAttemptingTxn] = useState<boolean>(false) // clicked confirm
  return useCallback(
    (redeemValue: string) => {
      if (!account || !latestLendingPoolReserveContract || !chainId) return undefined

      const redeemValueEth = parseEther(redeemValue || '0')

      return latestLendingPoolReserveContract.estimateGas
        .withdrawETH(redeemValueEth)
        .catch((error) => {
          console.error('Failed to send transaction', error)
          setAttemptingTxn(false)
          // we only care if the error is something _other_ than the user rejected the tx
          return error
        })
        .then((estimatedGasLimit) => {
          return latestLendingPoolReserveContract
            .withdrawETH(redeemValueEth, { gasLimit: calculateGasMargin(estimatedGasLimit) })
            .then((response: TransactionResponse) => {
              addTransaction(response, {
                type: TransactionType.WITHDRAW_ETH_LENDING_POOL,
                value: redeemValueEth.toString(),
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
    [account, addTransaction, latestLendingPoolReserveContract, chainId]
  )
}
