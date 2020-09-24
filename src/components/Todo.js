import React, { useContext, useEffect } from 'react';
import TodoContext from '../Context';
import '../App.css';

export default function Todo() {
  let todo = useContext(TodoContext);
  console.log('I BLESS THE RAINS', todo);

  // const { todo, setTodo } = TodoContext;

  // useEffect(() => {
  //   [];
  // });

  const filter = (id) => {
    console.log('Filtering', id);
    todo.updateInfo(todo.info.filter((item) => item.id !== id));
    console.log('NEW TODO', todo);
  };

  return (
    <div>
      {todo.info.map((item, i) => {
        return (
          <div key={i} className='card'>
            <p>{item.title}</p>
            <h6>{item.completed.toString()}</h6>
            <button onClick={() => filter(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
