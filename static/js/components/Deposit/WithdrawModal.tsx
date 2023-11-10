import { isAddress } from '@ethersproject/address'
import { parseEther } from '@ethersproject/units'
import { Token } from '@uniswap/sdk-core'
import { nativeOnChain } from '@uniswap/smart-order-router'
import { useWeb3React } from '@web3-react/core'
import { X7D } from 'constants/tokens'
import JSBI from 'jsbi'
import { WithdrawPage } from 'pages/Deposit/WithdrawPage'
import { useCallback, useEffect, useState } from 'react'
import { useCreateX7DRedeemCallback } from 'state/deposit/hooks'
import styled from 'styled-components/macro'
import { Trans } from 'utils/transShim'

import Circle from '../../assets/images/blue-loader.svg'
import tokenLogo from '../../assets/images/token-logo.png'
import { useModalIsOpen, useToggleWithdrawEthModal } from '../../state/application/hooks'
import { ApplicationModal } from '../../state/application/reducer'
import { useClaimCallback, useUserClaimData } from '../../state/claim/hooks'
import { useUserHasWithdrawnEth } from '../../state/transactions/hooks'
import { CloseIcon, CustomLightSpinner, ExternalLink, ThemedText, UniTokenAnimated } from '../../theme'
import { ExplorerDataType, getExplorerLink } from '../../utils/getExplorerLink'
import { ButtonPrimary } from '../Button'
import { AutoColumn, ColumnCenter } from '../Column'
import { Break, CardBGImageSmaller, CardNoise, CardSection, DataCard } from '../earn/styled'
import Modal from '../Modal'
import { RowBetween } from '../Row'

const ContentWrapper = styled(AutoColumn)`
  width: 100%;
`

const ModalUpper = styled(DataCard)`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to right, #4261d6 10%, #9139b0 100%);
`

const ConfirmOrLoadingWrapper = styled.div<{ activeBG: boolean }>`
  width: 100%;
  padding: 24px;
  position: relative;
  background: ${({ activeBG }) =>
    activeBG &&
    'radial-gradient(100% 100% at 50% 0%, rgba(255, 0, 122, 0.2) 30%, rgba(33, 114, 229, 0.2) 100%), #4261d6;'};
`

const ConfirmedIcon = styled(ColumnCenter)`
  padding: 60px 0;
`

const SOCKS_AMOUNT = 1000
const USER_AMOUNT = 400

interface WithdrawModalProps {
  depositAmount: string
  maxAmount: string
  handleDeposit: () => void
}

