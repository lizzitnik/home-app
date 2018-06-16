import {
  WEATHER_SUCCESS,
  WEATHER_FAILURE
} from '../actions/weather-actions'

const initialState = {}

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_SUCCESS:
      return {
        ...state,
        forecasts: action.forecasts
      }
    case WEATHER_FAILURE:
      return {
        error: action.error
      }

    default:
      return state
  }
}
