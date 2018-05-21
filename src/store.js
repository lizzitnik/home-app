import {createStore} from 'redux'

import {todoReducer} from './reducers/todo-reducers'

export default createStore(todoReducer,
window.__REDUX_DEVTOOLS_EXTENSIONS__ &&
window.__REDUX_DEVTOOLS_EXTENSIONS__()
)
