import { apiBaseUrl } from './constants'
import { createApiHttpConnection } from './helpers'
import { IHttpConnections } from './interface'

const httpConnections: IHttpConnections = {
  coincap: createApiHttpConnection(apiBaseUrl.coincap)
}

export default httpConnections
