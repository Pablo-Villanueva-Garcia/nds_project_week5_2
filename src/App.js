import './css/estructura.css';
import './App.css';
import Formcreate from './components/FormCreate';
import Todos from './components/ElementsTodo';
import ListTodos from './components/ListTodos'
import { useEffect , useState } from 'react';
import todoRepostory from './todoRepository';

function App() {



  const[listTodo,setlisTodo]= useState ([]);


  useEffect(() => {
    todoRepostory.gettodo().then((responde)=>{
      setlisTodo(responde);
  });
},[]);

const ChangeStatus = () => {
  todoRepostory.gettodo().then((responde)=>{
    setlisTodo(responde);
})
};


  return (
    <div className="App">

    <div className="xs100 just_center">

        <div className="just_SB centrado flex_frw">
          <Formcreate />
          <ListTodos ChangeStatus={ChangeStatus} listTodo={listTodo.filter((listTodo) => listTodo.status === 'to_do')} title={"TO DO"} />
          <ListTodos ChangeStatus={ChangeStatus} listTodo={listTodo.filter((listTodo) => listTodo.status === 'doing')} title={"DOING"} />
          <ListTodos ChangeStatus={ChangeStatus} listTodo={listTodo.filter((listTodo) => listTodo.status === 'finished')} title={"FINISHED"} />
          
        </div>
        

    </div>
      

    </div>
  );
}

export default App;
