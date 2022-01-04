import { initialState as initialStateAssets, default as reducersAssets } from './reducers/assets'
import { IReducerItem, IReducersAPICombined } from './interface'

export const initialStatesAPICombined: IReducerItem = {
  ...initialStateAssets
}

export const reducersAPICombined: IReducersAPICombined = {
  ...reducersAssets
}
