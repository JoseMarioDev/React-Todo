import React from 'react';

function TodoForm(props) {
  return (
    <form className='form' onSubmit={props.addTask}>
      <input
        type='text'
        name='taskInput'
        placeholder='task input'
        value={props.taskInput}
        onChange={props.changeHandler}
      />
      <button>Submit</button>
      <button>clear completed</button>
    </form>
  );
}

export default TodoForm;
