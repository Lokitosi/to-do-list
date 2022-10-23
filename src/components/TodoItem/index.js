import React from "react";
import "./TodoItem.css";
import {MdPlaylistAddCheck, MdDeleteSweep} from 'react-icons/md';

function TodoItem(props) {

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-Check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <MdPlaylistAddCheck/>
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <MdDeleteSweep/>
      </span>
    </li>
  );
}

export { TodoItem };
