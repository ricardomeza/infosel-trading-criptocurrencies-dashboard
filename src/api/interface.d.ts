export interface IEmojis {
  [key: string]: string[]
}

export interface IHttpConnections {
  [key: string]: any
}

export interface IHttpVerbsData {
  granularity?: string
}

export interface IErrorData {
  message: string
  response: any
}

export interface IReducersInitialState {
  data: never[]
  error: {}
  isLoading: boolean
}

export interface IReducerAction {
  data: any
  type: string
}

export interface IReducerItem {
  [type: string]: IReducerItemContent
}

export interface IReducerItemContent {
  data: Array<any>
  error: Object
  isLoading: boolean
}

export interface IReducersAPICombined {
  [type: string]: (state: any, payload?: any) => IReducerItem
}

export type TApiBaseUrl = Record<TApiVendors, string>
export type TApiVendors = 'coincap'
