import React, { Component } from "react";
import { runInThisContext } from "vm";

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
      this.props.handlerFromInputTodo(this.state.value);
      this.setState({
        value: ""
      });
    }
  };
  render() {
    return (
      <>
        <input
          type="text"
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
          placeholder="What needs to be done?"
          value={this.state.value}
        />
      </>
    );
  }
}
