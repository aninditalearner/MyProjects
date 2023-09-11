import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import products from './products';
import ProductDetailsInSRP from './productDetailsInSRP';
import PageHedaer from './pageHeader';
import SortingDropdown from './SortingDropdown';
import Pagination from './Pagination';
import '../css/ProductSearch.css';
import AuthorFilter from './FilterPanel';

function ProductSearch() {
  const location = useLocation(); // Get the location object from react-router-dom
  const query = new URLSearchParams(location.search).get('query'); //attribute for the searched term
  const sortOption = new URLSearchParams(location.search).get('sort');  //To get the sorting option query
  const [startIndex,setStartIndex] = useState(0);
  const [endIndex,setEndIndex] = useState(1);

  //To get the products' list for which the names contain the searched term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  //Evaluating the sorted list of products from filteredProducts using the sort option
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

  // Update the items per page based on URL parameter change
  useEffect(() => {
    const urlSize = parseInt(new URLSearchParams(location.search).get('size'));
    const pageNo = new URLSearchParams(location.search).get('page'); 
    setStartIndex((pageNo - 1) * urlSize);
    setEndIndex((pageNo - 1) * urlSize + urlSize)
    }, [location.search]);

  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  //Filter section
  const authors = [...new Set(sortedProducts.map((product) => product.author))];
  
  // Initialize an array to store individual author names
  const individualAuthors = [];

  // Iterate through the author names
  for (const authorName of authors) {
    // Use regular expressions to split author names by comma
    const authors = authorName.split(/[,]/);

    // Trim and remove empty strings
    const cleanedAuthors = authors.map((author) => author.trim()).filter(Boolean);

    // Add cleaned author names to the individualAuthors array
    individualAuthors.push(...cleanedAuthors);
}

// Use a Set to get unique author names
const uniqueAuthors = [...new Set(individualAuthors)].sort((a, b) => a.localeCompare(b));

//Handling the author filter changes
const handleAuthorFilterChange = (authorName) => {
  alert("Author selected");
}

  return (
    <div>
      <PageHedaer/>
      <AuthorFilter authors={uniqueAuthors} onAuthorFilterChange={handleAuthorFilterChange}/> 
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