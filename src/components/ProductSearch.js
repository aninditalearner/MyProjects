import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import products from './products';
import ProductDetailsInSRP from './productDetailsInSRP';
import PageHedaer from './pageHeader';
import SortingDropdown from './SortingDropdown';
import Pagination from './Pagination';
import '../css/ProductSearch.css';

function ProductSearch() {
  const location = useLocation(); // Get the location object from react-router-dom
  const query = new URLSearchParams(location.search).get('query');
  const sortOption = new URLSearchParams(location.search).get('sort'); 
  const pageNo = new URLSearchParams(location.search).get('page'); 
  const size = new URLSearchParams(location.search).get('size'); 
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'price') {
      return a.price - b.price;
    } else if (sortOption === 'author') {
      return a.author.localeCompare(b.author);
    }
    return 0;
  });

  const startIndex = (pageNo - 1) * size;
  const endIndex = startIndex + size;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  return (
    <div>
      <PageHedaer/>
      <div className='flex-content'>
      <SortingDropdown/>
      <Pagination total= {sortedProducts.length} />
      </div>
      <ul className='list'>
        {currentProducts.map((product) => (
          <li key={product.id}>
            <ProductDetailsInSRP product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSearch;