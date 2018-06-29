import axios from "axios"
import { API_BASE_URL } from "../config"

const TODO_URL = `${API_BASE_URL}/todos`

export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS"
export const fetchTodosSuccess = todos => ({
  type: FETCH_TODOS_SUCCESS,
  todos
})

export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS"
export const addTodoSuccess = (value) => ({
  type: ADD_TODO_SUCCESS,
  todo: value
})

export const TOGGLE_TODO_SUCCESS = "TOGGLE_TODO_SUCCESS"
export const toggleTodoSuccess = todo => ({
  type: TOGGLE_TODO_SUCCESS,
  todo
})

export const REMOVE_TODO_SUCCESS = "REMOVE_TODO_SUCCESS"
export const removeTodoSuccess = todo => {
  return {
    type: REMOVE_TODO_SUCCESS,
    todo: todo
  }
}

export const fetchTodos = () => (dispatch, getStore) => {
  const { authToken } = getStore().auth
  fetch(`${TODO_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
  })
    .then(res => res.json())
    .then(todos => {
      dispatch(fetchTodosSuccess(todos))
    })
    .catch(error => {
      console.error.bind(error)
    })
}

export const addTodo = value => (dispatch, getStore) => {
  const { authToken } = getStore().auth
  const currentUser = getStore().auth.currentUser

  fetch(`${TODO_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(value)
  })
    .then(response => {
      return response.json()
    })
    .then(value => {
      dispatch(addTodoSuccess(value))
      currentUser.todos.push(value.id)
    })
    .catch(error => console.error.bind(error))
}

export const toggleTodo = id => (dispatch, getStore) => {
  const TODO_URL = `${API_BASE_URL}/todos/${id}`
  const { authToken } = getStore().auth
  axios(TODO_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(data => {
      dispatch(toggleTodoSuccess(data))
    })
    .catch(error => console.log(error))
}

export const removeTodo = id => (dispatch, getStore) => {
  const TODO_URL = `${API_BASE_URL}/todos/${id}`
  const { authToken } = getStore().auth
  axios(TODO_URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(data => {
      dispatch(removeTodoSuccess(data.data))
    })
    .catch(error => console.log(error))
}
