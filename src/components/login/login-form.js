import React from 'react'
import {Field, reduxForm, focus} from 'redux-form'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import Pitch from './pitch'
import {login} from '../../actions/auth-actions'
import {required, nonEmpty} from '../../validators'
import Input from './input'

import '../../styles/login/landing.css'

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.user, values.pass))
  }

  render() {

    if (this.props.auth.currentUser) {
      return <Redirect to='/home' />
    }

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
      <div className='form-container'>
        <form
          className='login-form form'
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          {error}
          <h2>Login Here!</h2>
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
      </div>
      <div className='footer-li'>
        <p>New Here? <Link to='/signup'>Signup!</Link></p>
      </div>
    </div>
    )
  }
}

export default reduxForm({
  form: "login",
  onSubmitFail: (errors, dispatch) => dispatch(focus("login", "username"))
})(connect(state => state)(LoginForm))
