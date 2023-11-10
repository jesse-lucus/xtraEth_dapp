import { isAddress } from '@ethersproject/address'
import { useWeb3React } from '@web3-react/core'
import useNativeCurrency from 'lib/hooks/useNativeCurrency'
import { useEffect, useState } from 'react'
import { Text } from 'rebass'
import { useCreateX7DMintCallback } from 'state/deposit/hooks'
import styled from 'styled-components/macro'
import { Trans } from 'utils/transShim'

import Circle from '../../assets/images/blue-loader.svg'
import tokenLogo from '../../assets/images/token-logo.png'
import { X7D } from '../../constants/tokens'
import { useModalIsOpen, useToggleDepositEthModal } from '../../state/application/hooks'
import { ApplicationModal } from '../../state/application/reducer'
import { useClaimCallback, useUserClaimData } from '../../state/claim/hooks'
import { useUserHasDepositedEth } from '../../state/transactions/hooks'
import { CloseIcon, CustomLightSpinner, ThemedText, UniTokenAnimated } from '../../theme'
import { ButtonPrimary } from '../Button'
import { AutoColumn, ColumnCenter } from '../Column'
import Confetti from '../Confetti'
import { Break, CardNoise, CardSection, DataCard } from '../Deposit/styled'
import Modal from '../Modal'
import { RowBetween } from '../Row'

const ContentWrapper = styled(AutoColumn)`
  width: 100%;
`

const ModalUpper = styled(DataCard)`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to left, #4261d6 10%, #9139b0 100%);
`
const ConfirmOrLoadingWrapper = styled.div<{ activeBG: boolean }>`
  width: 100%;
  padding: 24px;
  position: relative;
  background: ${({ activeBG }) =>
    activeBG &&
    'radial-gradient(100% 100% at 50% 0%, rgba(255, 0, 122, 0.2) 30%, rgba(33, 114, 229, 0.2) 100%), #4261d6;'};
`
// const ConfirmOrLoadingWrapper = styled.div<{ activeBG: boolean }>`
//   width: 100%;
//   padding: 24px;
//   position: relative;
//   background: radial-gradient(100% 100% at 50% 0%, #0065ff, #4c1d95 70%, #4c1d95);
// `
// background: ${({ activeBG }) =>
// 'radial-gradient(76.02% 75.41% at 1.84% 0%, rgba(0, 101, 255, 0.2) 0%, rgba(33, 114, 229, 0.2) 100%), #FFFFFF;'};

const ConfirmedIcon = styled(ColumnCenter)`
  padding: 60px 0;
`

const SOCKS_AMOUNT = 1000
const USER_AMOUNT = 400

interface DepositModalProps {
  depositAmount: string
  handleDeposit: () => void
}

