import React from 'react';

import products from './products';

function ProductDetails(props) {
  const productId = props.match.params.productId;
  const product = products.find((product) => product.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      {/* Display other product details here */}
    </div>
  );
}

export default ProductDetails;