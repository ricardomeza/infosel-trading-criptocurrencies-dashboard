import callResourceAndDispatchActions from '../callResourceAndDispatchActions'
import resetResource from '../resetResource'
import { AppContext } from '../../state/appContext'
import { assetsGet } from '../endpoints/assets'
import { useContext } from 'react'

export const useAssetsGet = () => {
  const { dispatch } = useContext(AppContext)
  const RESOURCE_NAME = 'ASSETS_GET'
  const dispatchApiCallActions = () =>
    callResourceAndDispatchActions(assetsGet, { dispatch, resourceName: RESOURCE_NAME })
  const dispatchResetAction = () => resetResource({ dispatch, resourceName: RESOURCE_NAME })
  return {
    assetsGet: dispatchApiCallActions,
    assetsGetReset: dispatchResetAction
  }
}
