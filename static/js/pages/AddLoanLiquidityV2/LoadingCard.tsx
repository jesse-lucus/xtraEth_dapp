// eslint-disable-next-line no-restricted-imports
import { AutoColumn } from 'components/Column'
import { MouseoverTooltipContent } from 'components/Tooltip'
import useNativeCurrency from 'lib/hooks/useNativeCurrency'
import styled from 'styled-components/macro'
import { ThemedText } from 'theme'

import { ButtonOutlined } from '../../components/Button'
import { ExternalLink } from '../../theme'

const DataCard = styled(AutoColumn)<{ highlighted?: boolean }>`
  background: black;
  border-radius: 12px;
  width: 100%;
  padding: 20px;
  position: relative;
  overflow: hidden;
`

const CTASection = styled.section<{ highlighted?: boolean }>`
  display: grid;
  gap: 8px;
  opacity: ${({ highlighted }) => (highlighted ? '0.8' : '1')};
  width: 100%;
  border-rounded: 0.5;

  ${({ theme }) => theme.deprecated_mediaWidth.deprecated_upToSmall`
    grid-template-columns: auto;
    grid-template-rows: auto;
  `};
`

const CTA1 = styled(ButtonOutlined)<{ highlighted?: boolean }>`
  padding: 16px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.deprecated_bg3};
  background: ${({ highlighted }) =>
    highlighted ? 'radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)' : 'black'};

  * {
    color: ${({ theme }) => theme.deprecated_text1};
    text-decoration: none !important;
  }

  :hover {
    border: 1px solid ${({ theme }) => theme.deprecated_bg4};

    text-decoration: none;
    * {
      text-decoration: none !important;
    }
  }
`

const CTA2 = styled(ExternalLink)`
  position: relative;
  overflow: hidden;
  padding: 16px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.deprecated_bg3};

  * {
    color: ${({ theme }) => theme.deprecated_text1};
    text-decoration: none !important;
  }

  :hover {
    border: 1px solid ${({ theme }) => theme.deprecated_bg4};
    text-decoration: none !important;
    * {
      text-decoration: none !important;
    }
  }
`

const HeaderText = styled(ThemedText.DeprecatedLabel)`
  align-items: center;
  display: flex;

  font-weight: 1000;
  font-size: 18px;
  ${({ theme }) => theme.deprecated_mediaWidth.deprecated_upToMedium`
    font-size: 16px;
  `};
`

const ResponsiveColumn = styled(AutoColumn)`
  grid-template-columns: 1fr;
  width: 100%;
  gap: 8px;

  ${({ theme }) => theme.deprecated_mediaWidth.deprecated_upToMedium`
    gap: 8px;
  `};
  justify-content: space-between;
`

interface LoadingCardProps {
  text?: any
  tooltipText?: any
}

export default function LoadingCard({ text, tooltipText }: LoadingCardProps): any {
  const discountedOriginationFee = '...'
  const discountedTotalPremium = '...'

  const nativeCurrency = useNativeCurrency()

  return (
    <CTASection>
      <CTA1 onClick={() => ({})}>
        {text ? (
          <MouseoverTooltipContent
            content={
              <DataCard>
                {tooltipText} <br />
                <br />
              </DataCard>
            }
          >
            <HeaderText>{text}</HeaderText>
          </MouseoverTooltipContent>
        ) : (
          <>
            <ResponsiveColumn>
              <MouseoverTooltipContent
                content={
                  <DataCard>
                    Loading <br />
                    <br />
                  </DataCard>
                }
              >
                <HeaderText>Loading...</HeaderText>
              </MouseoverTooltipContent>

              <ThemedText.DeprecatedLink fontWeight={400} color="deprecated_text4">
                <b>Origination Fee:</b>{' '}
                <MouseoverTooltipContent
                  content={
                    <DataCard>
                      Origination Fee: Due at launch, <br />
                    </DataCard>
                  }
                >
                  {' '}
                  {discountedOriginationFee} {nativeCurrency.symbol?.toString() ?? 'ETH'}
                </MouseoverTooltipContent>
              </ThemedText.DeprecatedLink>

              <MouseoverTooltipContent
                placement="bottom"
                content={
                  <DataCard>
                    Premium Requirement: <br />
                  </DataCard>
                }
              >
                {' '}
                Premium: {discountedTotalPremium} {nativeCurrency.symbol?.toString() ?? 'ETH'}
              </MouseoverTooltipContent>
            </ResponsiveColumn>
          </>
        )}
      </CTA1>
    </CTASection>
  )
}
