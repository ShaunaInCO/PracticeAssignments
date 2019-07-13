import React, { Component } from "react";
import "./style.css";
import { thisExpression } from "@babel/types";
export default class StatusBar extends Component {
  handleClick = e => {
    this.props.handleFilterTable(e.target.value);
  };
  render() {
    return (
      <div className="statusBar">
        <div>{this.props.itemsLeft} items left</div>
        <div>
          <button onClick={this.handleClick} value="all">
            All
          </button>
          <button onClick={this.handleClick} value="active">
            Active
          </button>
          <button onClick={this.handleClick} value="completed">
            Completed
          </button>
        </div>
        {this.props.clearCompleteStatus ? (
          <div onClick={this.props.handleClearCompletedTodos}>
            Clear Completed
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
