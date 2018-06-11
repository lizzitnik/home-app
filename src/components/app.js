import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './home'
import LoginForm from './login/login-form'
import SignupForm from './login/signup-form'

import '../styles/app.css'

export default function App() {
  return (
    <Router>
      <div className='app'>
        <main>
          <Switch>
            <Route exact path='/' component={LoginForm} />
            <Route exact path='/signup' component={SignupForm} />
          </Switch>
          <Route exact path='/home' component={Home} />
        </main>
      </div>
    </Router>
  )
}
