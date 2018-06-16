import React from "react"
import { connect } from 'react-redux'

import Header from "./header/header"
import Quote from "./quotes/quote"
import Weather from "./weather/weather-app"
import Todo from "./todo/todo-app"

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Quote />
        <Weather />
        <Todo />
      </div>
    )
  }
}

export default connect(state => state)(Home)
