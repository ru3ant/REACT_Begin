import React from "react";
import ReactDOM from "react-dom";

const divRoot = document.getElementById("root");

function ToDoItem() {
  return <span>DrinkCoffee!!</span>;
}
function ToDoList() {
  return (
    <ul>
      <li>
        <ToDoItem />
      </li>
      <li>
        <ToDoItem />
      </li>
      <li>
        <ToDoItem />
      </li>
    </ul>
  );
}

ReactDOM.render(<ToDoList />, divRoot);
