import React, { Component } from "react";
import InputTodoBox from "./InputTodoBox";
export default class TodoMainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TodoList: []
    };
  }
  handleTodoText = val => {
    this.setState(
      {
        TodoList: this.state.TodoList.concat({
          id: this.state.TodoList.length,
          text: val,
          completed: true
        })
      },
      () => {
        console.log(this.state.TodoList);
      }
    );
  };
  render() {
    return (
      <div>
        <InputTodoBox
          handlerFromInputTodo={this.handleTodoText}
          value={this.state.value}
        />
      </div>
    );
  }
}
