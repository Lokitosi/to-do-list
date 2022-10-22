import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(){
    const onClickButton = (msg) => {
        alert(msg);
    }

    return(
        <button
         className='CreateTodoButton'
         onClick={() => onClickButton('Evento para el modal')}
         >
            +
            </button>
    );
};

export {CreateTodoButton};