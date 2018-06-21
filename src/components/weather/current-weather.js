import React from 'react';
import {connect} from 'react-redux'

import '../../styles/weather/weather-card.css'

export class Current extends React.Component {
  render() {

    if (this.props.weather.error) {
      return <div>Error! {this.props.error.message}</div>

    } else if (this.props.weather.loading) {
      return <div>Loading...</div>

    } else {

      // const today = this.props.weather.forecasts[0]
      // console.log(today)
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
}

const mapStateToProps = state => ({
  forecasts: state.forecasts
})

export default connect(mapStateToProps)(Current)
