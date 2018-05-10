import React from 'react'

import TodoItem from './todo-item'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        value: 'Clean the gutters',
        checked: true
      }, {
        value: 'Water the plants',
        checked: false
      }, {
        value: 'Feed the dog',
        checked: false
      }]
    }
  }
  render() {
    const items = this.state.items.map((item, index) =>
      <li key={index}>
        <TodoItem {...item} />
      </li>
    )
    return (
      <div className='todo-list'>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}
