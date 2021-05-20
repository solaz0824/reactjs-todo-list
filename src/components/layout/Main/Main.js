import React, { Component } from "react";
import AddTodo from "../../AddTodo/AddTodo";
import TodoList from "../../TodoList/TodoList";

import "./Main.scss";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  addNewTodo(title) {
    const currentTodo = { title: title, completed: false };

    this.setState((prevState) => ({
      todos: [prevState.todos, currentTodo],
    }));
  }

  render() {
    return (
      <div className="main">
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default Main;
