import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';

import Pitch from './pitch'
import {registerUser} from '../../actions/user-actions';
import {login} from '../../actions/auth-actions';
import Input from './input';
import {Link} from 'react-router-dom'
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';

import '../../styles/login/landing.css'

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');


export class SignupForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
          <div className='signup-page landing'>
            <Pitch />
            <form
                className="signup-form form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <div className='field'>
                  <label htmlFor="firstName">First name</label>
                  <Field component={Input} type="text" name="firstName" />
                </div>
                <div className='field'>
                  <label htmlFor="lastName">Last name</label>
                  <Field component={Input} type="text" name="lastName" />
                </div>
                <div className='field'>
                  <label htmlFor="username">Username</label>
                  <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                  />
                </div>
                <div className='field'>
                  <label htmlFor="password">Password</label>
                  <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                  />
                </div>
                <div className='field'>
                  <label htmlFor="passwordConfirm">Confirm password</label>
                  <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                  />
                </div>
                <div className='btn-container'>
                  <button
                      type="submit"
                      disabled={this.props.pristine || this.props.submitting}>
                      Register
                    </button>
                  </div>
            </form>
            <div className='footer-su'>
              <p>Have an Account?</p>
              <Link to='/'>Login!</Link>
            </div>
          </div>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(SignupForm);
