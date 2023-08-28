import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import products from './products';
import ProductDetailsInSRP from './productDetailsInSRP';
import PageHedaer from './pageHeader';
import '../css/ProductSearch.css';

function ProductSearch() {
  const location = useLocation(); // Get the location object from react-router-dom
  const query = new URLSearchParams(location.search).get('query');
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <PageHedaer/>
      <ul className='list'>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <ProductDetailsInSRP product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSearch;