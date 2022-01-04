export interface IAppContextProvider {
  children: any
}

export interface IContext {
  // API
  appApiState: any
  dispatch: any

  // App
  appState: {
    demoValue?: string
  }
}
