import { parseEther } from '@ethersproject/units'
import { formatCurrencyAmount, NumberType } from '@uniswap/conedison/format'
import { CurrencyAmount } from '@uniswap/sdk-core'
import { nativeOnChain } from '@uniswap/smart-order-router'
import { useWeb3React } from '@web3-react/core'
import { NetworkAlert } from 'components/NetworkAlert/NetworkAlert'
import { useStablecoinValue } from 'hooks/useStablecoinPrice'
import JSBI from 'jsbi'
import useCurrencyBalance from 'lib/hooks/useCurrencyBalance'
import { useCallback, useState } from 'react'
import { useCreateX7DMintCallback, useCreateX7DRedeemCallback } from 'state/deposit/hooks'
import styled, { useTheme } from 'styled-components/macro'
import { Trans } from 'utils/transShim'

import { ButtonError, ButtonLight, ButtonText } from '../../components/Button'
import { AutoColumn } from '../../components/Column'
import { FiatValue } from '../../components/CurrencyInputPanel/FiatValue'
import DepositModal from '../../components/Deposit/DepositModal'
import WithdrawModal from '../../components/Deposit/WithdrawModal'
import { CardNoise, CardSection, DataCard } from '../../components/earn/styled'
import { RowBetween } from '../../components/Row'
import { X7D } from '../../constants/tokens'
import {
  useToggleDepositEthModal,
  useToggleWalletModal,
  useToggleWithdrawEthModal,
} from '../../state/application/hooks'
import { ExternalLink, ThemedText } from '../../theme'
import { WrapPage } from './WrapPage'

const PageWrapper = styled(AutoColumn)`
  margin-top: 10px;
  padding: 20px 16px 4px;
  max-width: 480px;
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
const TopSection = styled(AutoColumn)`
  max-width: 720px;
  width: 100%;
`

const OutlineWrapper = styled(AutoColumn)`
  margin-top: 10px;
  max-width: 480px;
  width: 100%;