export default function DepositModal({ depositAmount, handleDeposit }: DepositModalProps) {
  const isOpen = useModalIsOpen(ApplicationModal.DEPOSIT_ETH_LENDING_POOL)
  const toggleClaimModal = useToggleDepositEthModal()
  const depositEthCallback = useCreateX7DMintCallback()
  const { account, chainId } = useWeb3React()
  const [amountValue, setAmountValue] = useState('')

  // used for UI loading states
  const [attempting, setAttempting] = useState<boolean>(false)
  const [claimConfirmed, setClaimConfirmed] = useState(false)

  // get user claim data
  const userClaimData = useUserClaimData(account)

  // monitor the status of the claim from contracts and txns
  const { claimCallback } = useClaimCallback(account)
  const nativeCurrency = useNativeCurrency()
  if (depositAmount === '' || depositAmount === '.') {
    depositAmount = '0'
  }
  const [showConfirm, setShowConfirm] = useState<boolean>(false)

  // const depositValueEth = parseEther(depositAmount)
  const { claimSubmitted, claimTxn } = useUserHasDepositedEth(account ?? undefined)
  // const claimConfirmed = Boolean(claimTxn?.receipt)

  async function onDeposit() {
    setAttempting(true)
    setShowConfirm(true)

    const promise = await depositEthCallback(depositAmount)
    if (promise?.toString() === 'Error: No transaction hash found.') {
      setAttempting(false)
      return
    }

    if (promise?.toString() === 'TypeError: value.mul is not a function') {
      setAttempting(false)
      return
    }
    if (promise?.toString().startsWith('0x')) {
      // console.log('Deposit Tx submitted ', promise)
      setClaimConfirmed(true)
      return
    }

    setShowConfirm(false)

    setAttempting(false)
    toggleClaimModal()
  }

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
      <Confetti start={Boolean(isOpen && claimConfirmed)} />
      {!attempting && !claimConfirmed && (
        <ContentWrapper gap="lg">
          <ModalUpper>
            <CardNoise />
            <CardSection gap="md">
              <RowBetween>
                <ThemedText.DeprecatedWhite fontWeight={500}>
                  <Trans>Mint X7Deposit </Trans>
                </ThemedText.DeprecatedWhite>
                <CloseIcon onClick={toggleClaimModal} style={{ zIndex: 99 }} color="white" />
              </RowBetween>
              <ThemedText.DeprecatedWhite fontWeight={700} fontSize={36}>
                <Trans>
                  Deposit:
                  <br /> {depositAmount || '0'} {nativeCurrency.symbol?.toString() ?? 'ETH'}
                </Trans>
                <br />
                <Trans>
                  Mint:
                  <br /> {depositAmount || '0'} {X7D[chainId || 1].symbol}
                </Trans>
              </ThemedText.DeprecatedWhite>
            </CardSection>
            <Break />
          </ModalUpper>
          <AutoColumn gap="md" style={{ padding: '1rem', paddingTop: '0' }} justify="center">
            <ThemedText.DeprecatedSubHeader fontWeight={500}>
              <Trans>{X7D[chainId || 1].symbol} is exchangeable at any point back to ETH, at a 1-to-1 ratio.</Trans>
            </ThemedText.DeprecatedSubHeader>
            <ButtonPrimary
              disabled={!isAddress(account ?? '')}
              padding="16px 16px"
              width="100%"
              $borderRadius="12px"
              mt="1rem"
              onClick={onDeposit}
            >
              <Trans>Mint {depositAmount || '0'} X7D</Trans>
            </ButtonPrimary>
          </AutoColumn>
        </ContentWrapper>
      )}
      {(attempting || claimConfirmed) && (
        <ConfirmOrLoadingWrapper activeBG={true}>
          <CardNoise />
          {/* <CardBGImageSmaller desaturate /> */}
          <RowBetween>
            <div />
            <CloseIcon onClick={toggleClaimModal} style={{ zIndex: 99 }} stroke="black" />
          </RowBetween>
          <ConfirmedIcon>
            {!claimConfirmed ? (
              <CustomLightSpinner src={Circle} alt="loader" size="90px" />
            ) : (
              <UniTokenAnimated width="72px" src={tokenLogo} alt="UNI" />
            )}
          </ConfirmedIcon>
          <AutoColumn gap="100px" justify="center">
            <AutoColumn gap="12px" justify="center">
              <ThemedText.DeprecatedLargeHeader fontWeight={600} color="black">
                {claimConfirmed ? <Trans>Minted!</Trans> : <Trans>Minting</Trans>}
              </ThemedText.DeprecatedLargeHeader>
              {!claimConfirmed && (
                <Text fontSize={36} color="#000000" fontWeight={800}>
                  <Trans>
                    {' '}
                    {depositAmount} {X7D[chainId || 1].symbol}{' '}
                  </Trans>
                </Text>
              )}
            </AutoColumn>
            {claimConfirmed && (
              <>
                <ThemedText.DeprecatedSubHeader fontWeight={500} color="black">
                  <Trans>
                    <span role="img" aria-label="party-hat">
                      🎉{' '}
                    </span>
                    Welcome to the X7 Finance Team :){' '}
                    <span role="img" aria-label="party-hat">
                      🎉
                    </span>
                  </Trans>
                </ThemedText.DeprecatedSubHeader>
              </>
            )}
            {attempting && !claimSubmitted && (
              <ThemedText.DeprecatedSubHeader color="white">
                <Trans>Confirm this transaction in your wallet</Trans>
              </ThemedText.DeprecatedSubHeader>
            )}
          </AutoColumn>
        </ConfirmOrLoadingWrapper>
      )}
    </Modal>
  )
}
