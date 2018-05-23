import axios from "axios"

export const WEATHER_SUCCESS = "WEATHER_SUCCESS"
export const weatherSuccess = payload => ({
  type: WEATHER_SUCCESS,
  payload
})

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
  debugger
  const LOCATION_URL = `https://developer.accuweather.com/locations/v1/cities/geoposition/search?q=${lat},${lng}`
  axios(`${LOCATION_URL}`, {
    method: "GET",
    // body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText)
      }
      return res.json()
    })
    .then(data => {
      debugger
      dispatch(fetchWeather(data))
    })
    .catch(err => Promise.reject(err))
}

export const fetchWeather = locationKey => (dispatch, getStore) => {
  const WEATHER_URL = `https://developer.accuweather.com/accuweather-forecast-api/apis/${locationKey}`

  axios(`${WEATHER_URL}`, {
    method: "GET",
    // body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText)
      }
      return res.json()
    })
    .then(data => {
      dispatch(weatherSuccess(data))
    })
    .catch(err => Promise.reject(err))
}
