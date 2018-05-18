import React from 'react';

import CurrentCard from './current-weather-card'

import '../../styles/weather/weather-card.css'

export default class Current extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {
        day: 'Monday',
        temp: '65',
        max: '78',
        min: '58',
        condition: 'sunny'
      }
    }
  }
  render() {
    const current = this.state.current
    return (
      <div className='weather current-weather'>
        <CurrentCard {...current} />
      </div>
    )
  }
}
