import React from 'react';
//Importo contexto y componentes
import { TodoContext } from "../TodoContext/index.js";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoItem } from "../components/TodoItem";
import { Modal } from "../components/Modal";
import { TodoForm } from '../components/TodoForm/index.js';
import { TodosError } from '../components/TodosError/index.js';
import { TodosLoading } from '../components/TodosLoading/index.js';
import { EmptyTodos } from '../components/EmptyTodos/index.js';

function AppUI() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      {/*Accediendo a el consumer*/}
      <TodoList>
        {error && <TodosError error={error}/>}
        {loading && <TodosLoading/>}
        {(!loading  && !searchedTodos.length) && <EmptyTodos/>}
        {/*(!loading && !totalTodos) && <EmptyTodos/>*/}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}


      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
