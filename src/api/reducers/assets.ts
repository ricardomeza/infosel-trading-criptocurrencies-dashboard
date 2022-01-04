import { createInitialStates, createResourceNames, createSequenceTypes, getPayloadData } from '../helpers'
import { reducersInitialState } from '../constants'

const resources = ['assetsGet']
const resourceNames = createResourceNames(resources)
const step = createSequenceTypes(['ASSETS_GET'])
export const initialState = {
  ...createInitialStates(resources, reducersInitialState)
}

const reducers = {
  // ASSETS GET ........................................................................................................
  [step.ASSETS_GET_REQUESTED]: (state: any) => ({
    ...state,
    [resourceNames.assetsGet]: { data: [], error: {}, isLoading: true }
  }),
  [step.ASSETS_GET_SUCCESSFUL]: (state: any, payload: any) => ({
    ...state,
    [resourceNames.assetsGet]: { data: getPayloadData(payload), error: {}, isLoading: false }
  }),
  [step.ASSETS_GET_FAILED]: (state: any, payload: any) => ({
    ...state,
    [resourceNames.assetsGet]: { error: payload, data: [], isLoading: false }
  }),
  [step.ASSETS_GET_RESET]: (state: any) => {
    const RESOURCE_NAME = resourceNames.assetsGet
    return { ...state, [RESOURCE_NAME]: { ...initialState[RESOURCE_NAME] } }
  }
}

export default reducers
