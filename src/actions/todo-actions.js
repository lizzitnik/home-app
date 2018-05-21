export const ADD_TODO = 'ADD_TODO'
export const addTodo = value => ({
  type: ADD_TODO,
  value
})

export const TOGGLE_TODO = 'TOGGLE_TODO'
export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  index
})

export const REMOVE_TODO = 'REMOVE_TODO'
export const removeTodo = (index) => ({
  type: REMOVE_TODO,
  index
})
