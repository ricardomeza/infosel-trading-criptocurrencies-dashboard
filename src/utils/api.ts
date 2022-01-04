import { get } from 'lodash'

export const endpointResponseWasSuccessful = (endpoint: string) =>
  get(endpoint, 'data[1].response.wasSuccessful', false)
