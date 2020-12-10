import React, { useState } from 'react';
import todoRepository from '../../todoRepository';
//import'./checkbox.css';

const Checkbox = (props) => {

    const listTodo=props.listTodo;

    const handleChange = (e) => {
        props.ChangeState(e);
    }
    return(
        <div>
            <p>{props.label}</p>
            
            <input id={listTodo.id} type="checkbox" checked={props.value} name="" onChange={handleChange}></input>
            {/*<label for={listTodo.id}></label>*/}
        </div>
    )


}

export default Checkbox;