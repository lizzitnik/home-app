import React from 'react'
import moment from 'moment'

import '../../styles/date/date.css'

export default function CurrentDate() {
  const time = moment().format('LT')
  const date = moment().format('dddd, MMMM Do YYYY')

  return (
    <div className='current-date'>
      <h2 className='time'>{time}</h2>
      <p className='date'>{date}</p>
    </div>
  )
}
