import React from "react";
import "./TodoItem.css";
import { MdPlaylistAddCheck, MdDeleteSweep } from 'react-icons/md';

function TodoItem(props) {

  return (
    <div className="Container">
      <li className="TodoItem">

        <p className="TodoItem-title">
          Matematicas:
        </p>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
          {props.text}
        </p>
        <div className="Options">
          <div className="Complete">
            <span
              className={`Icon Icon-Check ${props.completed && "Icon-check--active"}`}
              onClick={props.onComplete}
            >
              <MdPlaylistAddCheck />
            </span>
            <p>Completar</p>
          </div>
          <div className="Delete">
            <span
              className="Icon Icon-delete"
              onClick={props.onDelete}
            >
              <MdDeleteSweep />
            </span>
            <p>Eliminar</p>
          </div>
        </div>
      </li>
    </div>
  );
}

export { TodoItem };
