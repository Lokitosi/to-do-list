import React from "react";
import './TodosError.css';

function TodosError({error}){
    return(
    <p>{error}</p>
    );

}
export {TodosError};