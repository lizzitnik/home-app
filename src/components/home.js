import React from 'react';

import Header from './header/header'
import Quote from './quotes/quote'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Quote />
      </div>
    )
  }
}
