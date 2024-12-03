import {useState , useEffect} from "react";
import axios from 'axios' ; 

// For fetching the todos from the backend we use useEffect

function App(){

  const[todos , setTodos] = useState([]) ;
  useEffect(()=>{
    const fetchTodos = async ()=>{
      const todo = await axios.get("https://sum-server.100xdevs.com/todos") ; 
      console.log(todo);
      setTodos(todo) ; 
    }
    setInterval(()=>{
      fetchTodos()
    }, 1000) ;
    
  },  [todos])

 
  return (
    <>
    {todos.map((todo , index)=>{
      <Todo key = {index} title = {todo.title} description={todo.description}/>
    })}
    </>
  )
} ;
 
function Todo({title , description}){
  return (
    <>
    <h1>{title}</h1>
    <h5>{description}</h5>
    </>
  )
}

export default App ; 