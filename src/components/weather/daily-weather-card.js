import React from 'react'

export default function DailyCard(props) {
  return (
    <div className='daily-weather'>
      <div className='daily-day'>{props.day}</div>
      <div className='daily-avg'>
        <span className='avg'>{props.avg}</span>
      </div>
      <div className='daily-min-max'>{props.max}&deg; | {props.min}&deg;</div>
      <div className='daily-condition'>{props.condition}</div>
    </div>
  )
}
