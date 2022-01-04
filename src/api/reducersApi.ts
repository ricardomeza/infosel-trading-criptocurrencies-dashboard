import { IReducerAction } from './interface'
import { reducerAPILogger } from './helpers'
import { reducersAPICombined } from './reducersAndInitialStates'

const reducersAPI = (state: any, typeAndPayload: IReducerAction) =>
  reducerAPILogger(typeAndPayload, reducersAPICombined, state)

export default reducersAPI
