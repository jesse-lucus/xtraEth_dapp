import LoanPositionCard from 'components/LoanCard'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components/macro'

import { AutoColumn } from '../../components/Column'
import { SwitchLocaleLink } from '../../components/SwitchLocaleLink'
import { ThemedText } from '../../theme'

const PageWrapper = styled(AutoColumn)`
  margin-top: 10px;
  padding: 20px 16px 4px;
  max-width: 540px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.35);

  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.backgroundOutline};
  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`

export default function LoanIndex() {
  const navigate = useNavigate()
  const { loanId } = useParams<{ loanId?: string }>()
  return (
    <>
      <PageWrapper>
        <AutoColumn gap="lg" justify="center">
          <ThemedText.DeprecatedMediumHeader style={{ marginTop: '0.5rem', justifySelf: 'flex-center' }}>
            Initial Liquidity Loans
          </ThemedText.DeprecatedMediumHeader>
        </AutoColumn>

        <LoanPositionCard loanId={loanId ? parseInt(loanId) : 1} />
      </PageWrapper>
      <SwitchLocaleLink />
    </>
  )
}
