import { memo } from 'react'
import styled from 'styled-components/macro'
import { Trans } from 'utils/transShim'

import Row from '../components/Row'
import { Logo } from '../icons'
import { AnimationSpeed, brand, ThemedText } from '../theme'
import ExternalLink from './ExternalLink'

const UniswapA = styled(ExternalLink)`
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  text-decoration: none;

  ${Logo} {
    fill: ${({ theme }) => theme.secondary};
    height: 1em;
    transition: transform ${AnimationSpeed.Medium} ease, fill ${AnimationSpeed.Medium} ease;
    width: 1em;
    will-change: transform;
  }

  :hover ${Logo} {
    fill: ${brand};
    transform: rotate(-5deg);
  }
`
const Wrapper = styled(Row)`
  margin-top: 12px;
`

export default memo(function BrandedFooter() {
  return (
    <Wrapper justify="center">
      <UniswapA href="https://uniswap.org/">
        <Row gap={0.25}>
          <Logo />
          <ThemedText.Caption>
            <Trans>Powered by the Uniswap protocol</Trans>
          </ThemedText.Caption>
        </Row>
      </UniswapA>
    </Wrapper>
  )
})
