import React from 'react';

import { TodoCounter } from './components/TodoCounter';
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import {CreateTodoButton} from './components/CreateTodoButton';
import {TodoItem} from './components/TodoItem';

//import './App.css';

const todos = [
  { text: 'Task #1', completed: false },
  { text: 'Task #2', completed: true },
  { text: 'Task #3', completed: false },
  { text: 'Task #4', completed: false },
  { text: 'Task #5', completed: true },
  { text: 'Task #6', completed: false }
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter />
      
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}/>
        )
      )}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
