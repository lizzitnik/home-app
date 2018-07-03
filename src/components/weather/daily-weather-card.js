import React from 'react'
import moment from 'moment'

import '../../styles/weather/weather-card.css'

export default function DailyCard(props) {
  const dayNum = moment(props.dateTimeISO).day()
  const day = moment().isoWeekday(dayNum)._locale._weekdays[dayNum]
  const ICON_URL = `https://www.aerisweather.com/img/wxicons/${props.icon}`
  const color = props.handleTempColor(props.avgTempF)
  const divStyle = {
    backgroundImage: `url(${ICON_URL})`,
    backgroundSize: 'cover',
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderColor: `${color}`
  }
  return (
    <div className='card daily-weather-card'>
      <div className='day daily-day'>{day}</div>
      <div className='daily-avg circle' style={divStyle}>
        <span className='avg'>{props.avgTempF}&deg;</span>
      </div>
      <div className='min-max daily-min-max'>{props.minTempF}&deg; | {props.maxTempF}&deg;</div>
      <div className='condition daily-condition'>{props.weatherPrimary}</div>
    </div>
  )
}
