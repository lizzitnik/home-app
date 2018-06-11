import React from 'react'

import '../../styles/login/pitch.css'

export default function Pitch(props) {
  return (
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
  )
}
