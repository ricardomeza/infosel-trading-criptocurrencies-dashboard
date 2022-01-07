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
    assetsFavs?: string
  }
  changeOrAddValueToAppState: (value: any) => void

  // CRYPTO ............................................................................................................
  cryptoPrices: any
  closeWebsocketConnection: () => void | undefined
  initializeWebsocketConnection: (assetsFilter?: string) => void
}
