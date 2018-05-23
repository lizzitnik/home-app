import { createStore, applyMiddleware, compose } from "redux"
import { todoReducer } from "./reducers/todo-reducers"
import thunk from "redux-thunk"

const composeEnhancers =
  typeof window === "object" && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE
  ? window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({})
  : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

export default initialState => {
  return createStore(todoReducer, initialState, enhancer)
}
