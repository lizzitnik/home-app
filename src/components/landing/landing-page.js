import React from 'react'
import LoginForm from '../login/login-form'
import {connect} from 'react-redux'

import {Link, Redirect} from 'react-router-dom'

import '../../styles/landing/landing.css'

export function Landing(props) {
  if (props.loggedIn) {
    return <Redirect to='/home' />
  }
  return (
    <div className='landing-page'>

      <div className='pitch'>
        <h2 className='landing-pitch'>Theres no place like Home</h2>
        <p className='landing-description'>Home is here to help you prepare
        for your day and give you a little peace of mind where ever you go.</p>

        <div className='utility-sect'>
          <div className='box-1'>
            <p>Random Quote</p>
          </div>
          <div className='box-2'>
            <p>Weather</p>
          </div>
          <div className='box-3'>
            <p>Todo List</p>
          </div>
        </div>
      </div>
      <LoginForm />

      <h2>Need an account?
        <Link to='/signup'>Sign-In</Link> now!
      </h2>
    </div>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(Landing)
