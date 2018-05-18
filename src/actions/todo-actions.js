//let nextTodoId = 0;
export const ADD_TODO = 'ADD_TODO'
export const addTodo = (value) => ({
  type: ADD_TODO,
  // id: nextTodoId++,
  value
})

// export const TOGGLE_TODO = 'TOGGLE_TODO'
// export const toggleTodo = (id) => ({
//   type: TOGGLE_TODO,
//   id
// })
