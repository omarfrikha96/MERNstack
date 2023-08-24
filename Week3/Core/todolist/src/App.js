import React, { useState } from "react";
import Todos from "./Components/Todos";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState([]);

  const submitFunction = (e) => {
    e.preventDefault();
    if (todo.length === 0) {
      return;
    }
      const item = {
        text: todo,
        complete: false,
      }
      setListTodo([...listTodo, item]);
    setTodo("");
  };



  const deleteFunction = (deleted) => {
    const filtredList = listTodo.filter((element, index) => {
      return index !== deleted;
    });
    setListTodo(filtredList);
  };

  
  function checkFunction(index) {
    const obj = {...listTodo[index]};

    obj.complete = !obj.complete;

    setListTodo([...listTodo.slice(0, index), obj]
    .concat(listTodo.slice(index + 1)));
  }


  return (
    <div className="App">
      <form onSubmit={submitFunction}>
        <input
          type="text"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          value={todo}
        />
        <br />
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px",
            width: "80px",
            margin: "10px",
            borderRadius: "5px",
          }}
        >
          Add
        </button>
      </form>

      {listTodo.map((todo, index) => {
        return (
          <Todos
            key={index}
            todo={todo}
            checkFunction={checkFunction}
            index={index}
            deleteFunction={deleteFunction}
          />
        );
      })}
    </div>
  );
}

export default App;
