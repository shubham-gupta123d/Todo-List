import React from 'react'

const Todoitem = ({todo, onDelete }) => {
  return (
    <>
   
    <ul>
    <div>
     <h4>{todo.title}</h4>
     <p>
{todo.desc}
     </p>
     <button className="btn  btn-sm btn-danger" onClick={()=> {onDelete(todo)}} >Delete</button>
    </div>
    </ul>
    <hr />
    </>
  )
}

export default Todoitem


