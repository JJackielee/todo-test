import React, { useState } from 'react';
import Form from "./Form";
import Task from "./Task";

function Container () {

  const [todo, setTodo] = useState([]);

  const addTodo = (value) => {
    const oldTodo = todo;
    oldTodo.push(value);
    setTodo(oldTodo);
  }

    return ( 
      <div>
        <h1>What is on your todo list?</h1>
        <Form onSubmit = {addTodo} todo={todo}/>
        <Task list = {todo} />
      </div>

    );
}

export default Container;