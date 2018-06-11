import { createStore, applyMiddleware, combineReducers, compose } from "redux"
import {reducer as formReducer} from 'redux-form';
import { todoReducer } from "./reducers/todo-reducers"
import thunk from "redux-thunk"
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth-reducers';
import {quoteReducer} from './reducers/quote-reducers'
import {weatherReducer} from './reducers/weather-reducers'
import protectedDataReducer from './reducers/protected-data';
import {setAuthToken, refreshAuthToken} from './actions/auth-actions';

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const reducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  protected: protectedDataReducer,
  todos: todoReducer,
  quote: quoteReducer,
  weather: weatherReducer
})

const store = createStore(reducer, enhancer)

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store
