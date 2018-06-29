import {
  LOAD_QUOTE,
  QUOTE_SUCCESS,
  QUOTE_FAILURE
} from "../actions/quote-actions"

const initialState = {
  quote: '',
  loading: false,
  error: null
}

export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_QUOTE:
      return {
        ...state,
        loading: true,
        error: null
      }
    case QUOTE_SUCCESS:
      return {
        quote: action.payload,
        loading: false
      }

    case QUOTE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    default:
      return state
  }
}
