import React, { Component } from "react";
class SearchBar extends Component {
  render() {
    return (
      <>
        <input
          type="text"
          placeholder="Search..."
          onChange={this.props.handlerFromChildText}
        />
        <br />
        <input type="checkbox" onChange={this.props.handlerFromChildCheck} />
        <span>Only show products in stock</span>
      </>
    );
  }
}
export default SearchBar;
