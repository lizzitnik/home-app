import React from 'react';

import Current from './current-weather'
import Daily from './daily-weather'

import '../../styles/weather/weather-app.css'

export default function Weather() {
    return (
      <div className='weather-app'>
        <Current />
        <Daily />
      </div>
  )
}
