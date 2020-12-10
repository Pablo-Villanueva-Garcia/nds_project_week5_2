const url = "http://127.0.0.1:3022/todos";


const gettodo = async ()=> {
    try{
        const response = await fetch (url,{method:'GET'});
        return response.json();
 
    } catch(e){
        console.log(e);
    }
 }


const createtodo = async (todo)=> {
   try{
       return await fetch (url,{
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body: JSON.stringify(todo),
       }).then((response)=>response.json());

   } catch(e){
       console.log(e);
   }
}


const patchtodo = async (id,todo)=> {
    try{


        return await fetch (url+`/${id}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(todo),
        }).then((response)=>response.json());
    } catch(e){
        console.log(e);
    }
 }
 

export default {
    createtodo,
    gettodo,
    patchtodo,
}
;