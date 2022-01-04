import axios, { AxiosInstance } from 'axios'
import { emojis, httpResponseCode, sequenceSteps, STEP_FAILED_INDEX } from './constants'
import { findKey } from 'lodash'
import { getRandomInt } from '../utils/misc'
import { IReducerAction, IReducersAPICombined } from './interface'

export const createApiHttpConnection = (baseURL: any): AxiosInstance => axios.create({ baseURL })

export const createInitialStates = (names: Array<any>, initialState: Object) =>
  names.reduce((object: any, item: any) => {
    object[item] = { ...initialState }
    return object
  }, {})

export const createResourceNames = (names: Array<any>) =>
  names.reduce((object: any, item: any) => {
    object[item] = item
    return object
  }, {})

export const createSequenceTypes = (names: Array<any>) =>
  names.reduce((object: any, item: any) => {
    object = { ...object, ...getApiCallSequenceSteps(item) }
    return object
  }, {})

const findSequenceTypeStep = (types: string, step: string) => findKey(types, (i: any) => i.includes(step)) || ''

export const getApiCallSequenceSteps = (actionName: string) =>
  sequenceSteps.reduce((object: any, item: any) => {
    const STEP = `${actionName}_${item}`
    object[STEP] = STEP
    return object
  }, {})

export const getPayloadData = (payload: any) => {
  const WAS_SUCCESSFUL: boolean = Boolean(
    payload.status >= httpResponseCode[200].min && payload.status < httpResponseCode[200].max
  )
  return [
    payload.data,
    {
      response: {
        status: payload.status,
        wasSuccessful: WAS_SUCCESSFUL
      }
    }
  ]
}

export const getSequenceStepsForReducer = (resourceName: string) => {
  const TYPES = getApiCallSequenceSteps(resourceName)
  const FAILED = findSequenceTypeStep(TYPES, sequenceSteps[1])
  const REQUESTED = findSequenceTypeStep(TYPES, sequenceSteps[3])
  const SUCCESSFUL = findSequenceTypeStep(TYPES, sequenceSteps[2])
  return { FAILED, REQUESTED, SUCCESSFUL }
}

export const reducerAPILogger = (
  actionAndPayload: IReducerAction,
  reducersAPICombined: IReducersAPICombined,
  state: object
): any => {
  const { type: action, data: payload } = actionAndPayload
  const EMOJI_TITLE: string = '⚡️ '
  const HAS_PAYLOAD = Boolean(payload)
  const IS_ERROR: boolean = action.includes(sequenceSteps[STEP_FAILED_INDEX].toString())
  const NEXT_STATE: any = reducersAPICombined[action](state, payload)
  const PAYLOAD_EMOJI: string = IS_ERROR ? emojis.events[0] : emojis.fruits[getRandomInt(emojis.fruits.length)]
  const PAYLOAD_LABEL: string = HAS_PAYLOAD ? `, Payload: ${PAYLOAD_EMOJI}` : ''
  const PREV_STATE: Object = { ...state }
  const STYLES = {
    next: 'color: #00a1af',
    prev: 'color: #aeafb1',
    title: IS_ERROR ? 'color: red' : 'color: #e40595'
  }
  const TITLE_CONTENT: string = `%c${EMOJI_TITLE}${action}${PAYLOAD_LABEL}`
  const payloadData = IS_ERROR ? payload : payload
  // const payloadData = IS_ERROR ? getErrorData(payload) : payload

  if (HAS_PAYLOAD) {
    console.groupCollapsed(TITLE_CONTENT, STYLES.title, payloadData)
  } else {
    console.groupCollapsed(TITLE_CONTENT, STYLES.title)
  }
  console.log('%cPrev:', STYLES.prev, PREV_STATE)
  console.log(`%cNext:`, STYLES.next, NEXT_STATE)
  console.groupEnd()

  return NEXT_STATE
}
