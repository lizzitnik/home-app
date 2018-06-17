import {
  FETCH_TODOS_SUCCESS
} from '../actions/todo-actions'

const initialState = {
  todos: []
}

export const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TODOS_SUCCESS:
      return {
        todos: action.todos
      }

    case ADD_TODO_SUCCESS:
    return {
      action.todo,
      ...state.todos
    }

    default:
      return state
  }
}
