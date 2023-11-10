import { Implementation } from '@uniswap/router-sdk'
import { Percent } from '@uniswap/sdk-core'
import { dexIdToName } from 'constants/dexs'
import styled from 'styled-components/macro'
import { Trans } from 'utils/transShim'

import { ThemedText } from '../../theme'
import { RowBetween, RowFixed } from '../Row'
import SettingsTab from '../Settings'

const StyledSwapHeader = styled.div`
  padding: 8px 12px;
  margin-bottom: 8px;
  width: 100%;
  color: ${({ theme }) => theme.deprecated_text2};
`

export default function SwapHeader({
  allowedSlippage,
  implementation,
}: {
  allowedSlippage: Percent
  implementation: Implementation | undefined
}) {
  return (
    <StyledSwapHeader>
      <RowBetween>
        <RowFixed>
          <ThemedText.DeprecatedBlack fontWeight={500} fontSize={16} style={{ marginRight: '8px' }}>
            <Trans>Swap</Trans> on {implementation === undefined ? '...' : dexIdToName[implementation]}
          </ThemedText.DeprecatedBlack>
        </RowFixed>
        <RowFixed>
          <SettingsTab placeholderSlippage={allowedSlippage} />
        </RowFixed>
      </RowBetween>
    </StyledSwapHeader>
  )
}
