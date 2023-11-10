import { Implementation } from '@uniswap/router-sdk'
import { Pair } from '@uniswap/v2-sdk'
import { useWeb3React } from '@web3-react/core'
import xchangeLogo from 'assets/images/xchange-logo.png'
import { DEXSelector } from 'components/NavBar/DEXSelector'
import { UNSUPPORTED_V2POOL_CHAIN_IDS } from 'constants/chains'
import { dexIdToName } from 'constants/dexs'
import JSBI from 'jsbi'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Text } from 'rebass'
import { useCurrentDEX } from 'state/dex/hooks'
import styled, { useTheme } from 'styled-components/macro'
import { Trans } from 'utils/transShim'

import { ButtonPrimary, ButtonSecondary } from '../../components/Button'
import Card from '../../components/Card'
import { AutoColumn, ColumnCenter } from '../../components/Column'
import * as styles from '../../components/NavBar/ChainSelector.css'
import FullPositionCard from '../../components/PositionCard'
import { RowBetween, RowFixed } from '../../components/Row'
import { Dots } from '../../components/swap/styleds'
import { SwitchLocaleLink } from '../../components/SwitchLocaleLink'
import { BIG_INT_ZERO } from '../../constants/misc'
import { useXV2Pairs } from '../../hooks/useXV2Pairs'
import { useTokenBalancesWithLoadingIndicator } from '../../state/connection/hooks'
import { useStakingInfo } from '../../state/stake/hooks'
import { toXV2LiquidityToken, useTrackedTokenPairs } from '../../state/user/hooks'
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

export const ButtonRow = styled(RowFixed)`
  gap: 8px;
  ${({ theme }) => theme.deprecated_mediaWidth.deprecated_upToSmall`
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  `};
`

const ResponsiveButtonPrimary = styled(ButtonPrimary)`
  width: 100%;
  padding: 10px;
  margin: 2px;
  border-radius: 10px;
`

