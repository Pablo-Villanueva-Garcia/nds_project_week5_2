import React, { useState } from 'react';
import './Elements.css';
import todoRepostory from '../../todoRepository';
import Checkbox from '../Checkbox';



const Todos = (props) =>{

    const listTodo = props.listTodo;


    const handleDoing = async () => {
        if(listTodo.status==='doing'){
            await todoRepostory.patchtodo(listTodo.id,{status:'to_do'});
        }else{
            await todoRepostory.patchtodo(listTodo.id,{
                status:'doing',
                completed:false,
                completion_date:'',
            });
        }
       props.ChangeStatus();
    }


    const handleCompleted = async () => {
        if(listTodo.status==='finished'){
        await todoRepostory.patchtodo(listTodo.id,{
            status:'to_do',
            completed:false,
            completion_date:'',
        });
        }else{
        await todoRepostory.patchtodo(listTodo.id,{
            status:'finished',
            completed:true,
            completion_date:Date.now(),
        });
        }
        props.ChangeStatus();
    }


return(
 
    <div className="mt20 mb20 xs100 p20" id="elements">
    <div className="flex flex_frw just_center mt20">
        <h1>Nombre:</h1><p> {listTodo.name}</p>
        <h1>Propietario:</h1> <p> {listTodo.owner}</p>
        <h1>Descripción:</h1> <p> {listTodo.description}</p>
    </div>
    
    <div className="flex just_AR">
        <Checkbox ChangeState={(e)=>handleDoing()} listTodo={listTodo} value={listTodo.status==='doing'} label={"Doing"} />
        <Checkbox  ChangeState={(e)=>handleCompleted()} listTodo={listTodo} value={listTodo.status==='finished'} label={"Complited"}/>
    </div>
    
        
    </div>
    
 

);


}

export default Todos;