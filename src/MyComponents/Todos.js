import React from 'react';
import { TodoItem } from '../MyComponents/TodoItem';

export const Todos = (props) => {
  return (
    <div className='container text-white'> {/* Added text-white class */}
      <h3 className='my-3'>Todos List</h3>

      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        })}
    </div>
  );
}





    