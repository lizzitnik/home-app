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

    if (avgTemp >= -40 && avgTemp <= 0) {
      return '#33CCFF'

    } else if (avgTemp >= 1 && avgTemp <= 32) {
      return '#0066FF'

    } else if (avgTemp >= 33 && avgTemp <= 40) {
      return '#000099'

    } else if (avgTemp >= 41 && avgTemp <= 50) {
      return '#339933'

    } else if (avgTemp >=51  && avgTemp <= 60) {
      return '#99FF00'

    } else if (avgTemp >=61  && avgTemp <= 70) {
      return '#FFFF00'

    } else if (avgTemp >=71  && avgTemp <= 85) {
      return '#FF6600'

    } else if (avgTemp >=86  && avgTemp <= 100) {
      return '#CC0000'

    } else if (avgTemp >=101  && avgTemp <= 120) {
      return '#990000'

    } else {
      return 'white'
    }
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
