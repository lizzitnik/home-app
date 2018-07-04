import {weatherReducer} from './weather-reducers';
import {loadWeather, weatherSuccess, weatherFailure} from '../actions/weather-actions';

describe('weatherReducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
        const state = weatherReducer(undefined, {type: '__UNKNOWN'});

        expect(state.forecasts).toEqual([]);
        expect(state.loading).toEqual(false);
        expect(state.error).toEqual(null);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = weatherReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('loadWeather', () => {
        it('Should load the weather', () => {
            let state = {
                forecasts: [],
                loading: true,
                error: null
            };
            state = weatherReducer(state, loadWeather());
            expect(state.forecasts).toEqual([]);
            expect(state.loading).toEqual(true);
            expect(state.error).toEqual(null);
        });
    });

    describe('weatherSuccess', () => {
        it('Should render the weather', () => {
            let state = {
                forecasts: [],
                loading: false,
                error: null
            };
            const forecasts = ['forecast1', 'forecast2']
            state = weatherReducer(state, weatherSuccess(forecasts));
            expect(state.forecasts).toEqual(forecasts);
            expect(state.loading).toEqual(false);
        });

        describe('weatherFailure', () => {
            it('Should render an error', () => {
                let state = {
                    forecasts: [],
                    loading: false,
                    error: null
                };
                const error = 'This is an error'
                state = weatherReducer(state, weatherFailure(error));
                expect(state.forecasts).toEqual([]);
                expect(state.loading).toEqual(false);
                expect(state.error).toEqual(error);
            });
        });
    });
})
