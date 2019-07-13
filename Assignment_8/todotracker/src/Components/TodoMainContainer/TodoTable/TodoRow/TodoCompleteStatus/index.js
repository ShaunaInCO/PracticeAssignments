import React, { Component } from "react";
import "./style.css";
export default class TodoCompleteStatus extends Component {
  handleCheckStatus = () => {
    this.props.handleTodoCompleteStatus(this.props.todoId);
  };
  render() {
    return (
      <div className="completeStatus">
        <input type="checkbox" onChange={this.handleCheckStatus} />
      </div>
    );
  }
}
