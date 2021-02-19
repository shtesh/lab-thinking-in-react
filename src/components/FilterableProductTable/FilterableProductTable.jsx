import React, { Component } from 'react';
//import './FilterableProductTable.css';
import SearchBar from '../SearchBar/SearchBar';
import ProductList from '../ProductList/ProductList';

import productsFromJson from '../../data.json';

class FilterableProductTable extends Component {
  state = {
    products: productsFromJson.data,
    stocked: false,
    search: '',
  };

  getStockedValue = (stockedValue) => {
    this.setState({ stocked: stockedValue });
  };

  getSearchValue = (searchValue) => {
    this.setState({ search: searchValue });
  };

  render() {
    const { products, stocked, search } = this.state;

    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          handleSearchCb={this.getSearchValue}
          handleCheckboxCb={this.getStockedValue}
        />
        <div className="table-container">
          <ProductList products={products} stocked={stocked} search={search} />
        </div>
      </div>
    );
  }
}

export default FilterableProductTable;
