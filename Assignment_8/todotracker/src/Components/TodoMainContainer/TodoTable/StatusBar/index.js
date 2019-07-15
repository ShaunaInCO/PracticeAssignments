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
        <div className="itemsLeft">{this.props.itemsLeft} items left</div>
        <div className="filters">
          <button
            onClick={this.handleClick}
            value="all"
            className={
              this.props.filter === "all"
                ? " activeFilterButton"
                : "filterButton"
            }
          >
            All
          </button>
          <button
            onClick={this.handleClick}
            value="active"
            className={
              this.props.filter === "active"
                ? " activeFilterButton"
                : "filterButton"
            }
          >
            Active
          </button>
          <button
            onClick={this.handleClick}
            value="completed"
            className={
              this.props.filter === "completed"
                ? " activeFilterButton"
                : "filterButton"
            }
          >
            Completed
          </button>
        </div>
        <div className="clearComplete">
          {this.props.clearCompleteStatus ? (
            <span onClick={this.props.handleClearCompletedTodos}>
              Clear Completed
            </span>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}
