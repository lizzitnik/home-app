import {
  FETCH_TODOS_SUCCESS,
  fetchTodosSuccess,
  ADD_TODO_SUCCESS,
  addTodoSuccess,
  TOGGLE_TODO_SUCCESS,
  toggleTodoSuccess,
  REMOVE_TODO_SUCCESS,
  removeTodoSuccess
} from './todo-actions'

describe('fetchTodosSuccess', () => {
  it('Should return the action', () => {
    const todos = [];
    const action = fetchTodosSuccess(todos);
    expect(action.type).toEqual(FETCH_TODOS_SUCCESS);
    expect(action.todos).toEqual(todos);
  })
})

describe('addTodoSuccess', () => {
  it('Should return the action', () => {
    const value = 'Mow the lawn';
    const action = addTodoSuccess(value);
    expect(action.type).toEqual(ADD_TODO_SUCCESS);
    expect(action.todo).toEqual(value);
  })
})

describe('toggleTodoSuccess', () => {
  it('Should return the action', () => {
    const todo = {};
    const action = toggleTodoSuccess(todo);
    expect(action.type).toEqual(TOGGLE_TODO_SUCCESS);
    expect(action.todo).toEqual(todo);
  })
})

describe('removeTodoSuccess', () => {
  it('Should return the action', () => {
    const todo = {};
    const action = removeTodoSuccess(todo);
    expect(action.type).toEqual(REMOVE_TODO_SUCCESS);
    expect(action.todo).toEqual(todo);
  })
})
