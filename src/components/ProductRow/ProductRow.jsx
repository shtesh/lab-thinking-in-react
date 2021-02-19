import React from 'react';

const ProductRow = ({ name, price, stocked }) => {
  const style = !stocked ? { color: 'red' } : null;

  return (
    <tr style={style}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
