import React from 'react'

import TodoItem from './todo-item'

import '../../styles/todo/todo-list.css'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todos = this.props.todos.map((todo, index) =>
      <li key={index}>
        <TodoItem
          {...todo}
          toggleTodo={() => this.props.toggleTodo(index)}
          removeTodo={() => this.props.removeTodo(index)} />
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
