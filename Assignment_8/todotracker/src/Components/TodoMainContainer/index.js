import React, { Component } from "react";
import InputTodoBox from "./InputTodoBox";
import TodoTable from "./TodoTable";
export default class TodoMainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
  }
  handleTodoText = val => {
    this.setState({
      todoList: this.state.todoList.concat({
        id: this.state.todoList.length,
        text: val,
        isCompleted: false
      })
    });
  };
  handleStatus = val => {
    var todoListArray = this.state.todoList;
    for (let i = 0; i < todoListArray.length; i++) {
      if (val === todoListArray[i].id) {
        todoListArray[i].isCompleted = !todoListArray[i].isCompleted;
      }
    }
    this.setState({
      todoList: todoListArray
    });
    // console.log(todoListArray);
  };
  removeTodo = val => {
    if (window.confirm("Do you really want to remove")) {
      var todoListArray = this.state.todoList;
      var idNo = val;
      this.setState({
        todoList: todoListArray.filter(obj => obj.id !== idNo)
      });
    }
  };
  editTodo = (editedText, id) => {
    var todoListArray = this.state.todoList;

    for (let i = 0; i < todoListArray.length; i++) {
      if (id === todoListArray[i].id) {
        todoListArray[i].text = editedText;
      }
    }
    this.setState({
      todoList: todoListArray
    });
    //console.log(editedText + " " + id);
  };
  clearCompletedTodos = () => {
    var todoListArray = this.state.todoList;
    this.setState({
      todoList: todoListArray.filter(obj => obj.isCompleted !== true)
    });
  };
  render() {
    return (
      <div>
        <InputTodoBox
          handlerFromInputTodo={this.handleTodoText}
          value={this.state.value}
        />
        <TodoTable
          todoList={this.state.todoList}
          handleTodoCompleteStatus={this.handleStatus}
          handleRemoveTodo={this.removeTodo}
          handlerToEditTodo={this.editTodo}
          handleClearCompletedTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}
