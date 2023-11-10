import { createSlice } from '@reduxjs/toolkit'
import { ConnectionType } from 'connection'

export interface ConnectionState {
  errorByConnectionType: Record<ConnectionType, string | undefined>
}

export const initialState: ConnectionState = {
  errorByConnectionType: {
    [ConnectionType.INJECTED]: undefined,
    [ConnectionType.WALLET_CONNECT_V2]: undefined,
    [ConnectionType.COINBASE_WALLET]: undefined,
    [ConnectionType.NETWORK]: undefined,
    [ConnectionType.GNOSIS_SAFE]: undefined,
  },
}

const dexSlice = createSlice({
  name: 'dex',
  initialState,
  reducers: {
    updateDEXError(
      state,
      { payload: { connectionType, error } }: { payload: { connectionType: ConnectionType; error: string | undefined } }
    ) {
      state.errorByConnectionType[connectionType] = error
    },
  },
})

export const { updateDEXError } = dexSlice.actions
export default dexSlice.reducer
