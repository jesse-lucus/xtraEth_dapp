import { Implementation } from '@uniswap/router-sdk'
import { getDEXInfo } from 'constants/dexInfo'
import { useOnClickOutside } from 'hooks/useOnClickOutside'
import useSelectDEX from 'hooks/useSelectDEX'
import useSyncChainQuery from 'hooks/useSyncChainQuery'
import { Box } from 'nft/components/Box'
import { Portal } from 'nft/components/common/Portal'
import { Column, Row } from 'nft/components/Flex'
import { TokenWarningRedIcon } from 'nft/components/icons'
import { subhead } from 'nft/css/common.css'
import { themeVars } from 'nft/css/sprinkles.css'
import { useIsMobile } from 'nft/hooks'
import { useCallback, useRef, useState } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'
import { useCurrentDEX } from 'state/dex/hooks'
import { useTheme } from 'styled-components/macro'

import * as styles from './ChainSelector.css'
import DEXSelectorRow from './DEXSelectorRow'
import { NavDropdown } from './NavDropdown'

const SUPPORTED_DEX_SELECTOR = [Implementation.UNISWAP, Implementation.XCHANGE]

interface ChainSelectorProps {
  leftAlign?: boolean
}

export const DEXSelector = ({ leftAlign }: ChainSelectorProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const isMobile = useIsMobile()

  const theme = useTheme()

  const ref = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, () => setIsOpen(false), [modalRef])
  const currentDEX = useCurrentDEX()

  const [pendingDEXId, setPendingDEXId] = useState<Implementation | undefined>(Implementation.UNISWAP)

  const info = currentDEX ? getDEXInfo(currentDEX.currentImplementation) : undefined

  const selectDEX = useSelectDEX()
  useSyncChainQuery()

  const onSelectChain = useCallback(
    async (implementation: Implementation) => {
      setPendingDEXId(implementation)
      await selectDEX(implementation)
      setPendingDEXId(undefined)
      setIsOpen(false)
    },
    [selectDEX, setIsOpen]
  )

  if (!currentDEX) {
    return null
  }

  const isSupported = !!info

  const dropdown = (
    <NavDropdown top="56" left={leftAlign ? '0' : 'auto'} right={leftAlign ? 'auto' : '0'} ref={modalRef}>
      <Column paddingX="8">
        {SUPPORTED_DEX_SELECTOR.map((implementation: Implementation) => (
          <DEXSelectorRow
            onSelectChain={onSelectChain}
            targetDEX={implementation}
            key={implementation}
            isPending={false}
          />
        ))}
      </Column>
    </NavDropdown>
  )

  const chevronProps = {
    height: 20,
    width: 20,
    color: theme.textSecondary,
  }

  return (
    <Box position="relative" ref={ref}>
      <Row
        as="button"
        gap="8"
        className={styles.ChainSelector}
        background={isOpen ? 'accentActiveSoft' : 'none'}
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isSupported ? (
          <>
            <TokenWarningRedIcon fill={themeVars.colors.textSecondary} width={24} height={24} />
            <Box as="span" className={subhead} display={{ sm: 'none', xxl: 'flex' }} style={{ lineHeight: '20px' }}>
              Unsupported
            </Box>
          </>
        ) : (
          <>
            <img src={info.logoUrl} alt={info.label} className={styles.Image} />
            <Box as="span" className={subhead} display={{ xxl: 'flex' }} style={{ lineHeight: '20px' }}>
              {info.label}
            </Box>
          </>
        )}
        {isOpen ? <ChevronUp {...chevronProps} /> : <ChevronDown {...chevronProps} />}
      </Row>
      {isOpen && (isMobile ? <Portal>{dropdown}</Portal> : <>{dropdown}</>)}
    </Box>
  )
}
