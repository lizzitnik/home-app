import React from 'react'

import '../../styles/login/login.css'

export default function Login() {
  return (
    <div className='login-page'>
      <div className='login-container'>
        <form className='signup-form'
          <h2 className='signup-heading'>SignUp</h2>
          <input type='text' className='su-first-input'>
          <input type='text' className='su-last-input'>
          <input type='text' className='su-user-input'>
          <input type='password' className='su-pass-input'>
          <button type='submit' className='su-button'>SignUp</button>
        </form>

        <div className='split'></div>
        
        <form className='signin-form'>
          <h2 className='signin-heading'>SignIn</h2>
          <input type='text' className='si-user-input'>
          <input type='password' className='si-pass-input'>
          <button type='submit' className='si-button'>SignIn</button>
        </form>
      </div>
    </div>
  )
}
