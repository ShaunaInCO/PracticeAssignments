import React, { Component } from "react";
import { runInThisContext } from "vm";
import "./style.css";
export default class InputTodoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleSubmit = e => {
    if (e.key === "Enter") {
      if (this.state.value !== "") {
        this.props.handlerFromInputTodo(this.state.value);
      }
      this.setState({
        value: ""
      });
    }
  };
  render() {
    return (
      <div className="inputField">
        <div className="imageContainer">
          {this.props.length !== 0 ? (
            <img src="/assets/dropDown.png" className="arrow" />
          ) : (
            ""
          )}
        </div>
        <input
          type="text"
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
          placeholder="What needs to be done?"
          value={this.state.value}
          className="inputBox"
        />
      </div>
    );
  }
}
