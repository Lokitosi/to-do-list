import React from 'react';
import './CreateTodoButton.css';
import { MdPlaylistAdd } from 'react-icons/md';

function CreateTodoButton(props) {

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    }

    return (
        <button
            className='CreateTodoButton'
            onClick={onClickButton}
        >
            <MdPlaylistAdd />
        </button>
    );
};

export { CreateTodoButton };