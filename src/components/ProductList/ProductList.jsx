import React from 'react';
import ProductRow from '../ProductRow/ProductRow';

const ProductList = ({ products, stocked, search }) => {
  const filteredProducts = [...products].filter((product) => {
    if (stocked) {
      return (
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        product.stocked === true
      );
    }
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  const productsList = filteredProducts.map((product) => {
    return <ProductRow key={product.id} {...product} />;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{productsList}</tbody>
    </table>
  );
};

export default ProductList;
