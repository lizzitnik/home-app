import React from 'react'
import {connect} from 'react-redux'
import {getLatLng} from '../../actions/weather-actions'

import '../../styles/weather/weather-card.css'

class Current extends React.Component {
  componentDidMount() {
    this.props.dispatch(getLatLng())
  }

  render () {
    return (
      <div className='card current-weather-card'>
        <div className='day current-day'>Monday</div>
        <div className='current-temp'>
          <span className='temp'>{}</span>
        </div>
        <div className='min-max current-min-max'>{}&deg; | {}&deg;</div>
        <div className='condition current-condition'>{}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  forecasts: state.forecasts
})

export default connect(mapStateToProps)(Current)
