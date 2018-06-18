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

    // case FETCH_TODOS_ERROR:
    //   return {
    //     ...state,
    //     todos: [],
    //     loading: false,
    //     error: action.error
    //   }

    case ADD_TODO_SUCCESS:
    debugger
      return {
        todos: [
        {
          value: action.todo,
          completed: false
        },
         ...state.todos
       ]
      }

    case TOGGLE_TODO_SUCCESS:
      let todos = state.todos
      todos.forEach(todo => {
        if (todo => todo.id === action.todo.id) {
          todo.completed = !todo.completed
        }
      })

    case REMOVE_TODO_SUCCESS:
        let remainingTodos = state.todos.filter((todo, index) => index !== action.index)
        return {
          ...state,
          todos: remainingTodos
        }

    default:
      return state
  }
}
