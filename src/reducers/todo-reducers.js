import {
  FETCH_TODOS_SUCCESS,
  ADD_TODO_SUCCESS,
  TOGGLE_TODO_SUCCESS,
  REMOVE_TODO_SUCCESS
} from "../actions/todo-actions"

const initialState = {
  todos: [],
  loading: false,
  error: null
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.todos,
        loading: false
      }

    case ADD_TODO_SUCCESS:
    debugger
      return {
        ...state,
        todos: [action.todo, ...state.todos]
      }

    case TOGGLE_TODO_SUCCESS:
      let todos = state.todos
      return {
        ...state,
        todos: todos.map(todo => {
          if (todo.id === action.todo.data.id) {
            todo.completed = !todo.completed
          }
          return todo
        })
      }

    case REMOVE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo, index) => todo.id !== action.todo.id)
      }

    default:
      return state
  }
}
