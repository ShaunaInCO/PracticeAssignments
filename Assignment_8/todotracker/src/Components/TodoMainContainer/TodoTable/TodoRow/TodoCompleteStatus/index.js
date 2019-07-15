import React, { Component } from "react";
import "./style.css";
export default class TodoCompleteStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkStatus: this.props.todoObject.isCompleted
    };
  }
  handleCheckStatus = () => {
    this.props.handleTodoCompleteStatus(this.props.todoObject.id);
    this.setState({
      checkStatus: !this.state.checkStatus
    });
  };
  render() {
    return (
      <div className="completeStatus">
        {!this.state.checkStatus ? (
          <div className="round" onClick={this.handleCheckStatus} />
        ) : (
          <div className="checkedRound" onClick={this.handleCheckStatus}>
            <img src="/assets/check.jpeg" className="checkedImage" />
          </div>
        )}
      </div>
    );
  }
}

{
  /* <div class="round">
<input type="checkbox" id="checkbox" />
<label for="checkbox"></label>
</div> */
}
