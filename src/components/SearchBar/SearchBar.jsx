import React, { Component } from 'react';
import './SearchBar.css';
import ProductList from '../ProductList/ProductList';

class SearchBar extends Component {
  state = {
    searchTerm: '',
    stocked: false,
  };

  handleChangeSearch = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () =>
      this.props.handleSearchCb(this.state.searchTerm)
    );
  };

  handleChangeCheckbox = () => {
    this.setState({ stocked: !this.state.stocked }, () =>
      this.props.handleCheckboxCb(this.state.stocked)
    );
  };

  render() {
    const { searchTerm, stocked } = this.state;
    return (
      <div>
        <p>Search</p>
        <input
          className="input-text"
          type="text"
          name="searchTerm"
          value={searchTerm}
          onChange={this.handleChangeSearch}
        />
        <div>
          <input
            type="checkbox"
            name="stocked"
            id="stocked"
            checked={stocked}
            onChange={this.handleChangeCheckbox}
          />
          <label htmlFor="stocked">Only Show Products on Stock</label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
