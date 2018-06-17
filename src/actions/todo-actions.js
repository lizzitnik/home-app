import axios from 'axios'
import {API_BASE_URL} from '../config';

export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
export const fetchTodosSuccess = todos => ({
  type: FETCH_TODOS_SUCCESS,
  todos
})

export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS"
export const addTodoSuccess = value => ({
  type: ADD_TODO_SUCCESS,
  todo: value
})

export const fetchTodos = () => dispatch => {
  fetch(`${API_BASE_URL}/todos`)
    .then(res => res.json())
    .then(todos => {
      dispatch(fetchTodosSuccess(todos))
    })
    .catch(err => console.error.bind(err))
}

export const addTodo = (value) => dispatch => {
  const authToken =
  fetch(`${API_BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${authToken}`
    },
    body: JSON.stringify(value)
  })
    .then(res => res.json())
    .then(value => {
      dispatch(addTodoSuccess(value))
    })
    .catch(err => console.error.bind(err))
}
