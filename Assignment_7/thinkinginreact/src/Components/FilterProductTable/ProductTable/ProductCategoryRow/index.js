import React, { Component } from "react";
class ProductCategoryRow extends Component {
  render() {
    return (
      <tr>
        <b>{this.props.categoryName.category}</b>
      </tr>
    );
  }
}
export default ProductCategoryRow;
