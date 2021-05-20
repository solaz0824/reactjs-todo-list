import React from "react";

import "./AddTodo.scss";

export default function AddTodo() {
  function submitTodo(event) {
    event.defaultPrevented();

    addNewTodo(event.target.value);
  }

  return (
    <div className="addTodo">
      <form id="todoInput" onSubmit={submitTodo}>
        <input type="text" placeholder="Add TODO" />
      </form>
    </div>
  );
}
