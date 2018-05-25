import axios from 'axios'

export const WEATHER_SUCCESS = 'WEATHER_SUCCESS';
export const weatherSuccess = payload => ({
  const forcasts = payload.DailyForecasts
  type: WEATHER_SUCCESS,
  forcasts
})

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
  const LOCATION_URL = `http://localhost:3001/location/${lat}/${lng}`
  axios(`${LOCATION_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => {
    return res.json(data.data)
  })
  .then(data => {
    dispatch(weatherSuccess(data))
  })
  .catch(err => Promise.reject(err))
}
