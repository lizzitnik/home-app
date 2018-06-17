import React from 'react'

import '../../styles/todo/todo-item.css'

export default function TodoItem(props) {
  return (
    <div className='todo-item'>
      <label className='item'>
        <input className='checkbox' type='checkbox' checked={props.completed}
          onClick={() => props.toggleTodo(props.id)}/>
        <span></span>
        {props.value}
      </label>
      <div className='todo-buttons'>
        <button type='button' className='todo-delete'
          onClick={props.removeTodo}>&mdash;</button>
        <button type='button' className='todo-edit'>Edit</button>
      </div>
    </div>
  )
}
