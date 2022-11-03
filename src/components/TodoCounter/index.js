import React from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoCounter.css';


function TodoCounter() {
    const {
        totalTodos,
        completedTodos
    } = React.useContext(TodoContext);

    return (
        <div className='title'>
            <h2 className="TodoCounter">Has Completado {completedTodos} de {totalTodos} Tareas</h2>
        </div>
    );
};

export { TodoCounter };