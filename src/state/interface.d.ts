export interface IAppContextProvider {
  children: any
}

export interface IContext {
  // API ...............................................................................................................
  appApiState: any
  dispatch: any

  // APP ...............................................................................................................
  appState: {
    appMainTitle?: string
    cryptoCoinsLogos?: Record<string, string>
  }
  changeOrAddValueToAppState: (value: any) => void

  // CRYPTO ............................................................................................................
  cryptoPrices: any
}
