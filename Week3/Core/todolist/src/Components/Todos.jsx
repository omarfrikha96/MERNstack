import React from "react";

const Todos = (props) => {
    const todoClasse = [];
  if (props.todo.complete) {
    todoClasse.push("line-through");
  }
  return (
    <div>
      <input
        onChange={(e) => {
          props.checkFunction(props.index);
        }}
        checked={props.todo.complete}
        type="checkbox"
      />
      <span className={todoClasse.join(" ")}>{props.todo.text}</span>
      <button
        style={{
          margin: "10px",
          padding: "10px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "5px",
        }}
        onClick={() => {
          props.deleteFunction(props.index);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Todos;
