import TokenLogoLookupTable from 'constants/TokenLogoLookupTable'
import { chainIdToNetworkName, getNativeLogoURI } from 'lib/hooks/useCurrencyLogoURIs'
import uriToHttp from 'lib/utils/uriToHttp'
import { useCallback, useEffect, useState } from 'react'
import { isAddress } from 'utils'

export const BAD_SRCS: { [tokenAddress: string]: true } = {}

// Converts uri's into fetchable urls
function parseLogoSources(uris: string[]) {
  const urls: string[] = []
  uris.forEach((uri) => urls.push(...uriToHttp(uri)))
  return urls
}

// Parses uri's, favors non-coingecko images, and improves coingecko logo quality
function prioritizeLogoSources(uris: string[]) {
  const parsedUris = uris.map((uri) => uriToHttp(uri)).flat(1)
  const preferredUris: string[] = []

  // Consolidate duplicate coingecko urls into one fallback source
  let coingeckoUrl: string | undefined = undefined

  parsedUris.forEach((uri) => {
    if (uri.startsWith('https://assets.coingecko')) {
      if (!coingeckoUrl) {
        coingeckoUrl = uri.replace(/small|thumb/g, 'large')
      }
    } else {
      preferredUris.push(uri)
    }
  })
  // Places coingecko urls in the back of the source array
  return coingeckoUrl ? [...preferredUris, coingeckoUrl] : preferredUris
}

function getInitialUrl(address?: string | null, chainId?: number | null, isNative?: boolean) {
  if (chainId && isNative) return getNativeLogoURI(chainId)

  const networkName = chainId ? chainIdToNetworkName(chainId) : 'ethereum'
  const checksummedAddress = isAddress(address)
  // TODO UPDATE REPO
  if (checksummedAddress === '0x70008F18Fc58928dcE982b0A69C2c21ff80Dca54') {
    // X7R
    return 'https://assets.coingecko.com/coins/images/27710/small/X7R.png?1665314632'
  }
  if (checksummedAddress === '0x7105E64bF67ECA3Ae9b123F0e5Ca2b83b2eF2dA0') {
    // X7DAO
    return 'https://assets.coingecko.com/coins/images/27709/small/X7DAO.png?1665314516'
  }
  if (checksummedAddress === '0x888ceA2BBDD5D47a4032cf63668D7525C74af57A') {
    // POOF
    return 'https://assets.coingecko.com/coins/images/28885/large/C3AD4384-2AB9-4364-8DEA-AE32A091F182.jpeg?1675147686'
  }

  if (checksummedAddress) {
    return `https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/${networkName}/assets/${checksummedAddress}/logo.png`
  } else {
    return undefined
  }
}
export default function useAssetLogoSource(
  address?: string | null,
  chainId?: number | null,
  isNative?: boolean,
  backupImg?: string | null
): [string | undefined, () => void] {
  const [current, setCurrent] = useState<string | undefined>(getInitialUrl(address, chainId, isNative))
  const [fallbackSrcs, setFallbackSrcs] = useState<string[] | undefined>(undefined)

  useEffect(() => {
    setCurrent(getInitialUrl(address, chainId, isNative))
    setFallbackSrcs(undefined)
  }, [address, chainId, isNative])

  const nextSrc = useCallback(() => {
    if (current) {
      BAD_SRCS[current] = true
    }
    // Parses and stores logo sources from tokenlists if assets repo url fails
    if (!fallbackSrcs) {
      const uris = TokenLogoLookupTable.getIcons(address, chainId) ?? []
      if (backupImg) uris.push(backupImg)
      const tokenListIcons = prioritizeLogoSources(parseLogoSources(uris))

      setCurrent(tokenListIcons.find((src) => !BAD_SRCS[src]))
      setFallbackSrcs(tokenListIcons)
    } else {
      setCurrent(fallbackSrcs.find((src) => !BAD_SRCS[src]))
    }
  }, [current, fallbackSrcs, address, chainId, backupImg])

  return [current, nextSrc]
}
