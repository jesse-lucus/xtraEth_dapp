import { BigNumber } from '@ethersproject/bignumber'
import { formatEther } from '@ethersproject/units'
import { useWeb3React } from '@web3-react/core'
import { AutoColumn } from 'components/Column'
import { useCurrency } from 'hooks/Tokens'
import { useLendingPoolV1Contract, usePairContract } from 'hooks/useContract'
import { NEVER_RELOAD, useSingleCallResult } from 'lib/hooks/multicall'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'
import { Text } from 'rebass'
import { useCurrentDEX } from 'state/dex/hooks'
import {
  useCanLiquidate,
  useGeRemainingLiability,
  useGetLoanPairQuote,
  useGetPremiumDue,
  useGetPremiumPaymentSchedule,
  useGetPrincipalDue,
  useGetPrincipalPaymentSchedule,
  useGetTotalDue,
  usePayLiabilityCallback,
} from 'state/xmint/hooks'
import styled from 'styled-components/macro'
import { Trans } from 'utils/transShim'

import { ButtonGray, ButtonOutlined, ButtonOutlinedThin, ButtonText } from '../Button'
import { LightCard } from '../Card'
import DoubleCurrencyLogo from '../DoubleLogo'
import { AutoRow, RowBetween, RowFixed } from '../Row'
import { Dots } from '../swap/styleds'
import { Countdown } from './Countdown'

export const FixedHeightRow = styled(RowBetween)`
  height: 24px;
`
const Button = styled(ButtonGray)`
  &:hover {
    background-color: ${({ theme }) => theme.deprecated_bg2};
    color: ${({ theme }) => theme.deprecated_text1};
  }

  width: 132px;
  height: 32px;
  padding: 4px;
`

const StyledPositionCard = styled(LightCard)<{ bgColor: any }>`
  border: none;
  background: linear-gradient(155deg, #5a06c7, ${({ bgColor }) => bgColor});
  position: relative;
  overflow: hidden;
`
const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.white};
  opacity: 0.24;
  margin-top: 12px;
  margin-bottom: 12px;
