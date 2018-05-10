import React from 'react';

import TodoList from './todo-list'
import TodoForm from './todo-form'

export default function Todo() {
  return (
    <div className='todo-app'>
      <TodoForm />
      <TodoList />
    </div>
  )
}
