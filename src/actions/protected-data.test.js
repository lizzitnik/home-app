import {
  fetchProtectedDataSuccess,
  FETCH_PROTECTED_DATA_SUCCESS,
  fetchProtectedDataError,
  FETCH_PROTECTED_DATA_ERROR,
} from './protected-data'

describe('fetchProtectedDataSuccess', () => {
  it('Should return the action', () => {
    const data = {};
    const action = fetchProtectedDataSuccess(data);
    expect(action.type).toEqual(FETCH_PROTECTED_DATA_SUCCESS);
    expect(action.data).toEqual(data)
  })
})

describe('fetchProtectedDataError', () => {
  it('Should return the action', () => {
    const error = '';
    const action = fetchProtectedDataError(error);
    expect(action.type).toEqual(FETCH_PROTECTED_DATA_ERROR);
    expect(action.error).toEqual(error)
  })
})
