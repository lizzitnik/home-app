
import React from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../../actions/todo-actions'

import TodoItem from './todo-item'

import '../../styles/todo/todo-list.css'

export class TodoList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchTodos());
  }

  render() {
    if (!this.props.todos) {
      return <div>Loading...</div>
    }

    if (this.props.error) {
      return <div>Error! {this.props.error.message}</div>
    }

    if (this.props.loading) {
      return <div>Loading...</div>
    }
    const todos = this.props.todos.todos.map((todo, index) =>
      <li key={index}>
        <TodoItem
          {...todo}
          toggleTodo={() => this.props.toggleTodo(todo.id)}
          removeTodo={() => this.props.removeTodo(todo.id)} />
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

const mapStateToProps = state => ({
  todos: state.todos,
  loading: state.loading,
  error: state.error
})

export default connect(mapStateToProps)(TodoList)
