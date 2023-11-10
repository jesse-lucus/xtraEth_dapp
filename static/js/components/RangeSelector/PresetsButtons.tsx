import { ButtonOutlined } from 'components/Button'
import { AutoRow } from 'components/Row'
import React from 'react'
import styled from 'styled-components/macro'
import { ThemedText } from 'theme'
import { Trans } from 'utils/transShim'

const Button = styled(ButtonOutlined).attrs(() => ({
  padding: '8px',
  $borderRadius: '8px',
}))`
  color: ${({ theme }) => theme.deprecated_text1};
  flex: 1;
`

export default function PresetsButtons({ setFullRange }: { setFullRange: () => void }) {
  return (
    <AutoRow gap="4px" width="auto">
      <Button
        onClick={() => {
          setFullRange()
        }}
      >
        <ThemedText.DeprecatedBody fontSize={12}>
          <Trans>Full Range</Trans>
        </ThemedText.DeprecatedBody>
      </Button>
    </AutoRow>
  )
}
