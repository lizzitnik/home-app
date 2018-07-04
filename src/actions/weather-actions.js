import {API_BASE_URL} from '../config'

export const LOAD_WEATHER = "LOAD_WEATHER"
export const loadWeather = () => {
  return {
    type: LOAD_WEATHER
  }
}
export const WEATHER_SUCCESS = "WEATHER_SUCCESS"
export const weatherSuccess = forecasts => {
  return {
    type: WEATHER_SUCCESS,
    forecasts
  }
}

export const WEATHER_FAILURE = 'WEATHER_FAILURE';
export const weatherFailure = error => ({
  type: WEATHER_FAILURE,
  error
})

export const getLatLng = () => (dispatch, getStore) => {
  dispatch(loadWeather())
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords
    dispatch(getLocation(latitude, longitude))
  })
}

export const getLocation = (lat, lng) => (dispatch, getStore) => {
  const LOCATION_URL = `${API_BASE_URL}/location/${lat}/${lng}`
  fetch(`${LOCATION_URL}`)
    .then(res => res.json())
    .then(data => {
      dispatch(weatherSuccess(data.response[0].periods))
    })
    .catch(error => {
      dispatch(weatherFailure(error))
    })
}
