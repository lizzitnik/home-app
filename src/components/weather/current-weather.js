import React from 'react'

export default function Current(props) {
  return (
    <div className='current-weather'>
      <div className='current-day'>{props.day}</div>
      <div className='current-temp'>
        <span className='temp'>{props.temp}</span>
      </div>
      <div className='current-min-max'>{props.max}&deg; | {props.min}&deg;</div>
      <div className='current-condition'>{props.condition}</div>
    </div>
  )
}
