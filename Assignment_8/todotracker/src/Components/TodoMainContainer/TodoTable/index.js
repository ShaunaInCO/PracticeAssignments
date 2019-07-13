import React, { Component } from "react";
import TodoRow from "./TodoRow";
export default class TodoTable extends Component {
  createTable = () => {
    const list = [];
    this.props.todoList.forEach(element => {
      list.push(
        <TodoRow
          todoObject={element}
          handleTodoCompleteStatus={this.props.handleTodoCompleteStatus}
          handleRemoveTodo={this.props.handleRemoveTodo}
        />
      );
    });
    return list;
  };
  render() {
    return <>{this.createTable()}</>;
  }
}
