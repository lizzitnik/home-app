import axios from 'axios'
import {API_BASE_URL} from '../config'

export const WEATHER_SUCCESS = "WEATHER_SUCCESS"
export const weatherSuccess = payload => {
  const forecasts = payload.DailyForecasts
  return {
    type: WEATHER_SUCCESS,
    forecasts
  }
}

export const WEATHER_FAILURE = 'WEATHER_FAILURE';
export const weatherFailure = payload => ({
  type: WEATHER_FAILURE,
  payload
})

export const getLatLng = () => (dispatch, getStore) => {
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords
    dispatch(getLocation(latitude, longitude))
  })
}

export const getLocation = (lat, lng) => (dispatch, getStore) => {
  const LOCATION_URL = `${API_BASE_URL}/location/${lat}/${lng}`
  axios(`${LOCATION_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(data => {
      dispatch(weatherSuccess(data.data))
    })
    .catch(err => Promise.reject(err))
}
