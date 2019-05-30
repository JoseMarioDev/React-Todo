import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return props.todo.map(todo => <Todo todoItem={todo} />);
};

export default TodoList;
