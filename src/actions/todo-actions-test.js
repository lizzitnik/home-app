import {
  ADD_TODO,
  addTodo,
  TOGGLE_TODO,
  toggleTodo,
  REMOVE_TODO,
  removeTodo
} from './todo-actions'

describe('addTodo', () => {
  it('Should return the action', () => {
    const value = 'Mow the lawn';
    const action = addTodo(value);
    expect(action.type).toEqual(ADD_TODO);
    expect(action.value).toEqual(value);
  })
})

describe('toggleTodo', () => {
  it('Should return the action', () => {
    const index = 1;
    const action = toggleTodo(index);
    expect(action.type).toEqual(TOGGLE_TODO);
    expect(action.index).toEqual(index);
  })
})

describe('removeTodo', () => {
  it('Should return the action', () => {
    const index = 2;
    const action = removeTodo(index);
    expect(action.type).toEqual(REMOVE_TODO);
    expect(action.index).toEqual(index);
  })
})
