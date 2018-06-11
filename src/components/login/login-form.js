import React from 'react'
import {Field, reduxForm, focus} from 'redux-form'
import {Link} from 'react-router-dom'

import Pitch from './pitch'
import {login} from '../../actions/auth-actions'
import {required, nonEmpty} from '../../validators'
import Input from './input'

import '../../styles/login/landing.css'

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
    <div className='login-page landing'>
      <Pitch />
      <form
        className='login-form form'
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        {error}
        <div className='field'>
          <label htmlFor='user'>Username</label>
          <Field
            component={Input}
            type='text'
            name='user'
            id='user'
            validate={[required, nonEmpty]}
          />
        </div>
        <div className='field'>
          <label htmlFor='pass'>Password</label>
          <Field
            component={Input}
            type='password'
            name='pass'
            id='pass'
            validate={[required, nonEmpty]}
          />
        </div>
        <div className='btn-container'>
          <button disabled={this.props.pristine || this.props.submitting}>
            Login
          </button>
        </div>
      </form>
      <div className='footer-li'>
        <p>New Here?</p>
        <Link to='/signup'>Signup!</Link>
      </div>
    </div>
    )
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm)
