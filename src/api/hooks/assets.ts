import callResourceAndDispatchActions from '../callResourceAndDispatchActions'
import resetResource from '../resetResource'
import { AppContext } from '../../state/appContext'
import { assetsGet, assetsHistoryGet } from '../endpoints/assets'
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

export const useAssetsHistoryGet = () => {
  const { dispatch } = useContext(AppContext)
  const RESOURCE_NAME = 'ASSETS_HISTORY_GET'
  const dispatchApiCallActions = (assetId: string, interval: string) =>
    callResourceAndDispatchActions(assetsHistoryGet, {
      assetId,
      dispatch,
      interval,
      resourceName: RESOURCE_NAME
    })
  const dispatchResetAction = () => resetResource({ dispatch, resourceName: RESOURCE_NAME })
  return {
    assetsHistoryGet: dispatchApiCallActions,
    assetsHistoryGetReset: dispatchResetAction
  }
}