const ResponsiveButtonSecondary = styled(ButtonSecondary)`
  width: 100%;
  border-radius: 12px;
  ${({ theme }) => theme.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
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

export default function Pool() {
  const theme = useTheme()
  const { account, chainId } = useWeb3React()
  const currentDEX = useCurrentDEX()

  let unsupportedV2Network = chainId && UNSUPPORTED_V2POOL_CHAIN_IDS.includes(chainId)
  if (currentDEX.currentImplementation === Implementation.XCHANGE) {
    unsupportedV2Network = false
  }
  // fetch the user's balances of all tracked V2 LP tokens
  let trackedTokenPairs = useTrackedTokenPairs()
  if (unsupportedV2Network) trackedTokenPairs = []
  const tokenPairsWithLiquidityTokens = useMemo(
    () =>
      trackedTokenPairs.map((tokens) => ({
        liquidityToken: toXV2LiquidityToken(tokens, currentDEX.currentDEX),
        tokens,
      })),
    [trackedTokenPairs, currentDEX.currentDEX]
  )
  const liquidityTokens = useMemo(
    () => tokenPairsWithLiquidityTokens.map((tpwlt) => tpwlt.liquidityToken),
    [tokenPairsWithLiquidityTokens]
  )
  const [v2PairsBalances, fetchingV2PairBalances] = useTokenBalancesWithLoadingIndicator(
    account ?? undefined,
    liquidityTokens
  )

  // fetch the reserves for all V2 pools in which the user has a balance
  const liquidityTokensWithBalances = useMemo(
    () =>
      tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
        v2PairsBalances[liquidityToken.address]?.greaterThan('0')
      ),
    [tokenPairsWithLiquidityTokens, v2PairsBalances]
  )

  const v2Pairs = useXV2Pairs(
    liquidityTokensWithBalances.map(({ tokens }) => tokens),
    currentDEX.currentDEX
  )
  const v2IsLoading =
    fetchingV2PairBalances || v2Pairs?.length < liquidityTokensWithBalances.length || v2Pairs?.some((V2Pair) => !V2Pair)

  const allV2PairsWithLiquidity = v2Pairs.map(([, pair]) => pair).filter((v2Pair): v2Pair is Pair => Boolean(v2Pair))

  // show liquidity even if its deposited in rewards contract
  const stakingInfo = useStakingInfo()
  const stakingInfosWithBalance = stakingInfo?.filter((pool) =>
    JSBI.greaterThan(pool.stakedAmount.quotient, BIG_INT_ZERO)
  )
  const stakingPairs = useXV2Pairs(
    stakingInfosWithBalance?.map((stakingInfo) => stakingInfo.tokens),
    currentDEX.currentDEX
  )

  const setDexToXchange = () => {
    currentDEX.setCurrentDEX(Implementation.XCHANGE)
  }

  // remove any pairs that also are included in pairs with stake in mining pool
  const v2PairsWithoutStakedAmount = allV2PairsWithLiquidity.filter((v2Pair) => {
    return (
      stakingPairs
        ?.map((stakingPair) => stakingPair[1])
        .filter((stakingPair) => stakingPair?.liquidityToken.address === v2Pair.liquidityToken.address).length === 0
    )
  })

  return (
    <>
      <PageWrapper>
        <AutoColumn gap="lg" justify="center">
          <ThemedText.DeprecatedMediumHeader style={{ marginTop: '0.5rem', justifySelf: 'flex-center' }}>
            <Trans>V2 liquidity pools</Trans>
          </ThemedText.DeprecatedMediumHeader>

          <DEXSelector />
        </AutoColumn>

        {unsupportedV2Network ? (
          <AutoColumn gap="lg" justify="center">
            <AutoColumn gap="md" style={{ width: '100%' }}>
              <TitleRow style={{ marginTop: '1rem', alignItems: 'center' }} padding="0">
                <RowBetween>
                  <ResponsiveButtonPrimary
                    id="loan-pool-button"
                    as={Link}
                    to="/add/loan/v2/ETH"
                    padding="6px 8px"
                    disabled={true}
                    onClick={setDexToXchange}
                  >
                    <Text fontWeight={500} fontSize={16}>
                      <Trans>Initial Liquidity Loan</Trans>
                    </Text>
                    <img src={xchangeLogo} alt="xchange" className={styles.Image} />
                  </ResponsiveButtonPrimary>
                </RowBetween>
              </TitleRow>
              <Layer2Prompt>
                <ThemedText.DeprecatedBody color={theme.deprecated_text3} textAlign="center">
                  <Trans>{dexIdToName[currentDEX.currentDEX]} V2 Pool is not available on Layer 2. Use Xchange!</Trans>
                </ThemedText.DeprecatedBody>
              </Layer2Prompt>
            </AutoColumn>
          </AutoColumn>
        ) : (
          <AutoColumn gap="lg" justify="center">
            <AutoColumn gap="md" style={{ width: '90%' }}>
              <ColumnCenter>
                <TitleRow style={{ marginTop: '1rem', alignItems: 'center' }} padding="0">
                  <RowBetween>
                    <ResponsiveButtonPrimary id="loan-pool-button" as={Link} to="/add/loan/v2/ETH" padding="6px 8px">
                      <Text fontWeight={500} fontSize={16}>
                        <Trans>Initial Liquidity Loan</Trans>
                      </Text>
                      <img src={xchangeLogo} alt="xchange" className={styles.Image} />
                    </ResponsiveButtonPrimary>

                    <ResponsiveButtonPrimary
                      id="join-pool-button"
                      as={Link}
                      to="/add/v2/ETH"
                      padding="6px 8px"
                      minHeight="24px"
                    >
                      <Text fontWeight={500} fontSize={16}>
                        <Trans>Add V2 Liquidity</Trans>
                      </Text>
                    </ResponsiveButtonPrimary>
                  </RowBetween>
                </TitleRow>
                <TitleRow style={{ marginTop: '1rem', alignItems: 'center' }} padding="0">
                  <RowBetween>
                    <ResponsiveButtonPrimary id="find-pool-button" as={Link} to="/pool/v2/find" padding="6px 8px">
                      <Text fontWeight={500} fontSize={16} textAlign="center">
                        <Trans>
                          Import Pool
                          <br />{' '}
                        </Trans>
                      </Text>
                    </ResponsiveButtonPrimary>
                    <ResponsiveButtonPrimary as={Link} padding="6px 8px" to="/add/v2/ETH">
                      <Text fontWeight={500} fontSize={16}>
                        <Trans>Create pair</Trans>
                      </Text>
                    </ResponsiveButtonPrimary>
                  </RowBetween>
                </TitleRow>
              </ColumnCenter>

              {!account ? (
                <Card padding="40px">
                  <ThemedText.DeprecatedBody color={theme.deprecated_text3} textAlign="center">
                    <Trans>Connect to a wallet to view your liquidity.</Trans>
                  </ThemedText.DeprecatedBody>
                </Card>
              ) : v2IsLoading ? (
                <EmptyProposals>
                  <ThemedText.DeprecatedBody color={theme.deprecated_text3} textAlign="center">
                    <Dots>
                      <Trans>Loading</Trans>
                    </Dots>
                  </ThemedText.DeprecatedBody>
                </EmptyProposals>
              ) : allV2PairsWithLiquidity?.length > 0 || stakingPairs?.length > 0 ? (
                <>
                  {v2PairsWithoutStakedAmount.map((v2Pair) => (
                    <FullPositionCard key={v2Pair.liquidityToken.address} pair={v2Pair} />
                  ))}
                  {stakingPairs.map(
                    (stakingPair, i) =>
                      stakingPair[1] && ( // skip pairs that arent loaded
                        <FullPositionCard
                          key={stakingInfosWithBalance[i].stakingRewardAddress}
                          pair={stakingPair[1]}
                          stakedBalance={stakingInfosWithBalance[i].stakedAmount}
                        />
                      )
                  )}
                </>
              ) : (
                <AutoColumn>
                  <AutoColumn>
                    <EmptyProposals>
                      <ThemedText.DeprecatedBody color={theme.deprecated_text3} textAlign="center">
                        <Trans>No {dexIdToName[currentDEX.currentDEX]} liquidity found.</Trans>
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
