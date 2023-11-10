import { Implementation } from '@uniswap/router-sdk'
import create from 'zustand'
import { devtools } from 'zustand/middleware'

interface CurrentDEXState {
  currentImplementation: Implementation
  currentDEX: Implementation
  setCurrentDEX: (implementation: Implementation) => void
}

export const useCurrentDEX = create<CurrentDEXState>()(
  devtools(
    (set) => ({
      currentDEX: Implementation.XCHANGE,
      currentImplementation: Implementation.XCHANGE,
      setCurrentDEX: (implementation) => {
        set(({ currentDEX, currentImplementation }) => ({
          currentDEX: implementation,
          currentImplementation: implementation,
        }))
      },
    }),
    { name: 'useCurrentDEX' }
  )
)
