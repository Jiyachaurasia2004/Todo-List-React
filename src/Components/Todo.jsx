import React, { useEffect, useRef, useState } from 'react'
import './CSS/Todo.css'
import TodoItem from './TodoItem';

let count = 0;
const Todo = () => {
    const [todo,setTodo] = useState([]);
    const inputRef = useRef(null);

    const add = ()=>{
       setTodo([...todo,{no:count++,text:inputRef.current.value,display:""}]);
       inputRef.current.value = " ";
       localStorage.setItem("todo_count",count)
    }

    useEffect(()=>{
      setTodo(JSON.parse(localStorage.getItem("todo")))
      count = localStorage.getItem("todo_count")
    },[])

    useEffect(()=>{
       
       setTimeout(() => {
         console.log(todo);
       localStorage.setItem("todo",JSON.stringify(todo))
       }, 100);
    }),[todo]
  return (
    <div>
      <div className="todo">
      
        <div className="todo-header">To-Do List</div>
            <div className="todo-add">
                <input ref={inputRef} type="text"placeholder='Add your Task' className='todo-input' />
                <div onClick={()=>{add()}} className="todo-add-btn">ADD</div>
            </div>
            <div className="todo-list">
               {todo.map((items,index)=>{
                  return <TodoItem key={index} setTodo={setTodo} no={items.no} display={items.display} text={items.text}/>
               })}
            </div>
        
      </div>
    </div>
  )
}

export default Todo
