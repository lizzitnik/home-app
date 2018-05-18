import React from 'react'

import '../../styles/weather/weather-card.css'

export default function DailyCard(props) {
  return (
    <div className='card daily-weather-card'>
      <div className='day daily-day'>{props.day}</div>
      <div className='daily-avg'>
        <span className='avg'>{props.avg}</span>
      </div>
      <div className='min-max daily-min-max'>{props.min}&deg; | {props.max}&deg;</div>
      <div className='condition daily-condition'>{props.condition}</div>
    </div>
  )
}
