import { appLocalStorage } from '../../utils/localStorage'
import { INITIAL_LOCAL_STORAGE_APP_STATE, LOCAL_STORAGE_APP_CONTEXT_DATA_VAR_NAME } from '../../utils/constants'
import { isNull } from 'lodash'

const reducerMisc = (data: {}, newData: {}) => {
  if (isNull(newData)) {
    appLocalStorage.remove(LOCAL_STORAGE_APP_CONTEXT_DATA_VAR_NAME)
    return { ...INITIAL_LOCAL_STORAGE_APP_STATE }
  }
  return { ...data, ...newData }
}

export default reducerMisc
