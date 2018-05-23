import React from 'react';

import Current from './current-weather'
import Daily from './daily-weather'

import {getLatLng} from '../../actions/weather-actions'

import '../../styles/weather/weather-app.css'

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    props.dispatch(getLatLng())
  }

  render() {
    return (
      <div className='weather-app'>
        <Current />
        <Daily />
      </div>
    )
  }
}
