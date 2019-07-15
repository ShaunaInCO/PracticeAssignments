import React, { Component } from "react";
import TodoRow from "./TodoRow";
import StatusBar from "./StatusBar";
export default class TodoTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all"
    };
  }
  createTable = () => {
    const list = [];
    var filteredtodoList = [];
    switch (this.state.filter) {
      case "all":
        filteredtodoList = this.props.todoList;
        break;
      case "active":
        filteredtodoList = this.props.todoList.filter(
          element => element.isCompleted !== true
        );
        break;
      case "completed":
        filteredtodoList = this.props.todoList.filter(
          element => element.isCompleted !== false
        );
        break;
    }
    filteredtodoList.forEach(element => {
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
  changeFilter = val => {
    this.setState({
      filter: val
    });
  };
  countItemsLeft = () => {
    var count = 0;
    const list = [];
    this.props.todoList.forEach((element, index) => {
      if (element.isCompleted === false) {
        count++;
      }
    });
    console.log(count);
    return count;
  };
  render() {
    return (
      <>
        {this.createTable()}
        {this.props.todoList.length > 0 ? (
          <StatusBar
            itemsLeft={this.countItemsLeft()}
            handleClearCompletedTodos={this.props.handleClearCompletedTodos}
            clearCompleteStatus={
              this.props.todoList.length - this.countItemsLeft() > 0
                ? true
                : false
            }
            handleFilterTable={this.changeFilter}
            filter={this.state.filter}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}
