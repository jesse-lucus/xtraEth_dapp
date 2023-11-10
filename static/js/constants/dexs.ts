/**
 * List of all the networks supported by the Xchange Interface
 */
import { Implementation } from '@uniswap/router-sdk'

import { V2_FACTORY_ADDRESSES, V2_ROUTER_ADDRESS } from '../constants/addresses'
import { SupportedChainId } from '../constants/chains'
import { V2_XCHANGE_FACTORY_ADDRESSES, XCHANGE_ROUTER_V1 } from '../constants/x7'
import { constructSameAddressMap } from '../utils/constructSameAddressMap'

export const dexIdToName: { [key in Implementation]?: string } = {
  [Implementation.UNISWAP]: 'Uniswap',
  [Implementation.XCHANGE]: 'Xchange',
}

export const dexIdToPermitHashName: { [key in Implementation]?: string } = {
  [Implementation.UNISWAP]: 'Uniswap V2',
  [Implementation.XCHANGE]: 'Xchange AMM V1',
}

type AddressMap = { [chainId: number]: string }
type InitCodeMap = { [chainId: number]: string }

export const X_V2_FACTORY_ADDRESSES: { [implementation in Implementation]?: AddressMap } = {
  [Implementation.UNISWAP]: V2_FACTORY_ADDRESSES,
  [Implementation.XCHANGE]: V2_XCHANGE_FACTORY_ADDRESSES,
}

export const X_V2_FACTORY_INIT_CODE_HASH: { [implementation in Implementation]?: InitCodeMap } = {
  [Implementation.UNISWAP]: {
    [SupportedChainId.MAINNET]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
  },
  [Implementation.XCHANGE]: {
    [SupportedChainId.MAINNET]: '0x8ef3e731dfb0265c5b89d4d1ef69c1d448b1335eb48d76cb6df26c198f75bc68',
  },
}

export const X_V2_ROUTER_ADDRESSES: { [implementation in Implementation]?: AddressMap } = {
  [Implementation.UNISWAP]: V2_ROUTER_ADDRESS,
  [Implementation.XCHANGE]: XCHANGE_ROUTER_V1,
}

export const V2_FACTORY_ADDRESS: AddressMap = constructSameAddressMap('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D')

// export const CHAIN_IDS_TO_NAMES = {
//   [SupportedChainId.MAINNET]: 'mainnet',
//   [SupportedChainId.ROPSTEN]: 'ropsten',
//   [SupportedChainId.RINKEBY]: 'rinkeby',
//   [SupportedChainId.GOERLI]: 'goerli',
//   [SupportedChainId.KOVAN]: 'kovan',
//   [SupportedChainId.POLYGON]: 'polygon',
//   [SupportedChainId.POLYGON_MUMBAI]: 'polygon_mumbai',
//   [SupportedChainId.CELO]: 'celo',
//   [SupportedChainId.CELO_ALFAJORES]: 'celo_alfajores',
//   [SupportedChainId.ARBITRUM_ONE]: 'arbitrum',
//   [SupportedChainId.ARBITRUM_RINKEBY]: 'arbitrum_rinkeby',
//   [SupportedChainId.OPTIMISM]: 'optimism',
//   [SupportedChainId.OPTIMISM_GOERLI]: 'optimism_goerli',
// }

// /**
//  * Array of all the supported chain IDs
//  */
// export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(SupportedChainId).filter(
//   (id) => typeof id === 'number'
// ) as SupportedChainId[]

// export function isSupportedChain(chainId: number | null | undefined): chainId is SupportedChainId {
//   return !!chainId && !!SupportedChainId[chainId]
// }

// export const SUPPORTED_GAS_ESTIMATE_CHAIN_IDS = [
//   SupportedChainId.MAINNET,
//   SupportedChainId.POLYGON,
//   SupportedChainId.CELO,
//   SupportedChainId.OPTIMISM,
//   SupportedChainId.ARBITRUM_ONE,
// ]

// /**
//  * Unsupported networks for V2 pool behavior.
//  */
// export const UNSUPPORTED_V2POOL_CHAIN_IDS = [
//   SupportedChainId.POLYGON,
//   SupportedChainId.OPTIMISM,
//   SupportedChainId.ARBITRUM_ONE,
// ]

// export const TESTNET_CHAIN_IDS = [
//   SupportedChainId.ROPSTEN,
//   SupportedChainId.RINKEBY,
//   SupportedChainId.GOERLI,
//   SupportedChainId.KOVAN,
//   SupportedChainId.POLYGON_MUMBAI,
//   SupportedChainId.ARBITRUM_RINKEBY,
//   SupportedChainId.OPTIMISM_GOERLI,
// ] as const

// export type SupportedTestnetChainId = typeof TESTNET_CHAIN_IDS[number]

// /**
//  * All the chain IDs that are running the Ethereum protocol.
//  */
// export const L1_CHAIN_IDS = [
//   SupportedChainId.MAINNET,
//   SupportedChainId.ROPSTEN,
//   SupportedChainId.RINKEBY,
//   SupportedChainId.GOERLI,
//   SupportedChainId.KOVAN,
//   SupportedChainId.POLYGON,
//   SupportedChainId.POLYGON_MUMBAI,
//   SupportedChainId.CELO,
//   SupportedChainId.CELO_ALFAJORES,
// ] as const

// export type SupportedL1ChainId = typeof L1_CHAIN_IDS[number]

// /**
//  * Controls some L2 specific behavior, e.g. slippage tolerance, special UI behavior.
//  * The expectation is that all of these networks have immediate transaction confirmation.
//  */
// export const L2_CHAIN_IDS = [
//   SupportedChainId.ARBITRUM_ONE,
//   SupportedChainId.ARBITRUM_RINKEBY,
//   SupportedChainId.OPTIMISM,
//   SupportedChainId.OPTIMISM_GOERLI,
// ] as const

// export type SupportedL2ChainId = typeof L2_CHAIN_IDS[number]
