import React from 'react'

import DailyCard from './daily-weather-card'

export default class Daily extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dailies: [{
        day: 'Tuesday',
        avg: '54',
        max: '65',
        min: '43',
        condition: 'sunny'
      }, {
        day: 'Wednesday',
        avg: '45',
        max: '57',
        min: '33',
        condition: 'cloudy'
      }, {
        day: 'Thursday',
        avg: '50',
        max: '68',
        min: '32',
        condition: 'partly-sunny'
      }]
    }
  }
  render() {
    const dailies = this.state.dailies.map((daily, index) =>
      <div key={index}>
        <DailyCard {...daily} />
      </div>
    )
    return (
      <div className='daily-weather'>
        {dailies}
      </div>
    )
  }
}
