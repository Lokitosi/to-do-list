import React from "react";
import { useLocalStorage } from "./useLocalStorage";

//Se crea contexto
const TodoContext = React.createContext();

function TodoProvider(props) {
  //Save all from the state y the global funtions
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  //hook para estados de busqueda
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  //Counters
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
    saveTodos(newTodos); //ocurre un nuevo re-render
  };


  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos]; //lista exacta
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos); //ocurre un nuevo re-render
  };

  const addTodo = (text) => {
    const newTodos = [...todos]; //lista exacta
    newTodos.push({
      completed: false,
      text: text
    })
    saveTodos(newTodos); //ocurre un nuevo re-render
  };


  return (
    <TodoContext.Provider
      value={{
        error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        addTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export {TodoContext, TodoProvider};

