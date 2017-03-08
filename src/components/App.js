import React from 'react';
import ToDosList from './todos-list';

const todos = [
  {
    task: 'make React tutorial',
    isCompleted: true
  },
  {
    task: 'eat dinner',
    isCompleted: true
  }
]

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

  render() {
    return (
      <div>
        <h1>React ToDos App</h1>
        <ToDosList todos={this.state.todos} />
      </div>
    );
  }
}
