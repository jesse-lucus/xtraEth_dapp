import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { initializeConnector, Web3ReactHooks } from '@web3-react/core'
import { GnosisSafe } from '@web3-react/gnosis-safe'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import { Actions, Connector } from '@web3-react/types'
// import { WalletConnect  } from '@web3-react/walletconnect-v2'
import { SupportedChainId } from 'constants/chains'

import UNISWAP_LOGO_URL from '../assets/svg/logo.svg'
import { RPC_URLS } from '../constants/networks'
import { RPC_PROVIDERS } from '../constants/providers'
import { WalletConnectV2 } from './WalletConnectV2'

export enum ConnectionType {
  INJECTED = 'INJECTED',
  COINBASE_WALLET = 'COINBASE_WALLET',
  WALLET_CONNECT_V2 = 'WALLET_CONNECT_V2',
  NETWORK = 'NETWORK',
  GNOSIS_SAFE = 'GNOSIS_SAFE',
}

export interface Connection {
  connector: Connector
  hooks: Web3ReactHooks
  type: ConnectionType
}

function onError(error: Error) {
  console.debug(`web3-react error: ${error}`)
}

const [web3Network, web3NetworkHooks] = initializeConnector<Network>(
  (actions) => new Network({ actions, urlMap: RPC_PROVIDERS, defaultChainId: 1 })
)
export const networkConnection: Connection = {
  connector: web3Network,
  hooks: web3NetworkHooks,
  type: ConnectionType.NETWORK,
}

const [web3Injected, web3InjectedHooks] = initializeConnector<MetaMask>((actions) => new MetaMask({ actions, onError }))
export const injectedConnection: Connection = {
  connector: web3Injected,
  hooks: web3InjectedHooks,
  type: ConnectionType.INJECTED,
}

const [web3GnosisSafe, web3GnosisSafeHooks] = initializeConnector<GnosisSafe>((actions) => new GnosisSafe({ actions }))
export const gnosisSafeConnection: Connection = {
  connector: web3GnosisSafe,
  hooks: web3GnosisSafeHooks,
  type: ConnectionType.GNOSIS_SAFE,
}

// const [web3WalletConnect, web3WalletConnectHooks] = initializeConnector<WalletConnectV2>((actions) => {
//   // Avoid testing for the best URL by only passing a single URL per chain.
//   // Otherwise, WC will not initialize until all URLs have been tested (see getBestUrl in web3-react).
//   const RPC_URLS_WITHOUT_FALLBACKS = Object.entries(RPC_URLS).reduce(
//     (map, [chainId, urls]) => ({
//       ...map,
//       [chainId]: urls[0],
//     }),
//     {}
//   )
//   return new WalletConnectV2({
//     actions,

//     onError,
//   })
// })
// export const walletConnectConnection: Connection = {
//   connector: web3WalletConnect,
//   hooks: web3WalletConnectHooks,
//   type: ConnectionType.WALLET_CONNECT,
// }

const [web3CoinbaseWallet, web3CoinbaseWalletHooks] = initializeConnector<CoinbaseWallet>(
  (actions) =>
    new CoinbaseWallet({
      actions,
      options: {
        url: RPC_URLS[SupportedChainId.MAINNET][0],
        appName: 'Xchange',
        appLogoUrl: UNISWAP_LOGO_URL,
        reloadOnDisconnect: false,
      },
      onError,
    })
)
export const coinbaseWalletConnection: Connection = {
  connector: web3CoinbaseWallet,
  hooks: web3CoinbaseWalletHooks,
  type: ConnectionType.COINBASE_WALLET,
}

export const walletConnectV2Connection: Connection = new (class implements Connection {
  private initializer = (actions: Actions, defaultChainId = SupportedChainId.MAINNET) =>
    new WalletConnectV2({ actions, defaultChainId, onError })

  type = ConnectionType.WALLET_CONNECT_V2
  getName = () => 'WalletConnect'
  //getIcon = () => WALLET_CONNECT_ICON
  //shouldDisplay = () => !getIsInjectedMobileBrowser()

  private _connector = initializeConnector<WalletConnectV2>(this.initializer)

  overrideActivate = (chainId?: SupportedChainId) => {
    // Always re-create the connector, so that the chainId is updated.
    this._connector = initializeConnector((actions) => this.initializer(actions, chainId))
    return false
  }

  get connector() {
    return this._connector[0]
  }
  get hooks() {
    return this._connector[1]
  }
})()

// const [web3CoinbaseWallet, web3CoinbaseWalletHooks] = initializeConnector<WalletConnectV2>(
//   (actions) =>
//     new WalletConnectV2({
//       actions,
//       options: {
//         url: RPC_URLS[SupportedChainId.MAINNET][0],
//         appName: 'Xchange',
//         appLogoUrl: UNISWAP_LOGO_URL,
//         reloadOnDisconnect: false,
//       },
//       onError,
//     })
// )

// export const walletConnectV2Connection: Connection = {
//   connector: walletConnectV2ConnectionConnector,
//   hooks: web3CoinbaseWalletHooks,
//   type: ConnectionType.COINBASE_WALLET,
// }
