import React from 'react'
import * as actions from '../../actions/todo-actions'

import '../../styles/todo/todo-form.css'

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    //this.onSubmit = this.onSubmit.bind(this);
  }

  clearInput() {
    this.setState({value: ''})
  }

  onSubmit(e) {
    e.preventDefault();
    const value = this.textInput.value.trim();
    if (value && this.props.onAdd) {
      this.props.onAdd(value)
    }
    this.clearInput();
  }

  onChange = () => {
    const value = this.textInput.value.trim()
    this.setState({ value: value })
  }

  render() {
    return (
      <div className='todo-header'>
        <h2 className='todo-title'>Todo List</h2>
        <form className='todo-form'>
          <input type='text' className='todo-input' placeholder='What needs to be done?'
          ref={value => {
            this.textInput = value;
          }}
          onChange={this.onChange}
          value={this.state.value}
          />
          <button type='submit' className='todo-add' onClick={(e) => this.onSubmit(e)}>+</button>
        </form>
      </div>
    )
  }
}
