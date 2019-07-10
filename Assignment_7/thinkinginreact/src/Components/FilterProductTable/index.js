import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
class FilterProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      isStockOnly: false
    };
  }
  handleChange = e => {
    this.setState({
      filterText: e.target.value
    });
  };
  handleCheck = e => {
    this.setState({
      isStockOnly: !this.state.isStockOnly
    });
  };
  render() {
    const products = [
      {
        category: "Sporting Goods",
        price: "$49.99",
        stocked: true,
        name: "Football"
      },
      {
        category: "Sporting Goods",
        price: "$9.99",
        stocked: true,
        name: "Baseball"
      },
      {
        category: "Sporting Goods",
        price: "$29.99",
        stocked: false,
        name: "Basketball"
      },
      {
        category: "Electronics",
        price: "$99.99",
        stocked: true,
        name: "iPod Touch"
      },
      {
        category: "Electronics",
        price: "$399.99",
        stocked: false,
        name: "iPhone 5"
      },
      {
        category: "Electronics",
        price: "$199.99",
        stocked: true,
        name: "Nexus 7"
      }
    ];
    return (
      <>
        <SearchBar
          handlerFromChildText={this.handleChange}
          handlerFromChildCheck={this.handleCheck}
        />
        <ProductTable
          products={products}
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
        />
      </>
    );
  }
}
export default FilterProductTable;
