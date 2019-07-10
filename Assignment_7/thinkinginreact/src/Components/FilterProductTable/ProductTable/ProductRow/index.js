import React, { Component } from "react";
class ProductRow extends Component {
  checkStock = () => {
    const name = this.props.product.stocked ? (
      this.props.product.name + "     "
    ) : (
      <span style={{ color: "red" }}>{this.props.product.name + "    "}</span>
    );
    return name;
  };
  returnCost = () => {
    const price = this.props.product.price;
    return price;
  };

  render() {
    return (
      <tr>
        <td>{this.checkStock()}</td>
        <td>{this.returnCost()}</td>
      </tr>
    );
  }
}
export default ProductRow;
