import React from "react"

import { connect } from "react-redux"

import TodoList from "./todo-list"
import TodoForm from "./todo-form"

import { addTodo, toggleTodo, removeTodo } from "../../actions/todo-actions"
import { getLatLng } from "../../actions/weather-actions"

import "../../styles/todo/todo-app.css"
class Todo extends React.Component {
  constructor(props) {
    super(props)
    props.dispatch(getLatLng())
  }

  addTodo = value => {
    this.props.dispatch(addTodo(value))
  }

  toggleTodo = index => {
    this.props.dispatch(toggleTodo(index))
  }

  removeTodo = index => {
    this.props.dispatch(removeTodo(index))
  }

  render() {
    return (
      <div className="todo-app">
        <TodoForm onAdd={this.addTodo} />
        <TodoList
          todos={this.props.todos}
          toggleTodo={this.toggleTodo}
          removeTodo={this.removeTodo}
        />
      </div>
    )
  }
}

export default connect(store => {
  const props = store
  props.updated = new Date()
  return props
})(Todo)
