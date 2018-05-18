import React from 'react'

import TodoItem from './todo-item'

import '../../styles/todo/todo-list.css'

export default class TodoList extends React.Component {
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
    const todos = this.state.todos.map((todo, index) =>
      <li key={index}>
        <TodoItem {...todo} />
      </li>
    )
    return (
      <div>
        <ul className='todo-list'>
          {todos}
        </ul>
      </div>
    )
  }
}
