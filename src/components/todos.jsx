import React, { useState } from "react";
import "./todos.css";
const Todos = () => {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  const add = () => {
    var array = [...todos];
    array.push(todo);
    settodos(array);
  };

  const deleteTodo = (index) => {
    var array = [...todos];
    array.splice(index, 1);
    settodos(array);
  };

  return (
    <div>
      <input
        onChange={(e) => settodo(e.target.value)}
        type="text"
        placeholder="writehere"
      />
      <button onClick={add}>ADD</button>
      {todos.map((ele, index) => (
        <div key={index} className="oneElement">
          <div>
            <p>{ele}</p>
          </div>
          <div>
            <button
              onClick={() => {
                deleteTodo(index);
              }}
              className="byn"
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
