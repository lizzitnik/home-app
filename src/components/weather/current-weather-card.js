import React from 'react'

import '../../styles/weather/weather-card.css'

export default function Current(props) {
  return (
    <div className='card current-weather-card'>
      <div className='day current-day'>{props.day}</div>
      <div className='current-temp'>
        <span className='temp'>{props.temp}</span>
      </div>
      <div className='min-max current-min-max'>{props.min}&deg; | {props.max}&deg;</div>
      <div className='condition current-condition'>{props.condition}</div>
    </div>
  )
}
