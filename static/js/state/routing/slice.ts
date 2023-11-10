import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import { Implementation, Protocol } from '@uniswap/router-sdk'
import { AlphaRouter, ChainId } from '@uniswap/smart-order-router'
import { RPC_PROVIDERS } from 'constants/providers'
import { getClientSideQuote, toSupportedChainId } from 'lib/hooks/routing/clientSideSmartOrderRouter'
import ms from 'ms.macro'

import { GetQuoteResult } from './types'

export enum RouterPreference {
  API = 'api',
  CLIENT = 'client',
  PRICE = 'price',
}

const routers = new Map<[ChainId, Implementation], AlphaRouter>()

function getRouter(chainId: ChainId, implementation: Implementation): AlphaRouter {
  const cached = routers.get([chainId, implementation])
  if (cached) return cached

  const supportedChainId = toSupportedChainId(chainId)
  if (supportedChainId) {
    const provider = RPC_PROVIDERS[supportedChainId]
    const router = new AlphaRouter({ chainId, implementation, provider })
    routers.set([chainId, implementation], router)
    return router
  }

  throw new Error(`Router does not support this chain (chainId: ${chainId}).`)
}

// routing API quote params: https://github.com/Uniswap/routing-api/blob/main/lib/handlers/quote/schema/quote-schema.ts
const API_QUERY_PARAMS = {
  protocols: 'v2,v3,mixed',
}
const CLIENT_PARAMS = {
  protocols: [Protocol.V2, Protocol.V3, Protocol.MIXED],
}
// Price queries are tuned down to minimize the required RPCs to respond to them.
// TODO(zzmp): This will be used after testing router caching.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PRICE_PARAMS = {
  protocols: [Protocol.V2, Protocol.V3],
  v2PoolSelection: {
    topN: 2,
    topNDirectSwaps: 1,
    topNTokenInOut: 2,
    topNSecondHop: 1,
    topNWithEachBaseToken: 2,
    topNWithBaseToken: 2,
  },
  v3PoolSelection: {
    topN: 2,
    topNDirectSwaps: 1,
    topNTokenInOut: 2,
    topNSecondHop: 1,
    topNWithEachBaseToken: 2,
    topNWithBaseToken: 2,
  },
  maxSwapsPerPath: 2,
  minSplits: 1,
  maxSplits: 1,
  distributionPercent: 100,
}

export const routingApi = createApi({
  reducerPath: 'routingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.uniswap.org/v1/',
  }),
  endpoints: (build) => ({
    getQuote: build.query<
      GetQuoteResult,
      {
        tokenInAddress: string
        tokenInChainId: ChainId
        tokenInDecimals: number
        tokenInSymbol?: string
        tokenOutAddress: string
        tokenOutChainId: ChainId
        tokenOutDecimals: number
        tokenOutSymbol?: string
        amount: string
        routerPreference: RouterPreference
        type: 'exactIn' | 'exactOut'
        implementations: Implementation[]
      }
    >({
      async queryFn(args, _api, _extraOptions, fetch) {
        const {
          tokenInAddress,
          tokenInChainId,
          tokenInDecimals,
          tokenInSymbol,
          tokenOutAddress,
          tokenOutChainId,
          tokenOutDecimals,
          tokenOutSymbol,
          amount,
          routerPreference,
          type,
          implementations,
        } = args

        let results

        try {
          const quoteArgs = {
            tokenInAddress,
            tokenInChainId,
            tokenInDecimals,
            tokenInSymbol,
            tokenOutAddress,
            tokenOutChainId,
            tokenOutDecimals,
            tokenOutSymbol,
            amount,
            routerPreference,
            type,
          }

          results = (
            await Promise.all(
              implementations.map(async (implementation) => {
                const router = getRouter(args.tokenInChainId, implementation)

                let params

                if (implementation === Implementation.XCHANGE) {
                  params = {
                    protocols: [Protocol.V2],
                  }
                } else {
                  params = CLIENT_PARAMS
                }
                try {
                  // console.log('args for client side quote')
                  // console.log(quoteArgs)
                  // console.log('implementation: ' + implementation)
                  const result = await getClientSideQuote(
                    quoteArgs,
                    router,
                    // TODO(zzmp): Use PRICE_PARAMS for RouterPreference.PRICE.
                    // This change is intentionally being deferred to first see what effect router caching has.
                    params,
                    implementation
                  )
                  return result.data as GetQuoteResult
                } catch (e) {
                  // console.log('error in promise to client side quote')
                  // console.log(e)
                  return null
                }
              })
            )
          ).filter((x) => x != null) as GetQuoteResult[]

          // console.log('in slice')
          // console.log(results)

          if (results.length === 0) {
            throw 'No routes found'
          }

          results = results.sort((result1, result2) => {
            const quote1 = BigInt(result1.quote)
            const quote2 = BigInt(result2.quote)
            if (quote1 > quote2) {
              return type === 'exactIn' ? 1 : -1
            }

            if (quote1 < quote2) {
              return type === 'exactIn' ? -1 : 1
            }

            return 0
          })

          return { data: results[results.length - 1] as GetQuoteResult }
        } catch (e) {
          // console.log('error')
          // console.log(e)
          // TODO: fall back to client-side quoter when auto router fails.
          // deprecate 'legacy' v2/v3 routers first.
          return { error: e as FetchBaseQueryError }
        }
      },
      keepUnusedDataFor: ms`10s`,
      extraOptions: {
        maxRetries: 0,
      },
    }),
  }),
})

export const { useGetQuoteQuery } = routingApi
