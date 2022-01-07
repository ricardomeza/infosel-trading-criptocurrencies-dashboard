import { IEmojis, IReducersInitialState, TApiBaseUrl } from './interface'

export const apiBaseUrl: TApiBaseUrl = {
  coincap: 'https://api.coincap.io/v2/'
}

export const apiHeaderContentType = {
  json: { 'Content-Type': 'application/json' }
}

export const emojis: IEmojis = {
  events: ['💥'],
  fruits: ['🍅', '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🥥', '🥭']
}

export const reducersInitialState: IReducersInitialState = { data: [], error: {}, isLoading: false }

export const sequenceSteps = ['RESET', 'FAILED', 'SUCCESSFUL', 'REQUESTED']

export const STEP_FAILED_INDEX = 1
