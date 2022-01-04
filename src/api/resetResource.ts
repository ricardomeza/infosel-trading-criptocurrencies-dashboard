import { findKey } from 'lodash'
import { getApiCallSequenceSteps as types } from './helpers'
import { sequenceSteps } from './constants'

const resetResource = (options: any) => {
  const { dispatch, resourceName } = options
  const TYPES = types(resourceName)
  const RESET = findKey(TYPES, (i: string) => i.includes(sequenceSteps[0])) || ''
  dispatch({ type: TYPES[RESET] })
}

export default resetResource
