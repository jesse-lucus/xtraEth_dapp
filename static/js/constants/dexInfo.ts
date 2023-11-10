import { Implementation } from '@uniswap/router-sdk'
import uniswapLogo from 'assets/images/uniswap-logo.png'
import xchangeLogo from 'assets/images/xchange-logo.png'
import { darkTheme } from 'theme/colors'

// import { SupportedChainId, SupportedL1ChainId, SupportedL2ChainId } from './chains'

export enum NetworkType {
  L1,
  L2,
}

interface BaseDEXInfo {
  readonly networkType: NetworkType
  readonly blockWaitMsBeforeWarning?: number
  readonly docs: string
  readonly bridge?: string
  readonly explorer: string
  readonly infoLink: string
  readonly logoUrl: string
  readonly circleLogoUrl?: string
  readonly label: string
  readonly helpCenterUrl?: string
  readonly nativeCurrency: {
    name: string // e.g. 'Goerli ETH',
    symbol: string // e.g. 'gorETH',
    decimals: number // e.g. 18,
  }
  readonly color?: string
  readonly backgroundColor?: string
}

export interface L1DEXInfo extends BaseDEXInfo {
  readonly networkType: NetworkType.L1
  readonly defaultListUrl?: string
}

export interface L2ChainInfo extends BaseDEXInfo {
  readonly networkType: NetworkType.L2
  readonly bridge: string
  readonly statusPage?: string
  readonly defaultListUrl: string
}

// export type DEXInfoMap = { readonly [dexId: number]: L1DEXInfo | L2ChainInfo } & {
//   readonly [dexId in SupportedL2ChainId]: L2ChainInfo
// } & { readonly [dexId in SupportedL1ChainId]: L1DEXInfo }

export type DEXInfoMap = { readonly [implementation in Implementation]?: L1DEXInfo | L2ChainInfo }

const DEX_INFO: DEXInfoMap = {
  [Implementation.UNISWAP]: {
    networkType: NetworkType.L1,
    docs: 'https://docs.uniswap.org/',
    explorer: 'https://etherscan.io/',
    infoLink: 'https://info.uniswap.org/#/',
    label: 'Uniswap',
    logoUrl: uniswapLogo,
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    color: darkTheme.chain_1,
  },
  [Implementation.XCHANGE]: {
    networkType: NetworkType.L1,
    docs: 'https://docs.uniswap.org/',
    explorer: 'https://rinkeby.etherscan.io/',
    infoLink: 'https://info.uniswap.org/#/',
    label: 'Xchange',
    logoUrl: xchangeLogo,
    nativeCurrency: { name: 'Rinkeby Ether', symbol: 'rETH', decimals: 18 },
    color: darkTheme.chain_4,
  },
}

// export function getDEXInfo(dexId: SupportedL1ChainId): L1DEXInfo
// export function getDEXInfo(dexId: SupportedL2ChainId): L2ChainInfo
// export function getDEXInfo(dexId: SupportedChainId): L1DEXInfo | L2ChainInfo
// export function getDEXInfo(
//   dexId: SupportedChainId | SupportedL1ChainId | SupportedL2ChainId | number | undefined
// ): L1DEXInfo | L2ChainInfo | undefined

export function getDEXInfo(implementation: Implementation): L1DEXInfo

/**
 * Overloaded method for returning ChainInfo given a chainID
 * Return type varies depending on input type:
 * number | undefined -> returns chaininfo | undefined
 * SupportedChainId -> returns L1DEXInfo | L2ChainInfo
 * SupportedL1ChainId -> returns L1DEXInfo
 * SupportedL2ChainId -> returns L2ChainInfo
 */
export function getDEXInfo(implementation: Implementation): any {
  return DEX_INFO[implementation]
}
