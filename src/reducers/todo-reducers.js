import * as actions from "../actions/todo-actions"

const initialState = {
  todos: [],
  loading: false,
  error: null
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODOS_BEGIN":
      return {
        ...state,
        loading: true,
        error: null
      }

    case "FETCH_TODOS_SUCCESS":
      return {
        ...state,
        todos: action.todos,
        loading: false
      }

    case "FETCH_TODOS_ERROR":
      return {
        ...state,
        todos: [],
        loading: false,
        error: action.error
      }

    case "ADD_TODO_SUCCESS":
      return {
        todos: [
          {
            value: action.value,
            completed: false
          },
          ...state.todos
        ]
      }

    case "TOGGLE_TODO_SUCCESS":
      let todos = state.todos
      todos[action.index].completed = !todos[action.index].completed
      return {
        todos
      }

    case 'REMOVE_TODO':
        let remainingTodos = state.todos.filter((todo, index) => index !== action.index)
        return {
          ...state,
          todos: remainingTodos
        }
    case "WEATHER_SUCCESS":
      return {
        ...state,
        forecasts: action.forecasts
      }


    default:
      return state
  }
}
