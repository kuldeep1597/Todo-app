import React, { useEffect, useState } from "react";

import "./App.css";
import Form from "./components/form";
import List from "./components/list";

function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  // const inputHandler=()=>{
  //   console.log('inputpass')
  // }
  useEffect(() => {
    getlocal();
  }, []);
  useEffect(() => {
    localTodo();
  }, [todo]);
  const localTodo = () => {
    localStorage.setItem("todo", JSON.stringify(todo));
  };
  const getlocal = () => {
    setTodo(JSON.parse(localStorage.getItem("todo")));
  };
  return (
    <div className="App">
      <header>Daily To-Do List</header>
      <Form text={text} todo={todo} setTodo={setTodo} setText={setText} />
      <List todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
