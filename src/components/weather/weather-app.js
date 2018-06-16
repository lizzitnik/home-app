import React from "react"
import { connect } from "react-redux"

import Current from "./current-weather"
import Daily from "./daily-weather"
import { getLatLng } from "../../actions/weather-actions"

import '../../styles/weather/weather-app.css'

class Weather extends React.Component {
  constructor(props) {
    super(props)
    props.dispatch(getLatLng())
  }

  render() {
    const forecasts = this.props.weather.forecasts
    return (
      <div className="weather-app">
        <Current forecasts={forecasts} />
        <Daily forecasts={forecasts}/>
      </div>
    )
  }
}

export default connect(store => {
  const props = store
  props.updated = new Date()
  return props
})(Weather)
