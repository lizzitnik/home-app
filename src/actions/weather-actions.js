import axios from 'axios'
import {API_BASE_URL} from '../config'

export const WEATHER_SUCCESS = "WEATHER_SUCCESS"
export const weatherSuccess = payload => {
  const forecasts = payload.list
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
      dispatch(weatherSuccess(data))
    })
    .catch(error => {
      dispatch(weatherFailure(error))
    })
}
