import React from 'react'

export default class TodoList extends React.Component {
  render () {
    const items = this.props.items.map((item, index) => {
      return (
        <TodoItem key={index} item={item}
      )
    })
  }
}
