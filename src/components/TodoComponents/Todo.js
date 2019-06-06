import React from 'react';
import './Todo.css';

const Todo = props => {
  return (
    <p
      className={`item ${props.todoItem.completed ? 'completed' : ''}`}
      onClick={() => props.toggleItem(props.todoItem.id)}
    >
      {props.todoItem.task}
    </p>
  );
};

export default Todo;
