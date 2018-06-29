import React from 'react'
import {connect} from 'react-redux'

import DailyCard from './daily-weather-card'

import '../../styles/weather/weather-card.css'

export class Daily extends React.Component {
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
        const sliced = this.props.weather.forecasts.slice(1, 1 + 4)
        const dailies = sliced.map((daily, index) =>
          <div key={index}>
            <DailyCard
              {...daily}
              handleTempColor={this.props.handleTempColor}
            />
          </div>
        )

        return (
          <div className='weather daily-weather'>
            {dailies}
          </div>
        )
      }
    }
}


const mapStateToProps = state => ({
  forescasts: state.forecasts
})

export default connect(mapStateToProps)(Daily)
