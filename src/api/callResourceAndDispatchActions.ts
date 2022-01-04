import { getSequenceStepsForReducer } from './helpers'

const callResourceAndDispatchActions = (resource: any, options: any) => {
  const { dispatch, resourceName, ...rest } = options
  const { FAILED, REQUESTED, SUCCESSFUL } = getSequenceStepsForReducer(resourceName)
  dispatch({ type: REQUESTED })
  resource({ ...rest })
    .then((data: any) => dispatch({ data, type: SUCCESSFUL }))
    .catch((error: any) => dispatch({ data: error, type: FAILED }))
}

export default callResourceAndDispatchActions
