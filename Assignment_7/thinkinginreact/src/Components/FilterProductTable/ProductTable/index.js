import React, { Component } from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";
class ProductTable extends Component {
  checkProducts = () => {
    const rows = [];
    var category = "";
    this.props.products.forEach(element => {
      if (element.name.indexOf(this.props.filterText) !== -1) {
        if (element.category !== category) {
          rows.push(<ProductCategoryRow categoryName={element} />);
          console.log("sdv");
        }
        if (this.props.isStockOnly === true) {
          if (element.stocked === true) {
            rows.push(<ProductRow product={element} />);
          }
        } else {
          rows.push(<ProductRow product={element} />);
        }

        category = element.category;
      }
    });
    return rows;
  };
  render() {
    return (
      <div>
        <tr>
          <td>
            <b>Name</b>
          </td>
          <td>
            <b>Price</b>
          </td>
        </tr>
        {this.checkProducts()}
      </div>
    );
  }
}
export default ProductTable;
