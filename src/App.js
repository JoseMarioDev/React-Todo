import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false,
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: data,
      taskInput: '',
    };
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addTask = e => {
    e.preventDefault();
    const newTask = {
      task: this.state.taskInput,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTask],
      taskInput: '',
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(task => !task.complete),
    });
  };

  render() {
    return (
      <div>
        <TodoList todo={this.state.todos} />
        <TodoForm
          taskInput={this.state.taskInput}
          changeHandler={this.changeHandler}
          addTask={this.addTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
