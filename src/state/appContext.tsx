import reducerMisc from './reducers/reducerMisc'
import reducersAPI from '../api/reducersApi'
import { appLocalStorage } from '../utils/localStorage'
import { createContext, useEffect, useReducer, useState } from 'react'
import { IAppContextProvider, IContext } from './interface'
import { INITIAL_LOCAL_STORAGE_APP_STATE, LOCAL_STORAGE_APP_CONTEXT_DATA_VAR_NAME } from '../utils/constants'
import { initialStatesAPICombined } from '../api/reducersAndInitialStates'
import { websocketConnections } from '../utils/websocket'

const AppContext = createContext({} as IContext)

const AppContextProvider = ({ children }: IAppContextProvider) => {
  const LOCAL_STORAGE_APP_STATE = appLocalStorage.getValue(LOCAL_STORAGE_APP_CONTEXT_DATA_VAR_NAME)

  // API ...............................................................................................................
  const [appApiState, dispatch] = useReducer(reducersAPI, initialStatesAPICombined)
  const API = { appApiState, dispatch }

  // APP STATE CONTEXT .................................................................................................
  const [appState, setAppState] = useReducer(reducerMisc, LOCAL_STORAGE_APP_STATE || INITIAL_LOCAL_STORAGE_APP_STATE)
  const changeOrAddValueToAppState = (value: any) => setAppState({ ...appState, ...value })
  useEffect(() => {
    appLocalStorage.setValue(LOCAL_STORAGE_APP_CONTEXT_DATA_VAR_NAME, appState)
  }, [appState])
  const APP_STATE_CONTEXT = { appState, changeOrAddValueToAppState }

  // WEBSOCKETS
  let websocketConnection: null | WebSocket
  const [cryptoPrices, setCryptoPrices] = useState([])
  useEffect(() => {
    if (!websocketConnection) {
      websocketConnection = new WebSocket(websocketConnections.coincap)
      websocketConnection.onmessage = (event) => setCryptoPrices(JSON.parse(event.data))
    }
    return () => websocketConnection?.close()
  }, [])
  const CRYPTO = { cryptoPrices }

  // ...................................................................................................................
  return (
    <AppContext.Provider
      value={{
        ...API,
        ...APP_STATE_CONTEXT,
        ...CRYPTO
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }
