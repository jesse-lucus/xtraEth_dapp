import { useWeb3React } from '@web3-react/core'
import Web3Status from 'components/Web3Status'
import { Box } from 'nft/components/Box'
import { Row } from 'nft/components/Flex'
import { XchangeIcon } from 'nft/components/icons'
import { ReactNode } from 'react'
import { NavLink, NavLinkProps, useLocation } from 'react-router-dom'
import { Trans } from 'utils/transShim'

import { ChainSelector } from './ChainSelector'
import { MenuDropdown } from './MenuDropdown'
import * as styles from './style.css'

interface MenuItemProps {
  href: string
  id?: NavLinkProps['id']
  isActive?: boolean
  children: ReactNode
}

const MenuItem = ({ href, id, isActive, children }: MenuItemProps) => {
  return (
    <NavLink
      to={href}
      className={isActive ? styles.activeMenuItem : styles.menuItem}
      id={id}
      style={{ textDecoration: 'none' }}
    >
      {children}
    </NavLink>
  )
}

const PageTabs = () => {
  const { pathname } = useLocation()
  const { chainId: connectedChainId } = useWeb3React()

  const isPoolActive =
    pathname.startsWith('/pool') ||
    pathname.startsWith('/add') ||
    pathname.startsWith('/remove') ||
    pathname.startsWith('/increase') ||
    pathname.startsWith('/find')

  return (
    <>
      <MenuItem href="/fund" isActive={pathname.startsWith('/swap')}>
        <Trans>Fund</Trans>
      </MenuItem>
      <MenuItem href="/pool/v2" id="pool-nav-link" isActive={isPoolActive}>
        <Trans>Liquidity</Trans>
      </MenuItem>
      <MenuItem href="/loans" id="pool-nav-link" isActive={isPoolActive}>
        <Trans>Loans</Trans>
      </MenuItem>
      <MenuItem href="/swap" isActive={pathname.startsWith('/swap')}>
        <Trans>Swap</Trans>
      </MenuItem>
    </>
  )
}

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Box display="flex" height="full" flexWrap="nowrap" alignItems="stretch">
          <Box className={styles.leftSideContainer}>
            <Box as="a" href="" className={styles.logoContainer}>
              <XchangeIcon width="48" height="48" className={styles.logo} />
            </Box>
            <Box display={{ sm: 'flex', lg: 'none' }}>
              <ChainSelector leftAlign={true} />
            </Box>
            <Row gap="8" display={{ sm: 'none', lg: 'flex' }}>
              <PageTabs />
            </Row>
          </Box>

          <Box className={styles.rightSideContainer}>
            <Row gap="12">
              <Box display={{ sm: 'none', lg: 'flex' }}>
                <MenuDropdown />
              </Box>
              <>
                <Box display={{ sm: 'none', lg: 'flex' }}>
                  <ChainSelector />
                </Box>
              </>
              <Web3Status />
            </Row>
          </Box>
        </Box>
      </nav>
      <Box className={styles.mobileBottomBar}>
        <Box marginY="4">
          <MenuDropdown />
        </Box>
        <PageTabs />
      </Box>
    </>
  )
}

export default Navbar
