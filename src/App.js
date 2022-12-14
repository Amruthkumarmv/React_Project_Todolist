import logo from './logo.svg';
import './App.css';
import Header from './Mycomponents/Header';
import { Footer } from './Mycomponents/Footer';
import { Todo } from './Mycomponents/TodoItem';
import { Todos } from './Mycomponents/Todos';
import { Addtodo } from "./Mycomponents/Addtodo";
import { About } from './Mycomponents/About';


import { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route
} from "react-router-dom";


function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];

  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("i am on delete", todo);

    setTodos(todos.filter((e) => {
      return e != todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("i am adding this todo", title, desc);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    // console.log(myTodo);

  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
          <Route exact path="/" element={(
            <>
              <Addtodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>)} >
          </Route>
          <Route exact path="/about" element={<About />}>

          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