`

const DataRow = styled(RowBetween)`
  ${({ theme }) => theme.deprecated_mediaWidth.deprecated_upToSmall`
flex-direction: column;
`};
`

const CreateMintButton = ({ depositAmount, toggle }: { depositAmount: string; toggle: () => void }) => {
  // const disabled = depositAmount === '' || false
  return (
    <ButtonError style={{ marginTop: '18px' }} error={false} onClick={toggle}>
      <Trans>Mint {depositAmount} X7D</Trans>
    </ButtonError>
  )
}

const CreateAddMoreButton = ({ depositAmount, toggle }: { depositAmount: string; toggle: () => void }) => {
  // const disabled = depositAmount === '' || false
  return (
    <ButtonError style={{ marginTop: '18px' }} disabled={true} error={false}>
      <Trans>Enter a valid amount</Trans>
    </ButtonError>
  )
}

export default function Deposit() {
  const theme = useTheme()
  const { chainId, account } = useWeb3React()
  // const [currencyValue, setCurrencyValue] = useState<Currency>(ExtendedEther.onChain(chainId || 1))
  const [amountValue, setAmountValue] = useState('')
  const toggleWalletModal = useToggleWalletModal() // toggle wallet when disconnected
  const toggleDepositModal = useToggleDepositEthModal() // toggle wallet when disconnected
  const toggleWithdrawETHModal = useToggleWithdrawEthModal() // toggle wallet when disconnected

  const [showConfirm, setShowConfirm] = useState<boolean>(false)
  const [maxBalance, setMaxBalance] = useState('')

  const [txHash, setTxHash] = useState<string>('')
  const balanceX7D = useCurrencyBalance(account, X7D[chainId || 1])
  const formattedX7DBalance = formatCurrencyAmount(balanceX7D, NumberType.TokenNonTx) || '0'

  const nativeCurrency = nativeOnChain(chainId || 1)
  const balanceETH = useCurrencyBalance(account, nativeCurrency)

  const balanceX7DinEth = CurrencyAmount.fromFractionalAmount(
    nativeCurrency,
    balanceX7D?.numerator || '0',
    balanceX7D?.denominator || '1'
  )
  const fiatValueOutput = useStablecoinValue(balanceX7DinEth)

  const handleAmountInput = useCallback(
    (amount: string) => {
      setAmountValue(amount)
    },
    [setAmountValue]
  )
  const handleMaxAmount = useCallback(
    (amount: string) => {
      setMaxBalance(amount)
    },
    [setMaxBalance]
  )

  const depositEthCallback = useCreateX7DMintCallback()
  const handleDeposit = async () => {
    depositEthCallback(amountValue)
  }

  const redeemEthCallback = useCreateX7DRedeemCallback()
  const handleRedeem = async () => {
    redeemEthCallback(amountValue)
  }

  const handleDismissConfirmation = useCallback(() => {
    setShowConfirm(false)
    // if there was a tx hash, we want to clear the input

    setTxHash('')
  }, [txHash])

  function validInput(currentVal: string, maxVal: string | undefined) {
    if (maxVal === undefined) return false
    if (currentVal === '' || currentVal === '.') return false
    // if (currentVal?.length >= )
    try {
      const a = JSBI.BigInt(parseEther(currentVal || '0'))
      if (JSBI.equal(a, JSBI.BigInt(0))) return false
      const b = JSBI.BigInt(maxVal || '0')
      return JSBI.greaterThanOrEqual(b, a)
    } catch {
      return false
    }
  }

  return (
    <>
      <PageWrapper gap="lg" justify="center">
        <TopSection gap="md">
          <DataCard>
            <CardNoise />
            <CardSection>
              <AutoColumn gap="md">
                <RowBetween>
                  <ThemedText.DeprecatedWhite fontWeight={600} fontSize={25}>
                    <Trans>Mint {X7D[chainId || 1].symbol}</Trans>
                  </ThemedText.DeprecatedWhite>
                </RowBetween>
                <RowBetween>
                  <ThemedText.DeprecatedWhite fontWeight={300}>
                    <Trans>Fund permissionless finance </Trans>
                  </ThemedText.DeprecatedWhite>
                </RowBetween>
                <RowBetween>
                  <ThemedText.DeprecatedWhite fontSize={14}>
                    <Trans>
                      Wrap {nativeCurrency.symbol?.toString() ?? 'ETH'} and receive X7Deposit (
                      {X7D[chainId || 1].symbol}). Fully backed & redeemable 1:1 for{' '}
                      {nativeCurrency.symbol?.toString() ?? 'ETH'}.
                    </Trans>
                  </ThemedText.DeprecatedWhite>
                </RowBetween>{' '}
                <ExternalLink
                  style={{ color: theme.deprecated_white, textDecoration: 'underline' }}
                  href="https://x7.finance/ecosystem"
                  target="_blank"
                >
                  <ThemedText.DeprecatedWhite fontSize={14}>
                    <Trans>Read more about {X7D[chainId || 1].symbol}</Trans>
                  </ThemedText.DeprecatedWhite>
                </ExternalLink>
              </AutoColumn>
            </CardSection>

            <CardNoise />
          </DataCard>
        </TopSection>

        <AutoColumn gap="lg" style={{ width: '100%', maxWidth: '720px' }}>
          <DataRow style={{ alignItems: 'normal', maxWidth: '100%' }}>
            <ThemedText.DeprecatedMediumHeader style={{ marginTop: '0.5rem', marginLeft: '0.25rem', maxWidth: '50%' }}>
              <Trans>
                {' '}
                {X7D[chainId || 1].symbol} Balance: {account ? formattedX7DBalance || '0' : '0'}
              </Trans>
              <ThemedText.DeprecatedMediumHeader style={{ marginTop: '0rem', marginLeft: '0', width: '10rem' }}>
                <FiatValue fiatValue={fiatValueOutput} />
              </ThemedText.DeprecatedMediumHeader>
              <Trans>
                <ButtonText onClick={toggleWithdrawETHModal} margin="0 0 0 0" size="10">
                  <ThemedText.DeprecatedDarkGray fontSize="12px">
                    <Trans>redeem</Trans>
                  </ThemedText.DeprecatedDarkGray>
                </ButtonText>
              </Trans>
            </ThemedText.DeprecatedMediumHeader>{' '}
          </DataRow>

          <WrapPage amount={amountValue} onAmountInput={handleAmountInput} currency={nativeCurrency} />

          {!account ? (
            <ButtonLight onClick={toggleWalletModal} $borderRadius="12px" padding="12px">
              <Trans>Connect Wallet</Trans>
            </ButtonLight>
          ) : validInput(amountValue, balanceETH?.quotient?.toString()) ? (
            <CreateMintButton depositAmount={amountValue} toggle={toggleDepositModal} />
          ) : (
            <CreateAddMoreButton depositAmount={amountValue} toggle={toggleDepositModal} />
          )}

          <RowBetween
            style={{
              color: theme.deprecated_white,
              textDecoration: 'underline',
              alignItems: 'center',
              alignContent: 'center',
            }}
          ></RowBetween>
        </AutoColumn>
        <WithdrawModal
          depositAmount={balanceX7D?.quotient.toString() || '0'}
          maxAmount={balanceX7D?.quotient.toString() || '0'}
          handleDeposit={handleRedeem}
        />
        <DepositModal depositAmount={amountValue} handleDeposit={handleDeposit} />
      </PageWrapper>
      <OutlineWrapper>
        <NetworkAlert />
      </OutlineWrapper>
    </>
  )
}
