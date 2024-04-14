import { NewTodoForm } from "./components/NewTodoForm";
import { TodoList } from "./components/TodoList";
import "./styles.css";
import { useState } from "react";
export default function App(){
  
  const [todos,setTodos] = useState([])



  function toggleTodo(id,completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if(todo.id === id){
          return {...todo,completed}
        }
        return todo
      })
    })
  }

  function addTodo(title){
    setTodos(currentTodos =>{
      return [
        ...currentTodos,
        {id:crypto.randomUUID(),title,completed:false}
      ]
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos =>{
      return currentTodos.filter(todo =>todo.id!== id)
    })
  }

  return(
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo list</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </> 
  )
 
} 