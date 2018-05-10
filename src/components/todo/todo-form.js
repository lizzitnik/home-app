import React from 'react'

export default function TodoForm(props) {
  return (
    <div className='todo-header'>
      <h2 className='todo-title'>Todo List</h2>
      <form className='todo-form'>
        <input type='text' className='todo-input' placeholder='What needs to be done?' />
        <button type='submit' className='todo-add'></button>
      </form>
    </div>
  )
}
