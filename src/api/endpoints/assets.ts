import httpConnections from '../httpConnections'
import { apiHeaderContentType } from '../constants'
import { IEndpointsMiscParams } from '../interface'

// ASSETS GET ..........................................................................................................
export const assetsGet = () =>
  httpConnections.coincap.get('assets', {
    headers: {
      ...apiHeaderContentType.json
    }
  })

// ASSETS HISTORY BY ID AND INTERVAL GET .............................................................................
export const assetsHistoryGet = ({ assetId, interval }: IEndpointsMiscParams) =>
  httpConnections.coincap.get(`assets/${assetId}/history?interval=${interval}`, {
    headers: {
      ...apiHeaderContentType.json
    }
  })
