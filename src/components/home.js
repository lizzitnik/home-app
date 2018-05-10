import React from 'react';

import Header from './header/header'
import Quote from './quotes/quote'
import Weather from './weather/weather-app'
import Todo from './todo/todo-app'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Quote quote='Lorem ipsum dolor sit amet, reprimique theophrastus sed at, laudem intellegat his ex. Quando perfecto mel no, tation possim explicari eam no. An vero ancillae sea.' author='Lawrence Whiteside'/>
        <Weather />
        <Todo />
      </div>
    )
  }
}
