import React, { Component } from "react";
import "./style.css";
export default class TodoTextBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      editText: this.props.todoText
    };
  }
  handleClick = () => {
    this.props.handleRemoveTodo(this.props.todoId);
  };
  changeEditable = () => {
    this.setState({
      editable: !this.state.editable
    });
  };
  handleEditChange = e => {
    this.setState({
      editText: e.target.value
    });
  };
  handleSubmit = () => {
    if (e.key === "Enter") {
      this.props.handlerToEditTodo(this.state.editText, this.props.todoId);
    }
  };
  render() {
    return (
      <div className="textBox">
        <div
          className={this.props.statusCompleted ? "strikeOfText" : ""}
          onClick={this.editTodo}
        >
          {!this.state.editable ? (
            <span onClick={this.changeEditable}>{this.props.todoText}</span>
          ) : (
            <input
              type="text"
              onChange={this.handleEditChange}
              onKeyDown={this.handleSubmit}
              value={this.state.editText}
              className="editTextBox"
            />
          )}
        </div>
        <div onClick={this.handleClick}>
          <img src="/assets/closeImage.png" className="closeTodo" />
        </div>
      </div>
    );
  }
}
