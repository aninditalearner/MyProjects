import React from 'react';
import { useParams } from 'react-router-dom'; // You need to install 'react-router-dom' package

import products from './products';

function ProductDetails() {
  const { productId } = useParams();
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