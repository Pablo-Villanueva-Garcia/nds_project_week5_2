import React, { useState } from 'react';
import todoRepostory from '../../todoRepository';
import Todos from '../ElementsTodo';
import './ListTodos.css';

const ListTodos = (props) =>{

    const ChangeStatus= () =>{
        props.ChangeStatus();
    }


return(
 
    <div className="mt20 mb20 xs100 m20 l20 flex_frw flex just_center" id="ListTodos">
    
            <h2 className="xs100 m15 l15">{props.title}</h2>
            {props.listTodo.map((listTodo)=><Todos ChangeStatus={ChangeStatus} listTodo={listTodo}/>)}

        
    </div>
    
 

);


}

export default ListTodos;