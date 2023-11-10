import { Implementation } from '@uniswap/router-sdk'
import create from 'zustand'
import { devtools } from 'zustand/middleware'

interface EnabledImplementationsState {
  allowedImplementations: Implementation[]
  preferredImplementation: Implementation
  setEnabledImplementations: (allowed: Implementation[], preferred: Implementation) => void
}

export const useEnabledImplementations = create<EnabledImplementationsState>()(
  devtools(
    (set) => ({
      // TODO(x7): This is chain dependent
      allowedImplementations: [Implementation.XCHANGE, Implementation.UNISWAP],
      // TODO(x7): This is not currently being used, really. But it should exist
      preferredImplementation: Implementation.XCHANGE,
      setEnabledImplementations: (allowed: Implementation[], preferred: Implementation) => {
        set(({ allowedImplementations, preferredImplementation }) => ({
          allowedImplementations: allowed,
          preferredImplementation: preferred,
        }))
      },
    }),
    { name: 'useEnabledImplementations' }
  )
)
