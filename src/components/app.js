import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './home'
import Landing from './landing/landing-page'
import Signup from './login/signup-page'

export default function App() {
  return (
    <Router>
      <div className='app'>
        <main>
          <Route exact path='/' component={Landing} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/home' component={Home} />
        </main>
      </div>
    </Router>
  )
}
