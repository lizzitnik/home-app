import {
  LOAD_QUOTE,
  loadQuote,
  QUOTE_SUCCESS,
  quoteSuccess,
  QUOTE_FAILURE,
  quoteFailure
} from './quote-actions'

describe('loadQuote', () => {
  it('Should return the action', () => {
    const action = loadQuote();
    expect(action.type).toEqual(LOAD_QUOTE);
  })
})

describe('quoteSuccess', () => {
  it('Should return the action', () => {
    const quote = {};
    const action = quoteSuccess(quote);
    expect(action.type).toEqual(QUOTE_SUCCESS);
    expect(action.payload).toEqual(quote);
  })
})

describe('quoteFailure', () => {
  it('Should return the action', () => {
    const error = '';
    const action = quoteFailure(error);
    expect(action.type).toEqual(QUOTE_FAILURE);
    expect(action.error).toEqual(error);
  })
})
