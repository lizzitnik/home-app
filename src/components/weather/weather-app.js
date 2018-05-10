import React from 'react';

import Current from './current-weather'
import Daily from './daily-weather'

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {
        day: 'Monday',
        temp: '65',
        max: '78',
        min: '58',
        condition: 'sunny'
      }
    }
  }
  render() {
    //const current = this.state;
    return (
      <div>
        <Current day='Monday' temp='65' max='78' min='58' condition='sunny' />
        <Daily />
      </div>
    )
  }
}
