import React from "react";
import './EmptyTodos.css';
import { MdPlusOne } from 'react-icons/md';

function EmptyTodos() {
    return (
        <div>
            <MdPlusOne />
            <p>Tu lista se encuentra vacia, agrega un todo para iniciar</p>
        </div>
    );

}
export { EmptyTodos };