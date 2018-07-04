import {todoReducer} from './todo-reducers';
import {
  fetchTodosSuccess,
  addTodoSuccess,
  toggleTodoSuccess,
  removeTodoSuccess
} from '../actions/todo-actions';

describe('todoReducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
        const state = todoReducer(undefined, {type: '__UNKNOWN'});

        expect(state.todos).toEqual([]);
        expect(state.loading).toEqual(false);
        expect(state.error).toEqual(null);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = todoReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('fetchTodosSuccess', () => {
        it('Should fetch all todos', () => {
            let state = {
                todos: [],
                loading: false,
                error: null
            };
            const todos = ['todo1', 'todo2', 'todo3']
            state = todoReducer(state, fetchTodosSuccess(todos));
            expect(state.todos).toEqual(['todo1', 'todo2', 'todo3']);
            expect(state.loading).toEqual(false);
            expect(state.error).toEqual(null);
        });
    });

    describe('addTodoSuccess', () => {
        it('Should add a todo', () => {
            let state = {
                todos: ['todo1', 'todo2', 'todo3'],
                loading: false,
                error: null
            };
            const todo = 'todo4'
            state = todoReducer(state, addTodoSuccess(todo));
            expect(state.todos).toEqual(['todo1', 'todo2', 'todo3', 'todo4']);
            expect(state.loading).toEqual(false);
        });
      });

        describe('toggleTodoSuccess', () => {
            it('Should render an error', () => {
                let state = {
                    todos: [
                      {
                        id: 1111,
                        value: 'wash dog',
                        completed: false
                      }
                    ],
                    loading: false,
                    error: null
                };
                state = todoReducer(state, state.todos.map(todo => {
                  toggleTodoSuccess(todo)
                }));

                expect(state.todos).toEqual([
                  {
                    id: 1111,
                    value: 'wash dog',
                    completed: false
                  }
                ]);
                expect(state.loading).toEqual(false);
        });
    });
})
