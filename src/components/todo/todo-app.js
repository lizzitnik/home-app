import React from 'react';

import TodoList from './todo-list'
import TodoForm from './todo-form'

//import {addTodo} from './todo-list'

import '../../styles/todo/todo-app.css'

export default class Todo extends React.Component {
  // addTodo(value) {
  //   this.props.dispatch(
  //     addTodo(value)
  //   )
  // }

  constructor(props) {
    super(props)
    this.state = {
      todos: [{
        value: 'Clean the gutters',
        completed: false
      }, {
        value: 'Water the plants',
        completed: false
      }, {
        value: 'Feed the dog',
        completed: false
      }]
    }
  }

  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos, {todo}]
    })
  }

  render() {
    return (
      <div className='todo-app'>
        <TodoForm onAdd={todo => this.addTodo(todo)}/>
        <TodoList />
      </div>
    )
  }
}
