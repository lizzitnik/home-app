import axios from 'axios'
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

const TODO_URL = `${API_BASE_URL}/todos`

export const FETCH_TODOS_BEGIN = 'FETCH_TODOS_BEGIN'
export const fetchTodosBegin = () => ({
  type: FETCH_TODOS_BEGIN
})

export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
export const fetchTodosSuccess = todos => ({
  type: FETCH_TODOS_SUCCESS,
  todos
})

export const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR'
export const fetchTodosError = error => ({
  type: FETCH_TODOS_ERROR,
  error
})

export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const addTodoSuccess = (value) => ({
  type: ADD_TODO_SUCCESS,
  value
})

export const TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS'
export const toggleTodoSuccess = (index) => ({
  type: TOGGLE_TODO_SUCCESS,
  index
})

export const REMOVE_TODO_SUCCESS = 'REMOVE_TODO_SUCCESS'
export const removeTodoSuccess = (index) => ({
  type: REMOVE_TODO_SUCCESS,
  index
})

export const fetchTodos = () => (dispatch, getStore) => {
  dispatch(fetchTodosBegin());
  fetch(`${TODO_URL}`)
      .then(res => res.json())
      .then(todos => {
        dispatch(fetchTodosSuccess(todos))
      })
      .catch(error => {
        dispatch(fetchTodosError(error))
    })
}

export const addTodo = (value) => (dispatch, getStore) => {
  fetch(`${TODO_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(value)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(value => {
      dispatch(addTodoSuccess(value))
    })
    .catch(error => console.log(error))
}

export const toggleTodo = (index) => (dispatch, getStore) => {
  const TODO_URL = `${API_BASE_URL}/todos`
  axios(TODO_URL, {
    method: "PUT",
    data: index,
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(data => {
      dispatch(toggleTodoSuccess(data.data))
    })
    .catch(error => console.log(error))
}

export const removeTodo = (index) => (dispatch, getStore) => {
  const TODO_URL = `${API_BASE_URL}/todos`
  axios(TODO_URL, {
    method: "DELETE",
    data: index,
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(data => {
      dispatch(removeTodoSuccess(data.data))
    })
    .catch(error => console.log(error))
}
