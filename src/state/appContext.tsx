import reducerMisc from './reducers/reducerMisc'
import { appLocalStorage } from '../utils/localStorage'
import { createContext, useEffect, useReducer } from 'react'
import { IAppContextProvider, IContext } from './interface'
import { INITIAL_LOCAL_STORAGE_APP_STATE, LOCAL_STORAGE_APP_CONTEXT_DATA_VAR_NAME } from '../utils/constants'

const AppContext = createContext({} as IContext)

const AppContextProvider = ({ children }: IAppContextProvider) => {
  const LOCAL_STORAGE_APP_STATE = appLocalStorage.getValue(LOCAL_STORAGE_APP_CONTEXT_DATA_VAR_NAME)

  // APP STATE CONTEXT .................................................................................................
  const [appState, setAppState] = useReducer(reducerMisc, LOCAL_STORAGE_APP_STATE || INITIAL_LOCAL_STORAGE_APP_STATE)
  const changeOrAddValueToAppState = (value: any) => setAppState(value)
  useEffect(() => {
    appLocalStorage.setValue(LOCAL_STORAGE_APP_CONTEXT_DATA_VAR_NAME, appState)
  }, [appState])
  const APP_STATE_CONTEXT = { appState, changeOrAddValueToAppState }

  // ...................................................................................................................
  return (
    <AppContext.Provider
      value={{
        ...APP_STATE_CONTEXT
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }
