import React from 'react';
import {connect} from 'react-redux'

import '../../styles/weather/weather-card.css'

export class Current extends React.Component {

  render() {
    const thisWeek = this.props.weather.forecasts

    if (thisWeek.length === 0) {
      return <div>Loading...</div>

    }
    if (this.props.weather.error) {
      return <div>Error! {this.props.error.message}</div>

    } else if (this.props.weather.loading) {
      return <div>Loading...</div>

    } else {
      const today = this.props.weather.forecasts[0]
      const ICON_URL = `https://www.aerisweather.com/img/wxicons/${today.icon}`
      const color = this.props.handleTempColor(today.feelslikeF)
      const divStyle = {
        backgroundImage: `url(${ICON_URL})`,
        backgroundSize: 'cover',
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderColor: `${color}`
      }

      return (
        <div className='weather current-weather'>
          <div className='card current-weather-card'>
            <div className='day current-day'>Today</div>
            <div className='current-temp' style={divStyle}>
              <span className='temp'>{today.feelslikeF}&deg;</span>
            </div>
            <div className='min-max current-min-max'>{today.minTempF}&deg; | {today.maxTempF}&deg;</div>
            <div className='condition current-condition'>{today.weatherPrimary}</div>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  forecasts: state.forecasts
})

export default connect(mapStateToProps)(Current)
