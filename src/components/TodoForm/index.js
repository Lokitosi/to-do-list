import React from "react";
import { TodoContext } from "../../TodoContext";
import './TodoForm.css';

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onSubmit = (event) => {
        //Cuando el formulario se envie, no se recarga los datos como por defecto
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        setNewTodoValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <label>¿Que tarea quieres completar?</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Ej:Regar las plantas"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-buttno TodoForm-button--add">
                    Añadir Tarea
                </button>
            </div>

        </form>
    );
}

export { TodoForm };