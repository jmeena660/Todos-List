import React, { useState, useEffect } from 'react';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos'; 

import { AddTodo } from './MyComponents/AddTodo';


function App() {
  // Load todos from local storage on component mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const [todos, setTodos] = useState([]);

  const addTodo = (title, desc) => {
    console.log("Adding this todo:", title, desc);
    let sno = 1; // Default sno value if todos array is empty
    if (todos.length > 0) {
      sno = todos[todos.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      title: title,
      description: desc
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Save todos to local storage
    console.log("New Todo:", newTodo);
  };
  
  const onDelete = (todo) => {
    console.log("I am onDelete", todo);
    const updatedTodos = todos.filter((e) => e !== todo);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Save updated todos to local storage
  };

  return (  
    <>
      <Header backgroundColor="body-tertiary" title="Todos-List" />
      {/* Pass the addTodo function directly */}
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      
    </>
  );
}

export default App;