`
const DataRow = styled(RowBetween)`
  ${({ theme }) => theme.deprecated_mediaWidth.deprecated_upToSmall`
flex-direction: column;
`};
`

interface PositionCardProps {
  loanId: number
}

interface PaymentCardProps {
  loanId: number
  paymentDueTimeStamp: any
  paymentAmount: any
  canLiquidate: boolean
}

export function PaymentPositionCard({ loanId, paymentDueTimeStamp, paymentAmount, canLiquidate }: PaymentCardProps) {
  const payLiability = usePayLiabilityCallback()
  const handleAllTotalDueData = async (rawValue: BigNumber) => {
    payLiability(formatEther(rawValue).toString(), loanId)
  }
  const exactEnd = new Date(paymentDueTimeStamp.toNumber())
  const now = Math.floor(new Date().getTime() / 1000) - 10

  return (
    <>
      <AutoColumn gap="10px" style={{ margin: '8px' }}>
        <FixedHeightRow>
          <Text fontSize={16} fontWeight={500}>
            <DataRow>
              <Countdown exactEnd={exactEnd} canLiquidate={canLiquidate} />
            </DataRow>
          </Text>
          <RowFixed gap="8px" style={{ color: 'gray' }}>
            <ButtonOutlinedThin
              width="100%"
              onClick={() => {
                handleAllTotalDueData(paymentAmount)
              }}
            >
              <Text color="white">Pay {formatEther(paymentAmount).toString()}</Text>
            </ButtonOutlinedThin>
          </RowFixed>
        </FixedHeightRow>
      </AutoColumn>
    </>
  )
}

export default function LoanPositionCard({ loanId }: PositionCardProps) {
  const { account } = useWeb3React()
  const LENDING_POOL = useLendingPoolV1Contract()

  const pairAddress = useGetLoanPairQuote(LENDING_POOL, loanId)
  const pair = usePairContract(pairAddress)
  const currentDEX = useCurrentDEX()
  const token0AddressCallState = useSingleCallResult(pair, 'token0', undefined, NEVER_RELOAD)
  const token0Address = token0AddressCallState?.result?.[0]
  const token1AddressCallState = useSingleCallResult(pair, 'token1', undefined, NEVER_RELOAD)
  const token1Address = token1AddressCallState?.result?.[0]

  const currency0 = useCurrency(token0Address) //unwrappedToken(pair.token0)
  const currency1 = useCurrency(token1Address) //unwrappedToken(pair.token1)

  const [showMore, setShowMore] = useState(false)

  const premiumPaymentSchedule = useGetPremiumPaymentSchedule(LENDING_POOL, loanId)
  const remainingLiability = useGeRemainingLiability(LENDING_POOL, loanId)
  const principlePaymentSchedule = useGetPrincipalPaymentSchedule(LENDING_POOL, loanId)
  //debugger
  //const firstPayment = principlePaymentSchedule?.paymentDueTimeStamp[0].toString()
  const currentTime = Math.floor(Date.now() / 1000) //firstPayment ? new Date(firstPayment) : Date.now()
  const currentTs = BigNumber.from(currentTime)

  let loanActive = false
  let lastPaymentTs = BigNumber.from(0)
  let fullRepaymentSchedule
  //let currentTotalDueData
  let paymentIndex = 0

  if (principlePaymentSchedule.paymentDueTimeStamp?.length > 0) {
    lastPaymentTs =
      principlePaymentSchedule.paymentDueTimeStamp[principlePaymentSchedule.paymentDueTimeStamp.length - 1]
    loanActive = lastPaymentTs > currentTs
    fullRepaymentSchedule = premiumPaymentSchedule?.paymentDueTimeStamp.map((paymentTs, i) => {
      if (principlePaymentSchedule?.paymentDueTimeStamp[paymentIndex].eq(paymentTs)) {
        paymentIndex++

        // console.log(principlePaymentSchedule.paymentDueTimeStamp[paymentIndex] === paymentTs)

        return {
          paymentDueTimeStamp: paymentTs,
          paymentAmount: premiumPaymentSchedule.paymentAmount[i].add(
            principlePaymentSchedule.paymentAmount[paymentIndex - 1]
          ),
        }
      } else {
        return {
          paymentDueTimeStamp: paymentTs,
          paymentAmount: premiumPaymentSchedule.paymentAmount[i],
        }
      }
    })
  }

  const allTotalDueData = useGetTotalDue(LENDING_POOL, loanId, currentTime)

  const allPrincipalDue = useGetPrincipalDue(LENDING_POOL, loanId, lastPaymentTs ? lastPaymentTs.toNumber() : 0)
  const currentTotalDueData = useGetPremiumDue(LENDING_POOL, loanId, lastPaymentTs ? lastPaymentTs.toNumber() : 0)
  const lastPayment = lastPaymentTs ? lastPaymentTs.toString() : '0'

  const hasBalance = allPrincipalDue?.toString() === '0'
  const canLiquidate = useCanLiquidate(LENDING_POOL, loanId)
  const backgroundColor = loanActive ? '#0065ff' : '#030d33'
  const now = Math.floor(new Date().getTime() / 1000) - 10

  const payLiability = usePayLiabilityCallback()
  const handleAllTotalDueData = async (rawValue: BigNumber) => {
    payLiability(formatEther(rawValue).toString(), loanId)
  }

  return (
    <StyledPositionCard bgColor={backgroundColor}>
      <FixedHeightRow>
        <AutoRow gap="8px" style={{ marginLeft: '8px' }}>
          <Text fontWeight={500} fontSize={20}>
            {loanId}
          </Text>
          {!currency0 || !currency1 ? (
            <Dots></Dots>
          ) : (
            <>
              {' '}
              <DoubleCurrencyLogo currency0={currency0} currency1={currency1} margin={true} size={20} />$
              {currency0.symbol}/${currency1.symbol}
            </>
          )}{' '}
        </AutoRow>
        <RowFixed gap="8px" style={{ marginRight: '4px', color: 'white' }}>
          {canLiquidate?.toString() !== '0' ? <>❗</> : <> </>}

          <ButtonText padding="6px 8px" $borderRadius="12px" width="100%" onClick={() => setShowMore(!showMore)}>
            {showMore ? (
              <>
                <ChevronUp size="20" style={{ marginLeft: '8px', height: '20px', minWidth: '20px' }} />
              </>
            ) : (
              <>
                <ChevronDown size="20" style={{ marginLeft: '8px', height: '20px', minWidth: '20px' }} />
              </>
            )}
          </ButtonText>
        </RowFixed>
      </FixedHeightRow>
      {showMore && (
        <AutoColumn gap="8px" style={{ padding: '2px' }}>
          <Line />

          {canLiquidate?.toString() === '0' ? (
            <> </>
          ) : (
            <>
              <FixedHeightRow>
                <Text fontSize={16} fontWeight={500}>
                  <Trans>Pay Outstanding</Trans>
                </Text>
                <Text fontSize={16} fontWeight={500}>
                  <ButtonOutlined
                    onClick={() => {
                      handleAllTotalDueData(allTotalDueData)
                    }}
                  >
                    <Trans> {allTotalDueData ? formatEther(allTotalDueData.toString()).toString() : <></>} </Trans>
                  </ButtonOutlined>
                </Text>
              </FixedHeightRow>{' '}
            </>
          )}

          <FixedHeightRow>
            <Text fontSize={16} fontWeight={500}>
              <Trans>Status:</Trans>
            </Text>
            <Text fontSize={16} fontWeight={500}>
              {loanActive ? 'Active' : 'Closed'}
            </Text>
          </FixedHeightRow>
          <FixedHeightRow>
            <Text fontSize={16} fontWeight={500}>
              <Trans>Can Liquidate:</Trans>
            </Text>
            <Text fontSize={16} fontWeight={500}>
              {canLiquidate ? 'No' : 'Yes'}
            </Text>
          </FixedHeightRow>
          <FixedHeightRow>
            <Text fontSize={16} fontWeight={500}>
              <Trans>Outstanding Principal:</Trans>
            </Text>
            <Text fontSize={16} fontWeight={500}>
              {formatEther(allPrincipalDue.toString()).toString()}
            </Text>
          </FixedHeightRow>

          <FixedHeightRow>
            <Text fontSize={16} fontWeight={500}>
              <Trans>Pay All Liability:</Trans>
            </Text>
            <Text color="white" fontSize={16} fontWeight={500}>
              <ButtonOutlinedThin
                onClick={() => {
                  handleAllTotalDueData(currentTotalDueData)
                }}
              >
                <Text color="white">Pay {formatEther(currentTotalDueData.toString()).toString()}</Text>
              </ButtonOutlinedThin>
            </Text>
          </FixedHeightRow>

          <Line />
          <FixedHeightRow>
            <Text fontSize={16} fontWeight={500}>
              <Trans>Payment Due: </Trans>
            </Text>
            <Text fontSize={16} fontWeight={500}>
              Amount:
            </Text>
          </FixedHeightRow>

          <>
            {fullRepaymentSchedule?.map((paymentScheduleDate, i) => (
              <>
                {paymentScheduleDate.paymentDueTimeStamp.gte(BigNumber.from(now)) ? (
                  <>
                    {' '}
                    <PaymentPositionCard
                      key={'premium' + loanId + i}
                      loanId={loanId}
                      paymentDueTimeStamp={paymentScheduleDate.paymentDueTimeStamp}
                      paymentAmount={paymentScheduleDate.paymentAmount}
                      canLiquidate={hasBalance}
                    />
                  </>
                ) : (
                  <></>
                )}
              </>
            ))}
          </>
        </AutoColumn>
      )}
    </StyledPositionCard>
  )
}
