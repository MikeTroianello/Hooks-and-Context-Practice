import React from 'react';
import Todo from './Todo.js';
import '../App.css';

export default function ShowInfo() {
  return (
    <div className='card'>
      <h2>Todo</h2>
      <Todo />
    </div>
  );
}
