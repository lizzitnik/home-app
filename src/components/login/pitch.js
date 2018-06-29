import React from 'react'

import '../../styles/login/pitch.css'

export default function Pitch(props) {
  return (
    <div className='pitch'>
      <h2 className='landing-pitch'>Welcome Home</h2>
      <p className='landing-description'>Here you will find tools that will prepare the day ahead.
      Gain peace-of-mind that Home is there whenever you need it.</p>

      <div className='utility-sect'>
        <div className='box-1 box'>
          <p>Get inspiration for your day with the <b>quote</b> of the day.</p>
        </div>
        <div className='box-2 box'>
          <p>Check to see youll need to pack an unbrella or
          an extra bottle of sunscreen with our <b>weather</b> app</p>
        </div>
        <div className='box-3 box'>
          <p>Plan your day and your week with our easy-to-use <b>todo</b> app</p>
        </div>
      </div>
    </div>
  )
}
