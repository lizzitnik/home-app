import React from 'react'

export default function TodoItem(props) {
  return (
    <div className='todo-item'>
      <input type='radio' checked={props.checked} />
      <p className='item'>{props.value}</p>
      <button type='button' className='todo-delete'>
        &mdash;</button>
    </div>
  )
}
