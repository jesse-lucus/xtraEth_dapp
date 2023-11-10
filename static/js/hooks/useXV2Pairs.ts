import { Interface } from '@ethersproject/abi'
import { Implementation, Protocol } from '@uniswap/router-sdk'
import { Currency, CurrencyAmount } from '@uniswap/sdk-core'
import { getV2Factory } from '@uniswap/smart-order-router'
import { ChainId, FACTORY, PAIR_INIT_HASH } from '@uniswap/smart-order-router'
import IUniswapV2PairABI from '@uniswap/v2-core/build/IUniswapV2Pair.json'
import { computePairAddress, Pair } from '@uniswap/v2-sdk'
import { useMultipleContractSingleData } from 'lib/hooks/multicall'
import { useMemo } from 'react'

const PAIR_INTERFACE = new Interface(IUniswapV2PairABI.abi)

export enum PairState {
  LOADING,
  NOT_EXISTS,
  EXISTS,
  INVALID,
}

export function useXV2Pairs(
  currencies: [Currency | undefined, Currency | undefined][],
  implementation: Implementation
): [PairState, Pair | null][] {
  const tokens = useMemo(
    () => currencies.map(([currencyA, currencyB]) => [currencyA?.wrapped, currencyB?.wrapped]),
    [currencies]
  )

  const pairAddresses = useMemo(
    () =>
      tokens.map(([tokenA, tokenB]) => {
        return tokenA && tokenB && tokenA.chainId === tokenB.chainId && !tokenA.equals(tokenB)
          ? computePairAddress({
              factoryAddress: FACTORY[tokenA.chainId as ChainId][implementation][Protocol.V2],
              factoryInitCodeHash: PAIR_INIT_HASH[tokenA.chainId as ChainId][implementation][Protocol.V2],
              tokenA,
              tokenB,
            })
          : undefined
      }),
    [tokens]
  )

  const results = useMultipleContractSingleData(pairAddresses, PAIR_INTERFACE, 'getReserves')

  return useMemo(() => {
    return results.map((result, i) => {
      const { result: reserves, loading } = result
      const tokenA = tokens[i][0]
      const tokenB = tokens[i][1]

      if (loading) return [PairState.LOADING, null]
      if (!tokenA || !tokenB || tokenA.equals(tokenB)) return [PairState.INVALID, null]
      if (!reserves) return [PairState.NOT_EXISTS, null]
      const { reserve0, reserve1 } = reserves
      const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]
      return [
        PairState.EXISTS,
        new Pair(
          CurrencyAmount.fromRawAmount(token0, reserve0.toString()),
          CurrencyAmount.fromRawAmount(token1, reserve1.toString()),
          getV2Factory(tokenA.chainId, Implementation.XCHANGE)
        ),
      ]
    })
  }, [results, tokens])
}

export function useXV2Pair(
  implementation: Implementation,
  tokenA?: Currency,
  tokenB?: Currency
): [PairState, Pair | null] {
  const inputs: [[Currency | undefined, Currency | undefined]] = useMemo(() => [[tokenA, tokenB]], [tokenA, tokenB])
  return useXV2Pairs(inputs, implementation)[0]
}
