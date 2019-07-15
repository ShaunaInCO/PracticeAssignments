import React, { Component } from "react";
import "./style.css";
export default class TodoTextBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      editText: this.props.todoObject.text
    };
  }
  handleClick = () => {
    this.props.handleRemoveTodo(this.props.todoObject.id);
  };
  changeEditable = () => {
    if (this.props.todoObject.isCompleted === false) {
      this.setState({
        editable: !this.state.editable
      });
    }
    // console.log(this.props.todoObject.isCompleted);
  };
  handleEditChange = e => {
    this.setState({
      editText: e.target.value
    });
  };
  handleSubmit = e => {
    if (e.key === "Enter") {
      if (this.state.editText.trim() !== "") {
        this.props.handlerToEditTodo(
          this.state.editText,
          this.props.todoObject.id
        );
      } else {
        this.setState({
          editText: this.props.todoObject.text
        });
      }
      this.setState({
        editable: !this.state.editable
      });
    }
  };
  mouseClick = e => {
    // console.log(e.target.value);
  };
  render() {
    return (
      <div className="textBox">
        <div
          className={this.props.statusCompleted ? "strikeOfText" : ""}
          onClick={this.editTodo}
        >
          {!this.state.editable ? (
            <span onClick={this.changeEditable}>
              {this.props.todoObject.text}
            </span>
          ) : (
            <input
              type="text"
              onChange={this.handleEditChange}
              onKeyDown={this.handleSubmit}
              value={this.state.editText}
              className="editTextBox"
              onFocus={this.mouseClick}
            />
          )}
        </div>
        {!this.state.editable ? (
          <div onClick={this.handleClick} className="closeImage">
            <img src="/assets/closeImage.png" className="closeTodo" />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
