import { BigNumber } from '@ethersproject/bignumber'
import { formatEther } from '@ethersproject/units'
import { RowBetween } from 'components/Row'
import { MouseoverTooltipContent } from 'components/Tooltip'
import useNativeCurrency from 'lib/hooks/useNativeCurrency'
import styled from 'styled-components/macro'
import { ThemedText } from 'theme'

import { ButtonOutlined, ButtonText } from '../../components/Button'
// eslint-disable-next-line no-restricted-imports
import { AutoColumn } from '../../components/Column'
import { ACTIVE_LOAN_TERMS } from '../../constants/loans'
import { useLiquidationFee } from '../../state/xmint/hooks'

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
    highlighted ? 'radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 77%)' : 'transparent'};

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
const CTA3 = styled(ButtonText)<{ highlighted?: boolean }>`
  padding: 16px;

  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: ${({ highlighted }) =>
    highlighted ? 'radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)' : 'black'};

  * {
    color: ${({ theme }) => theme.deprecated_text1};
    text-decoration: none !important;
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

interface LoanCardProps {
  loanData: any
  loanTerm: any
  selectedTerm: any
  loanDuration: any
  handleSelectTerm: (targetLoanAddress: string) => void
}

export default function LoanCard({
  loanData,
  loanTerm,
  selectedTerm,
  loanDuration,
  handleSelectTerm,
}: LoanCardProps): any {
  const liqFee = useLiquidationFee()

  const requestAmount = formatEther(loanData.data[0]).toString()
  const originationFee = formatEther(loanData.data[1]).toString()
  const totalPremium = formatEther(loanData.data[2]).toString()
  const discountedOriginationFee = formatEther(loanData.data[3]).toString()
  const discountedTotalPremium = formatEther(loanData.data[4]).toString()
  const totalCostRaw = loanData.data[3].add(loanData.data[4])
  const totalCost = formatEther(totalCostRaw).toString()
  const totalSavings = formatEther(loanData.data[0].sub(totalCostRaw)).toString()
  const totalCostToLaunch = formatEther(loanData.data[3].add(liqFee)).toString()

  const leverage = loanData.data[0].div(loanData.data[3])
  const premiumFeeModifier = parseFloat(BigNumber.from(10000).sub(loanData.data[5]).toString()) / 100
  const originationFeeModifier = parseFloat(BigNumber.from(10000).sub(loanData.data[6]).toString()) / 100
  const loanMetadata = ACTIVE_LOAN_TERMS[loanData.address]
  const nativeCurrency = useNativeCurrency()
  const liquidationFee = formatEther(BigNumber.from(liqFee)).toString()
  const loanLength = (loanDuration * 24 * 60 * 60).toString()
  const loanQuarterPeriod = (loanDuration * 24 * 60 * 60) / 4
  const loanFeePerPeriodCost = BigNumber.from(loanData.data[4]).div(BigNumber.from(4))
  const loanFeePerPeriod = formatEther(loanFeePerPeriodCost).toString()
  const loanPrinciplePerPeriodCost = BigNumber.from(loanData.data[0]).div(BigNumber.from(4))
  const loanPrinciplePerPeriod = formatEther(loanPrinciplePerPeriodCost.add(loanFeePerPeriodCost)).toString()
  const loanQuarterPeriodHrs = (loanQuarterPeriod / 60 / 60).toString()
  return (
    <>
      <CTASection highlighted={selectedTerm === loanData.address}>
        <CTA1 onClick={() => handleSelectTerm(loanData.address)} highlighted={selectedTerm === loanData.address}>
          <>
            <RowBetween>
              <HeaderText width="50%" padding="8px">
                {loanMetadata.name}
              </HeaderText>
              <HeaderText width="20%" padding="8px">
                {leverage.toString()}x
              </HeaderText>

              <HeaderText width="50%" padding="8px">
                {discountedOriginationFee} {nativeCurrency.symbol?.toString() ?? 'ETH'}
              </HeaderText>
            </RowBetween>
          </>
        </CTA1>
      </CTASection>
      {selectedTerm === loanData.address && (
        <CTASection>
          <HeaderText>
            <b>{loanMetadata.description}</b>
          </HeaderText>

          <AutoColumn>
            <ThemedText.DeprecatedLink fontWeight={400} color="deprecated_bg3">
              <b>Cost to launch:</b>{' '}
            </ThemedText.DeprecatedLink>

            <RowBetween>
              <HeaderText width="100%">
                <MouseoverTooltipContent
                  content={
                    <DataCard color="deprecated_bg3">
                      <>
                        {' '}
                        Fee({discountedOriginationFee} {nativeCurrency.symbol?.toString() ?? 'ETH'}) + Liquidation
                        Deposit({liquidationFee} {nativeCurrency.symbol?.toString() ?? 'ETH'}), returned upon repayment
                      </>{' '}
                      <br />
                      <br />
                    </DataCard>
                  }
                >
                  <ThemedText.DeprecatedLink fontWeight={400} color="deprecated_bg3">
                    <>
                      {' '}
                      {totalCostToLaunch} {nativeCurrency.symbol?.toString() ?? 'ETH'}
                    </>
                  </ThemedText.DeprecatedLink>
                </MouseoverTooltipContent>
              </HeaderText>
            </RowBetween>
          </AutoColumn>

          <AutoColumn>
            <ThemedText.DeprecatedLink fontWeight={400} color="deprecated_bg3">
              <b>Repayment Schedule:</b>{' '}
            </ThemedText.DeprecatedLink>
            {discountedTotalPremium === '0.0' ? (
              <RowBetween>
                <HeaderText width="100%">
                  <MouseoverTooltipContent
                    content={
                      <DataCard color="deprecated_bg3">
                        Principal Repayment Condition: {loanMetadata.principalRepaymentCondition}
                        <br />
                        <br />
                      </DataCard>
                    }
                  >
                    <ThemedText.DeprecatedLink fontWeight={400} color="deprecated_bg3">
                      No premium payments
                    </ThemedText.DeprecatedLink>
                  </MouseoverTooltipContent>
                </HeaderText>
              </RowBetween>
            ) : (
              <RowBetween>
                <HeaderText width="100%">
                  <MouseoverTooltipContent
                    content={
                      <DataCard color="deprecated_bg3">
                        Principal Repayment Condition: {loanMetadata.principalRepaymentCondition} <br />
                        <br />
                      </DataCard>
                    }
                  >
                    <ThemedText.DeprecatedLink fontWeight={400} color="deprecated_bg3">
                      {loanMetadata.principalRepaymentDuring ? (
                        <>
                          {' '}
                          {loanPrinciplePerPeriod} {nativeCurrency.symbol?.toString() ?? 'ETH'} due every{' '}
                          {loanQuarterPeriodHrs} hours
                        </>
                      ) : (
                        <>
                          {' '}
                          {loanFeePerPeriod} {nativeCurrency.symbol?.toString() ?? 'ETH'} due every{' '}
                          {loanQuarterPeriodHrs} hours
                        </>
                      )}
                    </ThemedText.DeprecatedLink>
                  </MouseoverTooltipContent>
                </HeaderText>
              </RowBetween>
            )}
          </AutoColumn>

          <>
            <RowBetween>
              <HeaderText width="32%" padding="8px">
                Fee
              </HeaderText>
              <HeaderText width="32%" padding="8px">
                Cost
              </HeaderText>
              <HeaderText width="32%" padding="8px">
                Savings
              </HeaderText>
            </RowBetween>

            <RowBetween>
              <HeaderText width="32%">
                <MouseoverTooltipContent
                  content={
                    <DataCard>
                      Origination fee is the initial cost of the capital. <br />
                      <br />
                    </DataCard>
                  }
                >
                  <HeaderText>Origination</HeaderText>
                </MouseoverTooltipContent>
              </HeaderText>
              <HeaderText width="32%" padding="8px">
                {discountedOriginationFee}
              </HeaderText>
              <HeaderText width="32%" padding="8px">
                {originationFeeModifier}%
              </HeaderText>
            </RowBetween>

            <RowBetween>
              <HeaderText width="32%">
                <MouseoverTooltipContent
                  content={
                    <DataCard>
                      Premium is the cost of that capital during the duration of the loan. <br />
                      <br />
                    </DataCard>
                  }
                >
                  <HeaderText>Premium</HeaderText>
                </MouseoverTooltipContent>
              </HeaderText>
              <HeaderText width="32%" padding="8px">
                {discountedTotalPremium}
              </HeaderText>
              <HeaderText width="32%" padding="8px">
                {premiumFeeModifier}%
              </HeaderText>
            </RowBetween>
            <RowBetween>
              <HeaderText width="32%">
                <MouseoverTooltipContent
                  content={
                    <DataCard>
                      Total all in cost over the lifetime of the loan <br />
                      <br />
                    </DataCard>
                  }
                >
                  <HeaderText>Total</HeaderText>
                </MouseoverTooltipContent>
              </HeaderText>
              <HeaderText width="32%" padding="8px">
                {totalCost.toString()}
              </HeaderText>
              <HeaderText width="32%" padding="8px">
                {totalSavings.toString()}
              </HeaderText>
            </RowBetween>
          </>
        </CTASection>
      )}
    </>
  )
}
