import { createInitialStates, createResourceNames, createSequenceTypes, getPayloadData } from '../helpers'
import { reducersInitialState } from '../constants'

const resources = ['assetsGet', 'assetsHistoryGet']
const resourceNames = createResourceNames(resources)
const step = createSequenceTypes(['ASSETS_GET', 'ASSETS_HISTORY_GET'])
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
  },

  // ASSETS HISTORY GET ................................................................................................
  [step.ASSETS_HISTORY_GET_REQUESTED]: (state: any) => ({
    ...state,
    [resourceNames.assetsHistoryGet]: { data: [], error: {}, isLoading: true }
  }),
  [step.ASSETS_HISTORY_GET_SUCCESSFUL]: (state: any, payload: any) => ({
    ...state,
    [resourceNames.assetsHistoryGet]: { data: getPayloadData(payload), error: {}, isLoading: false }
  }),
  [step.ASSETS_HISTORY_GET_FAILED]: (state: any, payload: any) => ({
    ...state,
    [resourceNames.assetsHistoryGet]: { error: payload, data: [], isLoading: false }
  }),
  [step.ASSETS_HISTORY_GET_RESET]: (state: any) => {
    const RESOURCE_NAME = resourceNames.assetsHistoryGet
    return { ...state, [RESOURCE_NAME]: { ...initialState[RESOURCE_NAME] } }
  }
}

export default reducers
