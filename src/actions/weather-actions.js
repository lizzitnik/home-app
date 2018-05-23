import axios from 'axios'

export const WEATHER_SUCCESS =
'WEATHER_SUCCESS';
export const weatherSuccess = payload => ({
  type: WEATHER_SUCCESS,
  payload
})

export const WEATHER_FAILURE =
'WEATHER_FAILURE';
export const weatherFailure = payload => ({
  type: WEATHER_FAILURE,
  payload
})

export const getLatLng = () => (dispatch, getStore) => {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords
    dispatch(getLocation(latitude, longitude))
  })
}

export const getLocation = (lat, lng) => (dispatch, getStore) => {
  const LOCATION_URL =
    `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?q=${lat},${lng}`
  axios(`${LOCATION_URL}`, {
    method: 'GET',
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
    dispatch(fetchWeather(data))
  })
  .catch(err => Promise.reject(err))
}

const API_BASE_URL = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}'
export const fetchWeather = locationKey => (dispatch, getStore) => {
  const WEATHER_URL = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}'
  axios(`${WEATHER_URL}`, {
    method: "GET",
    //body:JSON.stringify(input),
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
