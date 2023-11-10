import { Implementation } from '@uniswap/router-sdk'
import { useWeb3React } from '@web3-react/core'
import LoanPositionCard from 'components/LoanCard'
import { UNSUPPORTED_V2POOL_CHAIN_IDS } from 'constants/chains'
import { useLendingPoolV1Contract } from 'hooks/useContract'
import { Link } from 'react-router-dom'
import { Text } from 'rebass'
import { useCurrentDEX } from 'state/dex/hooks'
import { useActiveLoansByBorrower, useLoanIdsByBorrower } from 'state/xmint/hooks'
import styled, { useTheme } from 'styled-components/macro'

import { ButtonPrimary } from '../../components/Button'
import Card from '../../components/Card'
import { AutoColumn, ColumnCenter } from '../../components/Column'
import { RowBetween } from '../../components/Row'
import { Dots } from '../../components/swap/styleds'
import { SwitchLocaleLink } from '../../components/SwitchLocaleLink'
import { useTrackedTokenPairs } from '../../state/user/hooks'
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

const TitleRow = styled(RowBetween)`
  ${({ theme }) => theme.deprecated_mediaWidth.deprecated_upToSmall`
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
    flex-direction: column-reverse;
  `};
`

const ResponsiveButtonPrimary = styled(ButtonPrimary)`
  width: 100%;
  padding: 10px;
  margin: 2px;
  border-radius: 10px;
`

const EmptyProposals = styled.div`
  border: 1px solid ${({ theme }) => theme.backgroundOutline};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Layer2Prompt = styled(EmptyProposals)`
  margin-top: 16px;
`

function createArray(x: string | undefined, y: number) {
  const result = []

  for (let i = 0; i < y; i++) {
    result.push([x, i])
  }

  return result
}

export default function Loans() {
  const theme = useTheme()
  const { account, chainId } = useWeb3React()
  const currentDEX = useCurrentDEX()

  let unsupportedV2Network = chainId && UNSUPPORTED_V2POOL_CHAIN_IDS.includes(chainId)
  if (currentDEX.currentImplementation === Implementation.XCHANGE) {
    unsupportedV2Network = false
  }
  // fetch the user's balances of all tracked V2 LP tokens
  const trackedTokenPairs = useTrackedTokenPairs()

  const LENDING_POOL = useLendingPoolV1Contract()

  const loanCountCall = useActiveLoansByBorrower(LENDING_POOL, account)

  const v2LoansIsLoading = loanCountCall ? false : true
  const loanCount = loanCountCall ? loanCountCall.toNumber() : 0
  const borrowToLoanData = createArray(account, loanCount)

  const loansForWallet = useLoanIdsByBorrower(LENDING_POOL, borrowToLoanData)

  return (
    <>
      <PageWrapper>
        <AutoColumn gap="lg" justify="center">
          <ThemedText.DeprecatedMediumHeader style={{ marginTop: '0.5rem', justifySelf: 'flex-center' }}>
            Initial Liquidity Loans
          </ThemedText.DeprecatedMediumHeader>
        </AutoColumn>

        {unsupportedV2Network ? (
          <AutoColumn gap="lg" justify="center">
            <AutoColumn gap="md" style={{ width: '100%' }}>
              <TitleRow style={{ marginTop: '1rem', alignItems: 'center' }} padding="0">
                <RowBetween>
                  <ResponsiveButtonPrimary id="loan-pool-button" as={Link} to="/add/loan/v2/ETH" padding="6px 8px">
                    <Text fontWeight={500} fontSize={16}>
                      Initial Liquidity Loan
                    </Text>
                  </ResponsiveButtonPrimary>
                </RowBetween>
              </TitleRow>
            </AutoColumn>
          </AutoColumn>
        ) : (
          <AutoColumn gap="lg" justify="center">
            <AutoColumn gap="md" style={{ width: '90%' }}>
              <ColumnCenter>
                <TitleRow style={{ marginTop: '1rem', alignItems: 'center' }} padding="0">
                  <RowBetween></RowBetween>
                </TitleRow>
              </ColumnCenter>

              {!account ? (
                <Card padding="40px">
                  <ThemedText.DeprecatedBody color={theme.deprecated_text3} textAlign="center">
                    Connect to a wallet to view your liquidity.
                  </ThemedText.DeprecatedBody>
                </Card>
              ) : v2LoansIsLoading ? (
                <EmptyProposals>
                  <ThemedText.DeprecatedBody color={theme.deprecated_text3} textAlign="center">
                    <Dots>Loading</Dots>
                  </ThemedText.DeprecatedBody>
                </EmptyProposals>
              ) : loanCount > 0 ? (
                <>
                  {loansForWallet.data.map((loanId) => (
                    <LoanPositionCard key={loanId.id.toString()} loanId={loanId.id.toNumber()} />
                  ))}
                </>
              ) : (
                <AutoColumn>
                  <AutoColumn>
                    <EmptyProposals>
                      <ThemedText.DeprecatedBody color={theme.deprecated_text3} textAlign="center">
                        No Initial Liquidity Loans found.
                      </ThemedText.DeprecatedBody>
                    </EmptyProposals>
                  </AutoColumn>
                </AutoColumn>
              )}
            </AutoColumn>
          </AutoColumn>
        )}
      </PageWrapper>
      <SwitchLocaleLink />
    </>
  )
}
