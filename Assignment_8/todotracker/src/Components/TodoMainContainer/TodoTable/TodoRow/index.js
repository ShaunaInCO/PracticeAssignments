import React, { Component } from "react";
import "./style.css";
import TodoCompleteStatus from "./TodoCompleteStatus";
import TodoTextBody from "./TodoTextBody";
export default class TodoRow extends Component {
  render() {
    return (
      <div className="todoRow">
        <TodoCompleteStatus
          todoObject={this.props.todoObject}
          handleTodoCompleteStatus={this.props.handleTodoCompleteStatus}
        />
        <TodoTextBody
          todoObject={this.props.todoObject}
          statusCompleted={this.props.todoObject.isCompleted}
          handleRemoveTodo={this.props.handleRemoveTodo}
          handlerToEditTodo={this.props.handlerToEditTodo}
        />
      </div>
    );
  }
}
