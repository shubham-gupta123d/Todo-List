import React, { useState } from 'react'

const Addtodos = ({addTodo}) => {
const [title, setTitle ] = useState("");
const [desc, setDesc ] = useState("");


const submit =(e)=>{
  e.preventDefault();
if (!title || !desc){
  alert("Title or description can not be blank")

}
else {
addTodo(title,desc);
setTitle("")
setDesc("")
}} //not a blank todo add in todos app

  return (
    <div className = "container my-3 " >
        <h3>Add a Todos</h3>
        <form onSubmit = {submit}>
  <div className="mb-3">
    <label htmlFor="Title" className="form-label">Todo Title</label>
    <input type="Text" value = {title}  onChange ={(e) => setTitle(e.target.value)} 
    className="form-control" id="Title" aria-describedby="emailHelp"/>

  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Description</label>
    <input type="Text" value = {desc} onChange = {(e)=> setDesc(e.target.value)}
    className="form-control" id="desc"/>
  </div>

  {/* change a color of button btn-sm btn success */}

  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>   
</form>
      
    </div>
  )
}

export default Addtodos
