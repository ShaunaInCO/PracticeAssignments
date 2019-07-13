import React, { Component } from "react";
import "./style.css";
import TodoCompleteStatus from "./TodoCompleteStatus";
import TodoTextBody from "./TodoTextBody";
export default class TodoRow extends Component {
  render() {
    return (
      <div className="todoRow">
        <TodoCompleteStatus
          todoId={this.props.todoObject.id}
          handleTodoCompleteStatus={this.props.handleTodoCompleteStatus}
        />
        <TodoTextBody
          todoText={this.props.todoObject.text}
          todoId={this.props.todoObject.id}
          statusCompleted={this.props.todoObject.isCompleted}
          handleRemoveTodo={this.props.handleRemoveTodo}
        />
      </div>
    );
  }
}
