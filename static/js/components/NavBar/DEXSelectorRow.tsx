import { Implementation } from '@uniswap/router-sdk'
import { getDEXInfo } from 'constants/dexInfo'
import { useCurrentDEX } from 'state/dex/hooks'
import styled, { useTheme } from 'styled-components/macro'

const LOGO_SIZE = 20

const Container = styled.button`
  display: grid;
  background: none;
  grid-template-columns: min-content 1fr min-content;
  align-items: center;
  text-align: left;
  line-height: 24px;
  border: none;
  justify-content: space-between;
  padding: 10px 8px;
  cursor: pointer;
  border-radius: 12px;
  color: ${({ theme }) => theme.textPrimary};
  width: 240px;
  transition: ${({ theme }) => theme.transition.duration.medium} ${({ theme }) => theme.transition.timing.ease}
    background-color;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    width: 100%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.backgroundOutline};
  }
`

const Label = styled.div`
  grid-column: 2;
  grid-row: 1;
  font-size: 16px;
`

const Status = styled.div`
  grid-column: 3;
  grid-row: 1;
  display: flex;
  align-items: center;
  width: ${LOGO_SIZE}px;
`

const ApproveText = styled.div`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 12px;
  grid-column: 2;
  grid-row: 2;
`

const Logo = styled.img`
  height: ${LOGO_SIZE}px;
  width: ${LOGO_SIZE}px;
  margin-right: 12px;
`

export default function DEXSelectorRow({
  targetDEX,
  onSelectChain,
  isPending,
}: {
  targetDEX: Implementation
  onSelectChain: (implementation: Implementation) => void
  isPending: boolean
}) {
  const { label, logoUrl } = getDEXInfo(targetDEX)
  const currentDEX = useCurrentDEX()

  const theme = useTheme()

  return (
    <Container onClick={() => onSelectChain(targetDEX)}>
      <Logo src={logoUrl} alt={label} />
      <Label>{label}</Label>
      {currentDEX.currentDEX === targetDEX && <ApproveText>Selected DEX</ApproveText>}
    </Container>
  )
}
