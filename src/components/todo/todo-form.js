import React from 'react'
import * as actions from '../../actions/todo-actions'
import {addTodo} from '../../actions/todo-actions'
import {connect} from 'react-redux'

import '../../styles/todo/todo-form.css'

export class TodoForm extends React.Component {
  clearInput() {
    this.setState({value: ''})
  }

  onSubmit(value) {
    return this.props.dispatch(addTodo(value))
    this.clearInput();
  }

  // onChange = () => {
  //   const value = this.textInput.value.trim()
  //   this.setState({ value: value })
  // }

  render() {
    debugger
    return (
      <div className='todo-header'>
        <h2 className='todo-title'>Todo List</h2>
        <form
          className='todo-form'
          onSubmit={this.props.onAdd(value =>
            this.onSubmit(value)
        )}>
          <input
            type='text'
            ref={input => this.textInput = input}
            className='todo-input'
          />
          <button type='submit'>+</button>
        </form>
      </div>
    )
  }
}
