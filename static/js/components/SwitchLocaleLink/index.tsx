import { useLocationLinkProps } from 'hooks/useLocationLinkProps'
import { useMemo } from 'react'
import styled from 'styled-components/macro'

import { DEFAULT_LOCALE, SupportedLocale } from '../../constants/locales'
import { navigatorLocale, useActiveLocale } from '../../hooks/useActiveLocale'
import { ThemedText } from '../../theme'

const Container = styled(ThemedText.DeprecatedSmall)`
  opacity: ${({ theme }) => theme.opacity.hover};
  :hover {
    opacity: 1;
  }
  margin-top: 1rem !important;
`

const useTargetLocale = (activeLocale: SupportedLocale) => {
  const browserLocale = useMemo(() => navigatorLocale(), [])

  // if (browserLocale && (browserLocale !== DEFAULT_LOCALE || activeLocale !== DEFAULT_LOCALE)) {
  //   if (activeLocale === browserLocale) {
  //     return DEFAULT_LOCALE
  //   } else {
  //     return browserLocale
  //   }
  // }
  return DEFAULT_LOCALE
}

export function SwitchLocaleLink() {
  const activeLocale = useActiveLocale()
  const targetLocale = useTargetLocale(activeLocale)

  const { to, onClick } = useLocationLinkProps(targetLocale)

  if (!targetLocale || !to) return null

  return <Container></Container>
}