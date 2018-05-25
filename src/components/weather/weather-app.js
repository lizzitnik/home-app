import React from "react"
import { connect } from "react-redux"

import Current from "./current-weather"
import Daily from "./daily-weather"
import { getLatLng } from "../../actions/weather-actions"

import '../../styles/weather/weather-app.css'

class Weather extends React.Component {
  constructor(props) {
    super(props);
    props.dispatch(getLatLng())
  }

  render() {
    return (
      <div className="weather-app">
        <Current />
        <Daily />
      </div>
    )
  }
}

export default connect(state => state)(Weather)
