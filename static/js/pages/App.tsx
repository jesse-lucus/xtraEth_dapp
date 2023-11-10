import Loader from 'components/Loader'
import TopLevelModals from 'components/TopLevelModals'
import { useFeatureFlagsIsLoaded } from 'featureFlags'
import ApeModeQueryParamReader from 'hooks/useApeModeQueryParamReader'
import { lazy, Suspense, useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'
import { SpinnerSVG } from 'theme/components'
import { flexRowNoWrap } from 'theme/styles'
import { Z_INDEX } from 'theme/zIndex'

import ErrorBoundary from '../components/ErrorBoundary'
import NavBar from '../components/NavBar'
import Polling from '../components/Polling'
import Popups from '../components/Popups'
import DarkModeQueryParamReader from '../theme/components/DarkModeQueryParamReader'
import AddLiquidity from './AddLiquidity'
import { RedirectDuplicateTokenIdsV2 } from './AddLiquidityV2/redirects'
import Deposit from './Deposit'
import { RedirectDuplicateTokenIdsLoanV2 } from './AddLoanLiquidityV2/redirects'
import Earn from './Earn'
import Manage from './Earn/Manage'
import Loans from './Loans/v2'
import LoanIndex from './Loans/v2Index'
import MigrateV2 from './MigrateV2'
import MigrateV2Pair from './MigrateV2/MigrateV2Pair'
import { PositionPage } from './Pool/PositionPage'
import PoolV2 from './Pool/v2'
import PoolFinder from './PoolFinder'
import RemoveLiquidity from './RemoveLiquidity'
import RemoveLiquidityV3 from './RemoveLiquidity/V3'
import Swap from './Swap'
import { OpenClaimAddressModalAndRedirectToSwap, RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'
import Tokens from './Tokens'

const TokenDetails = lazy(() => import('./TokenDetails'))

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 72px 0px 0px 0px;
  align-items: center;
  flex: 1;
  ${({ theme }) => theme.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 52px 0px 16px 0px;
  `};
`

const HeaderWrapper = styled.div<{ scrolledState?: boolean }>`
  ${flexRowNoWrap};
  background-color: ${({ theme, scrolledState }) => scrolledState && theme.backgroundSurface};
  border-bottom: ${({ theme, scrolledState }) => scrolledState && `1px solid ${theme.backgroundOutline}`};
  width: 100%;
  justify-content: space-between;
  position: fixed;
  transition: ${({ theme }) =>
    `background-color ${theme.transition.duration.fast} ease-in-out,
    border-width ${theme.transition.duration.fast} ease-in-out`};
  top: 0;
  z-index: ${Z_INDEX.sticky};
`

const Marginer = styled.div`
  margin-top: 5rem;
`

// this is the same svg defined in assets/images/blue-loader.svg
// it is defined here because the remote asset may not have had time to load when this file is executing
const LazyLoadSpinner = () => (
  <SpinnerSVG width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M92 47C92 22.1472 71.8528 2 47 2C22.1472 2 2 22.1472 2 47C2 71.8528 22.1472 92 47 92"
      stroke="#217211"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SpinnerSVG>
)

export default function App() {
  const isLoaded = useFeatureFlagsIsLoaded()

  const { pathname } = useLocation()
  const [scrolledState, setScrolledState] = useState(false)

  const scrollListener = (e: Event) => {
    if (window.scrollY > 0) {
      setScrolledState(true)
    } else {
      setScrolledState(false)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    setScrolledState(false)
  }, [pathname])

  useEffect(() => {
    window.addEventListener('scroll', scrollListener)
  }, [])

  return (
    <ErrorBoundary>
      <DarkModeQueryParamReader />
      <ApeModeQueryParamReader />
      <AppWrapper>
        <HeaderWrapper scrolledState={scrolledState}>
          <NavBar />
        </HeaderWrapper>
        <BodyWrapper>
          <Popups />
          <Polling />
          <TopLevelModals />
          <Suspense fallback={<Loader />}>
            {isLoaded ? (
              <Routes>
                <Route path="tokens" element={<Tokens />}>
                  <Route path=":chainName" />
                </Route>
                <Route path="tokens/:chainName/:tokenAddress" element={<TokenDetails />} />

                <Route path="create-proposal" element={<Navigate to="/vote/create-proposal" replace />} />
                <Route path="claim" element={<OpenClaimAddressModalAndRedirectToSwap />} />
                <Route path="uni" element={<Earn />} />
                <Route path="uni/:currencyIdA/:currencyIdB" element={<Manage />} />

                <Route path="send" element={<RedirectPathToSwapOnly />} />
                <Route path="swap/:outputCurrency" element={<RedirectToSwap />} />
                <Route path="swap" element={<Swap />} />

                <Route path="loans" element={<Loans />} />
                <Route path="loans/:loanId" element={<LoanIndex />} />

                <Route path="fund" element={<Deposit />} />

                <Route path="pool/v2/find" element={<PoolFinder />} />
                <Route path="pool/v2" element={<PoolV2 />} />
                <Route path="pool" element={<RedirectDuplicateTokenIdsLoanV2 />} />
                <Route path="pool/:tokenId" element={<PositionPage />} />

                <Route path="add/v2" element={<RedirectDuplicateTokenIdsV2 />}>
                  <Route path=":currencyIdA" />
                  <Route path=":currencyIdA/:currencyIdB" />
                </Route>

                <Route path="add/loan/v2" element={<RedirectDuplicateTokenIdsLoanV2 />}>
                  <Route path=":currencyIdA" />
                  <Route path=":currencyIdA/:currencyIdB" />
                </Route>
                <Route path="add" element={<RedirectDuplicateTokenIdsV2 />}>
                  {/* this is workaround since react-router-dom v6 doesn't support optional parameters any more */}
                  <Route path=":currencyIdA" />
                  <Route path=":currencyIdA/:currencyIdB" />
                  <Route path=":currencyIdA/:currencyIdB/:feeAmount" />
                </Route>

                <Route path="increase" element={<AddLiquidity />}>
                  <Route path=":currencyIdA" />
                  <Route path=":currencyIdA/:currencyIdB" />
                  <Route path=":currencyIdA/:currencyIdB/:feeAmount" />
                  <Route path=":currencyIdA/:currencyIdB/:feeAmount/:tokenId" />
                </Route>

                <Route path="remove/v2/:currencyIdA/:currencyIdB" element={<RemoveLiquidity />} />
                <Route path="remove/:tokenId" element={<RemoveLiquidityV3 />} />

                <Route path="migrate/v2" element={<MigrateV2 />} />
                <Route path="migrate/v2/:address" element={<MigrateV2Pair />} />

                <Route path="*" element={<RedirectPathToSwapOnly />} />
              </Routes>
            ) : (
              <Loader />
            )}
          </Suspense>
          <Marginer />
        </BodyWrapper>
      </AppWrapper>
    </ErrorBoundary>
  )
}
