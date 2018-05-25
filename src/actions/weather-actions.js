import axios from "axios"

export const WEATHER_SUCCESS = "WEATHER_SUCCESS"
export const weatherSuccess = payload => {
  const forecasts = payload.DailyForecasts
  return {
    type: WEATHER_SUCCESS,
    forecasts
  }
}

export const WEATHER_FAILURE = "WEATHER_FAILURE"
export const weatherfailure = payload => ({
  type: WEATHER_FAILURE,
  payload
})

// LAq9F4q81rIdNHqJragJjf1GJQho8GlI
// 45.5342552
// -122.63183040000001

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
    .then(data => {
      dispatch(weatherSuccess(data.data))
    })
    .catch(err => Promise.reject(err))
}
