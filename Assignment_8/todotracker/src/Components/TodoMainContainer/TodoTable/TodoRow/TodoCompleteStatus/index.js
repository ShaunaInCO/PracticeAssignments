import React, { Component } from "react";
import "./style.css";
export default class TodoCompleteStatus extends Component {
  handleCheckStatus = () => {
    this.props.handleTodoCompleteStatus(this.props.todoObject.id);
  };
  render() {
    return (
      <div className="completeStatus">
        <input
          type="checkbox"
          onChange={this.handleCheckStatus}
          checked={this.props.todoObject.isCompleted}
        />
      </div>
    );
  }
}
