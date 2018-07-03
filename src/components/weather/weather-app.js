import React from "react"
import { connect } from "react-redux"

import Current from "./current-weather"
import Daily from "./daily-weather"
import { getLatLng } from "../../actions/weather-actions"

import '../../styles/weather/weather-app.css'

export class Weather extends React.Component {
  constructor(props) {
    super(props)
    props.dispatch(getLatLng())
  }

  handleTempColor = avgTemp => {
    let color;

    if (avgTemp >= -40 && avgTemp <= 0) {
      return color = '#33CCFF'

    } else if (avgTemp >= 1 && avgTemp <= 32) {
      return color = '#0066FF'

    } else if (avgTemp >= 33 && avgTemp <= 40) {
      return color = '#000099'

    } else if (avgTemp >= 41 && avgTemp <= 50) {
      return color = '#339933'

    } else if (avgTemp >=51  && avgTemp <= 60) {
      return color = '#99FF00'

    } else if (avgTemp >=61  && avgTemp <= 70) {
      return color = '#FFFF00'

    } else if (avgTemp >=71  && avgTemp <= 85) {
      return color = '#FF6600'

    } else if (avgTemp >=86  && avgTemp <= 100) {
      return color = '#CC0000'

    } else if (avgTemp >=101  && avgTemp <= 120) {
      return color = '#990000'

    } else {
      return color = 'white'
    }

    return color;

  }

  render() {
    const weather = this.props.weather
    return (
      <div className="weather-app">
        <Current
          weather={weather}
          handleTempColor={this.handleTempColor}
        />
        <Daily
          weather={weather}
          handleTempColor={this.handleTempColor}
        />
        <div className='footer'>
          <p>*All temperatures are in fahrenheit</p>
          <p>*Daily temperatures are averages.</p>
        </div>
      </div>
    )
  }
}

export default connect(store => store)(Weather)
