import React, { useState } from 'react';
import todoRepostory from './../../todoRepository';
import './Formcreate.css';

const FormCreate = () => {
const initialstate=
{
    name:"",
    description:"",
    completed: false,
    completion_date:"",
    status:"to_do",
    owner:""

}




const[todo,setTodo]=useState(initialstate)

const handleChange = (key,value) =>{
    setTodo({...todo, [key]: value})

}


const createtodo= async () => {

    await todoRepostory.createtodo(todo).then((responde)=>responde)
    setTodo(initialstate)
}
return(
 
    <div className="formbox mt20 mb20 flex_dir_col xs100 m20 l20 p20 ali_center">
            <h1>Nuevo To do</h1>
        <input  placeholder="Nombre" className="mb20 mt20" type="text" value={todo.name} onChange={(e)=>handleChange("name",e.target.value)}></input>
        <input  placeholder="Propietario" className="mt20 mb20"type="text" value={todo.owner} onChange={(e)=>handleChange("owner",e.target.value)}></input>
        <textarea placeholder="Inserte descripción" className="mt20 mb20" value={todo.description} onChange={(e)=>handleChange("description",e.target.value)}></textarea>
        <button className="mt20 mb20" onClick={createtodo}>Crear</button>
        
    </div>
    
 

);


}

export default FormCreate;