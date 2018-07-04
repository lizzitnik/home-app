import {quoteReducer} from './quote-reducers';
import {loadQuote, quoteSuccess, quoteFailure} from '../actions/quote-actions';

describe('quoteReducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
        const state = quoteReducer(undefined, {type: '__UNKNOWN'});

        expect(state.quote).toEqual('');
        expect(state.loading).toEqual(false);
        expect(state.error).toEqual(null);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = quoteReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('loadQuote', () => {
        it('Should load a quote', () => {
            let state = {
                quote: '',
                loading: true,
                error: null
            };
            state = quoteReducer(state, loadQuote());
            expect(state.quote).toEqual('');
            expect(state.loading).toEqual(true);
            expect(state.error).toEqual(null);
        });
    });

    describe('quoteSuccess', () => {
        it('Should render a quote', () => {
            let state = {
                quote: '',
                loading: false,
                error: null
            };
            const quote = 'This is a quote'
            state = quoteReducer(state, quoteSuccess(quote));
            expect(state.quote).toEqual(quote);
            expect(state.loading).toEqual(false);
        });

        describe('quoteFailure', () => {
            it('Should render an error', () => {
                let state = {
                    quote: '',
                    loading: false,
                    error: null
                };
                const error = 'This is an error'
                state = quoteReducer(state, quoteFailure(error));
                expect(state.quote).toEqual('');
                expect(state.loading).toEqual(false);
                expect(state.error).toEqual(error);
            });
        });
    });
})
