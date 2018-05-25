import {
  WEATHER_SUCCESS,
  weatherSuccess,
  WEATHER_FAILURE,
  weatherFailure
} from './weather-actions'

describe('weatherSuccess', () => {
  it('Should return the action', () => {
    const forcasts = ['1', '2'];
    const action = weatherSuccess(forcasts);
    expect(action.type).toEqual(WEATHER_SUCCESS);
    expect(action.forcasts).toEqual(forcasts);
  })
})

describe('weatherFailure', () => {
  it('Should return the action', () => {
    const payload = [];
    const action = weatherFailure(payload);
    expect(action.type).toEqual(WEATHER_FAILURE);
    expect(action.payload).toEqual(payload);
  })
})
