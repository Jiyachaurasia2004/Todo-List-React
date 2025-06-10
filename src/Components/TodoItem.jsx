import React from 'react'
import tick from './Assets/tick.jpg'
import not_tick from './Assets/not_tick.jpg'
import croess from './Assets/croess.png'
import './CSS/Todoitem.css'
const TodoItem = ({no,display,text,setTodo}) => {
  const deletetodo =(no)=>{
    let data = JSON.parse(localStorage.getItem("todo"));
    data = data.filter((todo)=>todo.no !==no);
    setTodo(data);
  }
  const toggle = (no) =>{
    let data = JSON.parse(localStorage.getItem("todo"));
    for(let i=0; i<data.length; i++){
      if(data[i].no===no){
        if(data[i].display ===""){
           data[i].display ="line-through"
        }
        else{
          data[i].display="";
        }
        break;
      }
      
    }
    setTodo(data);
  }
  return (
    <div className="todoitem">
        <div className={`todoitems-container${display}`} onClick={()=>{toggle(no)}}>
          {display ===""? <img src={tick} alt="" />:<img src={not_tick} alt="" />}
           
            
        </div>
        <div className="todoitems-text">{text}</div>
        <img className='cross-icon' width="20px" onClick={()=>{deletetodo(no)}} src={croess} alt="" />
    </div>
  )
}

export default TodoItem