export default function WithdrawModal({ depositAmount, maxAmount, handleDeposit }: WithdrawModalProps) {
  const isOpen = useModalIsOpen(ApplicationModal.WITHDRAW_ETH_LENDING_POOL)
  const toggleClaimModal = useToggleWithdrawEthModal()
  const withdrawEthCallback = useCreateX7DRedeemCallback()
  const { account, chainId } = useWeb3React()
  const [amountValue, setAmountValue] = useState('')
  const [currencyValue, setCurrencyValue] = useState<Token>(X7D[chainId || 1])

  // used for UI loading states
  const [attempting, setAttempting] = useState<boolean>(false)

  // get user claim data
  const userClaimData = useUserClaimData(account)

  // monitor the status of the claim from contracts and txns
  const { claimCallback } = useClaimCallback(account)

  const nativeCurrency = nativeOnChain(chainId || 1)

  if (depositAmount === '' || depositAmount === '.') {
    depositAmount = '0'
  }

  const depositValueEth = parseEther(depositAmount)
  const { claimSubmitted, claimTxn } = useUserHasWithdrawnEth(account ?? undefined)
  const [claimConfirmed, setClaimConfirmed] = useState(false)

  function onClaim() {
    setAttempting(true)
    claimCallback()
      // reset modal and log error
      .catch((error) => {
        setAttempting(false)
        // console.log(error)
      })
  }
  // Fix this to be more standard
  function validInput(currentVal: string, maxVal: string) {
    if (currentVal === '') return false
    if (currentVal === '.') currentVal = '0.'
    try {
      const a = JSBI.BigInt(parseEther(currentVal || '0'))
      if (JSBI.equal(a, JSBI.BigInt(0))) return false

      const b = JSBI.BigInt(maxVal || '0')

      return JSBI.greaterThanOrEqual(b, a)
    } catch {
      return false
    }
  }

  async function onRedeem() {
    setAttempting(true)
    const promise = await withdrawEthCallback(amountValue)

    if (promise?.toString() === 'Error: No transaction hash found.') {
      setAttempting(false)
      return
    }

    if (promise?.toString() === 'TypeError: value.mul is not a function') {
      setAttempting(false)
      return
    }
    if (promise?.toString().startsWith('0x')) {
      // console.log('Withdraw Tx submitted ', promise)
      setClaimConfirmed(true)
      return
    }

    setClaimConfirmed(false)
    setAttempting(false)
  }

  const handleAmountInput = useCallback(
    (amount: string) => {
      setAmountValue(amount)
    },
    [setAmountValue]
  )
  // once confirmed txn is found, if modal is closed open, mark as not attempting regradless
  useEffect(() => {
    if (claimConfirmed && claimSubmitted && attempting) {
      setAttempting(false)
      if (!isOpen) {
        toggleClaimModal()
      }
    }
  }, [attempting, claimConfirmed, claimSubmitted, isOpen, toggleClaimModal])

  return (
    <Modal isOpen={isOpen} onDismiss={toggleClaimModal} maxHeight={90}>
      {!attempting && !claimConfirmed && (
        <ContentWrapper gap="lg">
          <ModalUpper>
            <CardNoise />
            <CardSection gap="md">
              <RowBetween>
                <ThemedText.DeprecatedWhite fontWeight={500}>
                  <Trans>
                    Redeem {X7D[chainId || 1].symbol} for {nativeCurrency.symbol?.toString() ?? 'ETH'}
                  </Trans>
                </ThemedText.DeprecatedWhite>
                <CloseIcon onClick={toggleClaimModal} style={{ zIndex: 99 }} color="white" />
              </RowBetween>
              <ThemedText.DeprecatedWhite fontWeight={700} fontSize={36}>
                <Trans>
                  Burn {X7D[chainId || 1].symbol}:
                  <br /> {amountValue || '0'}{' '}
                </Trans>
                <br />
                <Trans>
                  Receive {nativeCurrency.symbol?.toString() ?? 'ETH'}:
                  <br /> {amountValue || '0'}{' '}
                </Trans>
              </ThemedText.DeprecatedWhite>
            </CardSection>
            <Break />
          </ModalUpper>
          <WithdrawPage amount={amountValue} onAmountInput={handleAmountInput} currency={currencyValue} />

          <AutoColumn gap="md" style={{ padding: '1rem', paddingTop: '0' }} justify="center">
            <ThemedText.DeprecatedSubHeader fontWeight={500}>
              <Trans>
                {X7D[chainId || 1].symbol} is exchangeable at any point back to{' '}
                {nativeCurrency.symbol?.toString() ?? 'ETH'}, at a 1:1 ratio.
              </Trans>
            </ThemedText.DeprecatedSubHeader>
            {validInput(amountValue, maxAmount) ? (
              <ButtonPrimary
                disabled={!isAddress(account ?? '')}
                padding="16px 16px"
                width="100%"
                $borderRadius="12px"
                mt="1rem"
                onClick={onRedeem}
              >
                <Trans>
                  Redeem {amountValue} {nativeCurrency.symbol?.toString() ?? 'ETH'}
                </Trans>
              </ButtonPrimary>
            ) : (
              <ButtonPrimary
                disabled={true}
                padding="16px 16px"
                width="100%"
                $borderRadius="12px"
                mt="1rem"
                onClick={onRedeem}
              >
                <Trans>Enter a valid amount</Trans>
              </ButtonPrimary>
            )}
          </AutoColumn>
        </ContentWrapper>
      )}
      {(attempting || claimConfirmed) && (
        <ConfirmOrLoadingWrapper activeBG={true}>
          <CardNoise />
          <CardBGImageSmaller desaturate />
          <RowBetween>
            <div />
            <CloseIcon onClick={toggleClaimModal} style={{ zIndex: 99 }} stroke="black" />
          </RowBetween>
          <ConfirmedIcon>
            {!claimConfirmed ? (
              <CustomLightSpinner src={Circle} alt="loader" size="90px" />
            ) : (
              <UniTokenAnimated width="72px" src={tokenLogo} alt="ETH" />
            )}
          </ConfirmedIcon>
          <AutoColumn gap="100px" justify="center">
            <AutoColumn gap="12px" justify="center">
              <ThemedText.DeprecatedLargeHeader fontWeight={600} color="black">
                {claimConfirmed ? <Trans>Redeemed!</Trans> : <Trans>Redeeming</Trans>}
              </ThemedText.DeprecatedLargeHeader>
            </AutoColumn>
            {claimConfirmed && (
              <>
                <ThemedText.DeprecatedSubHeader fontWeight={500} color="black">
                  <Trans>Thank you for helping fund permissionless finance </Trans>
                </ThemedText.DeprecatedSubHeader>
              </>
            )}
            {attempting && !claimSubmitted && (
              <ThemedText.DeprecatedSubHeader color="black">
                <Trans>Confirm this transaction in your wallet</Trans>
              </ThemedText.DeprecatedSubHeader>
            )}
            {attempting && claimSubmitted && !claimConfirmed && chainId && claimTxn?.hash && (
              <ExternalLink
                href={getExplorerLink(chainId, claimTxn?.hash, ExplorerDataType.TRANSACTION)}
                style={{ zIndex: 99 }}
              >
                <Trans>View transaction on Explorer</Trans>
              </ExternalLink>
            )}
          </AutoColumn>
        </ConfirmOrLoadingWrapper>
      )}
    </Modal>
  )
}
