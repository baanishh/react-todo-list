import { useEffect, useRef, useState } from 'react';
import './Css/Todo.css'
import TodoItems from './TodoItems';



let count=0;
const Todo = () => {

  
  const [todo,setTodo]=useState([]);
  const inputRef=useRef(null);


const add=()=>{
  setTodo([...todo,{no:count++,text:inputRef.current.value,display:""}]);
  inputRef.current.value="";
  localStorage.setItem("count_todo",count)
}


useEffect(()=>{
  setTimeout(()=>{
    localStorage.setItem("todos",JSON.stringify(todo))
    console.log(todo);
  },100) 
},[todo])

useEffect(()=>{
  setTodo(JSON.parse(localStorage.getItem("todos")))
  count=localStorage.getItem("count_todo")
},[])

  return (
    <div className='todo'>
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input ref={inputRef} type="text" placeholder='Add your items' className='todo-input'/>
        <button className='todo-add-btn' onClick={()=>{add()}}>Add</button>
      </div>
      <div className="todo-list">
      {todo.map((item,index)=>{ return <TodoItems key={index} setTodo={setTodo} no={item.no} display={item.display} text={item.text}  /> })}
      </div>
    </div>
  )
}

export default Todo
