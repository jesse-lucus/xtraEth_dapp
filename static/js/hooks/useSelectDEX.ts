import { Implementation } from '@uniswap/router-sdk'
import { useWeb3React } from '@web3-react/core'
import { getConnection } from 'connection/utils'
import { breakpoints } from 'nft/css/sprinkles.css'
import { useCallback } from 'react'
import { useEffect, useState } from 'react'
import { addPopup } from 'state/application/reducer'
import { useCurrentDEX } from 'state/dex/hooks'
import { updateDEXError } from 'state/dex/reducer'
import { useAppDispatch } from 'state/hooks'

export default function useSelectDEX() {
  const dispatch = useAppDispatch()
  const { connector } = useWeb3React()
  const setCurrentDEX = useCurrentDEX((state) => state.setCurrentDEX)

  return useCallback(
    async (targetImplementation: Implementation) => {
      const connectionType = getConnection(connector).type

      try {
        // dispatch(updateDEXError({ connectionType, error: undefined }))
        // await switchDEX(targetDEX)
        await setCurrentDEX(targetImplementation)
      } catch (error) {
        console.error('Failed to switch networks', error)

        dispatch(updateDEXError({ connectionType, error: error.message }))
        dispatch(addPopup({ content: { failedSwitchNetwork: targetImplementation }, key: `failed-dex-switch` }))
      }
    },
    [connector, dispatch]
  )
}

const isClient = typeof window !== 'undefined'

export function getIsMobile() {
  return isClient ? window.innerWidth < breakpoints.sm : false
}

export function useCurrentD(): boolean {
  const [isMobile, setIsMobile] = useState(getIsMobile)

  useEffect(() => {
    function handleResize() {
      setIsMobile(getIsMobile())
    }

    if (isClient) {
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
    return undefined
  }, [])

  return isMobile
}
