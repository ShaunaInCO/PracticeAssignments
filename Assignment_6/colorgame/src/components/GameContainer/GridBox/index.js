import React, { Component } from "react";
import "./style.css";

class GridBox extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      boxStyle: ""
    };
  }
  handleClick = e => {
    var classCSS = " ";
    if (this.state.boxStyle == "boxOn") {
      if (this.props.array.indexOf(this.props.value + 1) != -1) {
        classCSS = "clickedBox ";
        this.props.handlerFromParentSuccess(this.props.value + 1);
      } else {
        classCSS = "unClickedBox";
        this.props.handlerFromParentFail();
      }
      this.setState({
        boxStyle: classCSS
      });
    } else {
    }
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ boxStyle: "boxOn" });
    }, 3000);
    // console.log(this.props.value)
  }

  render() {
    return (
      <div
        className={this.state.boxStyle + " " + this.props.cssStyle}
        value={this.props.value}
        onClick={this.handleClick}
      />
    );
  }
}
export default GridBox;
