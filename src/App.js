import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer"; //parent class of all
import Addtodos from "./MyComponents/Addtodos";
import About from "./MyComponents/About";
import ContactUs from "./MyComponents/ContactUs";
import React, { useState, useEffect } from "react"; //hooks show your procedure on your dom


import {
  BrowserRouter as Router,
 Routes,
  Route,

} from "react-router-dom";

function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    // Deleting this way in react doesn't work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log("i am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
    <Router>
     
      <Header title="MyTodosList" searchBar={false} />
      <Routes>
      <Route  path="/" element = {
        
        <>
        <Addtodos addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
        </>
      }
       >
           </Route>
          <Route path="/ContactUs" element = {<ContactUs/>}>
          
          </Route>
        
          
          
          <Route  path="/about" element = {<About/>}>
          
          </Route>
        </Routes>
       <Footer />
      </Router>
    </>
  );
}

export default App;
