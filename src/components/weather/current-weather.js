import React from 'react';
import {getLatLng} from '../../actions/weather-actions'

import CurrentCard from './current-weather-card'

import '../../styles/weather/weather-card.css'

export default class Current extends React.Component {
  render() {

    if (this.props.forecasts) {
      const today = this.props.forecasts[0]
    } else {
      const today = {};
    }
    
    return (
      <div className='weather current-weather'>
        <div className='card current-weather-card'>
          <div className='day current-day'>Monday</div>
          <div className='current-temp'>
            <span className='temp'>{}</span>
          </div>
          <div className='min-max current-min-max'>{}&deg; | {}&deg;</div>
          <div className='condition current-condition'>{}</div>
        </div>
      </div>
    )
  }
}
