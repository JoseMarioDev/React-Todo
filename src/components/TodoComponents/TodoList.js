import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return props.todo.map(todo => (
    <Todo todoItem={todo} key={todo.id} toggleItem={props.toggleItem} />
  ));
};

export default TodoList;
