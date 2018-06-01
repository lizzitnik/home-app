import React from "react"

import Header from "./header/header"
import Quote from "./quotes/quote"
import Weather from "./weather/weather-app"
import Todo from "./todo/todo-app"

export default class Home extends React.Component {
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
