import httpConnections from '../httpConnections'
import { apiHeaderContentType } from '../constants'

// ASSETS GET ..........................................................................................................
export const assetsGet = () =>
  httpConnections.coincap.get('assets', {
    headers: {
      ...apiHeaderContentType.json
    }
  })
