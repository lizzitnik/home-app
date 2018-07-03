import React from 'react'

import '../../styles/login/pitch.css'

export default function Pitch(props) {
  return (
    <div className='pitch'>
      <div className='landing-header'>
        <h1 className='landing-logo'>Home</h1>
      </div>
      <h2 className='landing-pitch'>Simplify your day</h2>
      <p className='landing-description'>A simple productivity app that has everything
      you need to start your day right!</p>

      <ul className='utility-sect'>
        <li>Get inspiration with the <b>quote</b> of the day.</li>
        <li>Check for showers or sunshine with our 5-day <b>forecast</b>.</li>
        <li>Plan your day and your week with our easy-to-use <b>todo</b> app.</li>
      </ul>
    </div>
  )
}
