import React from 'react'
import {connect} from 'react-redux'

import {Link, Redirect} from 'react-router-dom'

import SignupForm from './signup-form'

export function Signup(props) {
  if (props.loggedIn) {
    return <Redirect to='/home' />
  }
  return (
    <div className='signup'>
      <h2>SignUp</h2>
      <SignupForm />
      <Link to '/'>Login</Link>
    </div>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(SignupPage)
