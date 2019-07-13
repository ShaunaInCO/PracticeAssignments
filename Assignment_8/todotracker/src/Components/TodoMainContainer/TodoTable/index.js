import React, { Component } from "react";
import TodoRow from "./TodoRow";
import StatusBar from "./StatusBar"
export default class TodoTable extends Component {
  createTable = () => {
    const list = [];
    this.props.todoList.forEach((element, index) => {
      list.push(
        <TodoRow
          todoObject={element}
          handleTodoCompleteStatus={this.props.handleTodoCompleteStatus}
          handleRemoveTodo={this.props.handleRemoveTodo}
          handlerToEditTodo={this.props.handlerToEditTodo}
          key={element.id}
        />
      );
    });
    return list;
  };
  render() {
    return <>
    {this.createTable()}
    <St>
    </St>;
  }
}