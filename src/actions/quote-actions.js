import axios from 'axios'
import {API_BASE_URL} from '../config'

export const LOAD_QUOTE = 'LOAD_QUOTE'
export const loadQuote = () => ({
  type: LOAD_QUOTE
})

export const QUOTE_SUCCESS = "QUOTE_SUCCESS"
export const quoteSuccess = (quote) => ({
  type: QUOTE_SUCCESS,
  payload: quote
})

export const QUOTE_FAILURE = 'QUOTE_FAILURE';
export const quoteFailure = error => ({
  type: QUOTE_FAILURE,
  error
})

export const getQuote = () => (dispatch, getStore) => {
  dispatch(loadQuote())
  const QUOTE_URL = `${API_BASE_URL}/quote`
  axios(`${QUOTE_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(data => {
      dispatch(quoteSuccess(data.data))
    })
    .catch(error => {
      dispatch(quoteFailure(error))
    })
}
