import {
  LOAD_WEATHER,
  WEATHER_SUCCESS,
  WEATHER_FAILURE
} from '../actions/weather-actions'

const initialState = {
  forecasts: [],
  loading: false,
  error: null
}

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_WEATHER:
      return {
        ...state,
        loading: true,
        error: null
      }
    case WEATHER_SUCCESS:
      return {
        ...state,
        forecasts: action.forecasts,
        loading: false
      }
    case WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    default:
      return state
  }
}
