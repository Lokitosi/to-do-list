import React from "react";
import { AppUI } from "./AppUI";
import {useLocalStorage} from '../hooks/useLocalStorage';


function App() {
  //guardar cosas
  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[]);
  //hook para estados de busqueda
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  //Filtro de todos
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText); //Criterio de evaluacion
    });
  }
  // FIn filtro

 

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos]; //lista exacta
    newTodos[todoIndex].completed = true;
    saveTodos (newTodos); //ocurre un nuevo re-render
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos]; //lista exacta
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos); //ocurre un nuevo re-render
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
