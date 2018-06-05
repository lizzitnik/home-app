import React from 'react'
import {Field, reduxForm, focus} from 'redux-form'

import {login} from '../../actions/auth-actions'
import {required, nonEmpty} from '../../validators'
import Input from './input'

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password))
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className='form-error' aria-live='polite'>
          {this.props.error}
        </div>
      )
    }
    return (
      <form
        className='login-form'
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        {error}
        <label htmlFor='user'>Username</label>
        <Field
          component={Input}
          type='text'
          name='user'
          id='user'
          validate={[required, nonEmpty]}
        />
        <label htmlFor='pass'>Password</label>
        <Field
          component={Input}
          type='password'
          name='pass'
          id='pass'
          validate={[required, nonEmpty]}
        />
        <button disabled={this.props.pristine || this.props.submitting}>
          Login
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm)
