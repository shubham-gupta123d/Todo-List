import React from 'react'
import Todoitem from './Todoitem'  //import todositem.js parent class of todoitem
const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin :"40px auto"
  }
  return (
<div className="container" style = {myStyle} >
    <h3 className="">Todos List</h3>
    {props.todos.length===0?"No Todos to display": 
    props.todos.map((todo)=>{
return(
  
 <Todoitem todo = {todo} key ={todo.sno} onDelete= {props.onDelete} />  
 
)
    })
  }
 

</div>
  )
}

export default Todos

