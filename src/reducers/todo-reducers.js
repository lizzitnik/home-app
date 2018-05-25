import * as actions from "../actions/todo-actions"

const initialState = {
  todos: [
    {
      value: "Clean the gutters",
      completed: false
    },
    {
      value: "Water the plants",
      completed: false
    },
    {
      value: "Feed the dog",
      completed: false
    }
  ]
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          {
            value: action.value,
            completed: false
          },
          ...state.todos
        ]
      }

    case "TOGGLE_TODO":
      let todos = state.todos
      todos[action.index].completed = !todos[action.index].completed
      return {
        todos
      }

    case "REMOVE_TODO":
      let remainingTodos = state.todos.filter(
        (todo, index) => index !== action.index
      )
      return {
        ...state,
        todos: remainingTodos
      }

    case "WEATHER_SUCCESS":
      return {
        ...state,
        forcasts: action.forecasts
      }

    default:
      return state
  }
}
