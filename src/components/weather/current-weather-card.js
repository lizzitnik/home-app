import React from 'react'
import {connect} from 'react-redux'
import {getLocation} from '../../actions/weather-actions'

import '../../styles/weather/weather-card.css'

class Current extends React.Component {
  componentDidMount() {
    this.props.dispatch(getLocation())
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
  forcasts: state.forcasts
})

export default connect(mapStateToProps)(Current)
