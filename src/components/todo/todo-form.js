import React from 'react'
import {Field, reduxForm, focus} from 'redux-form'
import Input from '../login/input'
import {addTodo} from '../../actions/todo-actions'
import {required, nonEmpty, isTrimmed} from '../../validators'

import '../../styles/todo/todo-form.css'

export class TodoForm extends React.Component {
  clearInput() {
    this.setState({value: ''})
  }

  onSubmit(value) {
    //const value = this.textInput.value.trim();

    this.props.dispatch(addTodo(value))
    this.clearInput();
  }

  // onChange = () => {
  //   const value = this.textInput.value.trim()
  //   this.setState({ value: value })
  // }

  render() {
    return (
      <div className='todo-header'>
        <h2 className='todo-title'>Todo List</h2>
        <form
          className='todo-form'
          onSubmit={this.props.handleSubmit(value =>
            this.onSubmit(value)
          )}>
          <Field
            component={Input}
            className='todo-input'
            type='text'
            name='todo-input'
            id='todo-input'
            validate={[required, nonEmpty, isTrimmed]}
          />
          <button
            type='submit'
            disabled={this.props.pristine || this.props.submitting}>
            +
          </button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
    form: 'todo',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('todo', Object.keys(errors)[0]))
})(TodoForm);
