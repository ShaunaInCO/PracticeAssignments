import React, { Component } from "react";
import "./style.css";

class ColorGame extends Component {
  render() {
    return (
      <div>
        <label class="switch">
          <input type="checkbox" checked />
          <span class="slider round" />
        </label>
      </div>
    );
  }
}
export default ColorGame;
