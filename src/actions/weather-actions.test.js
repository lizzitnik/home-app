import {
  LOAD_WEATHER,
  loadWeather,
  WEATHER_SUCCESS,
  weatherSuccess,
  WEATHER_FAILURE,
  weatherFailure
} from './weather-actions'

describe('loadWeather', () => {
  it('Should return the action', () => {
    const action = loadWeather();
    expect(action.type).toEqual(LOAD_WEATHER);
  })
})

describe('weatherSuccess', () => {
  it('Should return the action', () => {
    const forecasts = [];
    const action = weatherSuccess(forecasts);
    expect(action.type).toEqual(WEATHER_SUCCESS);
    expect(action.forecasts).toEqual(forecasts);
  })
})

describe('weatherFailure', () => {
  it('Should return the action', () => {
    const error = '';
    const action = weatherFailure(error);
    expect(action.type).toEqual(WEATHER_FAILURE);
    expect(action.error).toEqual(error);
  })
})
