import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import products from "./products";
import ProductDetailsInSRP from "./productDetailsInSRP";
import PageHedaer from "./pageHeader";
import SortingDropdown from "./SortingDropdown";
import Pagination from "./Pagination";
import "../css/ProductSearch.css";
import AuthorFilter from "./FilterPanel";
import Footer from "./Footer";

function ProductSearch() {
  const location = useLocation(); // Get the location object from react-router-dom
  const query = new URLSearchParams(location.search).get("query"); //attribute for the searched term
  const sortOption = new URLSearchParams(location.search).get("sort"); //To get the sorting option query
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(1);
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  // Update the items per page based on URL parameter change
  useEffect(() => {
    const urlSize = parseInt(new URLSearchParams(location.search).get("size"));
    const pageNo = new URLSearchParams(location.search).get("page");
    setStartIndex((pageNo - 1) * urlSize);
    setEndIndex((pageNo - 1) * urlSize + urlSize);
    const authors = new URLSearchParams(window.location.search).getAll(
      "author"
    );
    setSelectedAuthors(authors);
  }, [location.search]);

  //To get the products' list for which the names contain the searched term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  let filteredProductsWithFacets;
  if (selectedAuthors.length === 0) {
    // No author filter applied, show all products
    filteredProductsWithFacets = [...filteredProducts];
  } else {
    filteredProductsWithFacets = filteredProducts.filter((product) => {
      const productAuthors = product.author
        .split(",")
        .map((author) => author.trim());
      return productAuthors.some((author) => selectedAuthors.includes(author));
    });
  }

  //Evaluating the sorted list of products from filteredProducts using the sort option
  const sortedProducts = [...filteredProductsWithFacets].sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "price") {
      return a.price - b.price;
    } else if (sortOption === "author") {
      return a.author.localeCompare(b.author);
    }
    return 0;
  });

  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  //Filter section
  const authors = [
    ...new Set(filteredProducts.map((product) => product.author)),
  ];
  const individualAuthors = [];

  // Iterate through the author names
  for (const authorName of authors) {
    const authors = authorName.split(/[,]/);
    const cleanedAuthors = authors
      .map((author) => author.trim())
      .filter(Boolean);
    individualAuthors.push(...cleanedAuthors);
  }

  // Use a Set to get unique author names
  const uniqueAuthors = [...new Set(individualAuthors)].sort((a, b) =>
    a.localeCompare(b)
  );

  // Count the number of products for each author
  const counts = {};
  uniqueAuthors.forEach((author) => {
    const count = products.filter((product) =>
      product.author.includes(author)
    ).length;
    counts[author] = count;
  });

  //Handling the author filter changes
  const handleAuthorFilterChange = (authorName) => {
    setSelectedAuthors(authorName);
  };

  return (
    <div>
      <PageHedaer />
      <div className="searchResultPage">
        <div class="page-breadcrumb">
          <ul class="breadcrumb" data-testid="breadcrumb">
            <li data-testid="home-page">
              <a href="/">Home</a>
            </li>
            <li data-testid="current-page">
              <span>Search Results</span>
            </li>
          </ul>
        </div>
        <div class="search-result-container-header">
          <div class="search-result-content-tab-header ">
            <div class="nav" id="nav-tab" role="tablist">
              <button
                data-testid="product-tab"
                class="nav-link active"
                id="nav-products-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-products"
                type="button"
                role="tab"
                aria-controls="nav-products"
                aria-selected="true"
              >
                <span>Products</span>
              </button>
              <a
                data-testid="content-tab"
                class="nav-link"
                href={`https://www.wiley.com/en-us/content-search?cq=${query}&amp;pq=${query}`}
                aria-selected="false"
                tabindex="-1"
                role="tab"
              >
                Content
              </a>
            </div>
          </div>
          <div class="search-result-page-header">
            <h1 data-testid="header-msg">Search Results for "{query}"</h1>
          </div>
        </div>
        <div class="container body-content srp">
          <div class="author-filter">
            <AuthorFilter
              authors={uniqueAuthors}
              authorsWithCount={counts}
              selectedAuthors={selectedAuthors}
              onAuthorFilterChange={handleAuthorFilterChange}
            />
          </div>
          <div class="product-cards">
            <div className="right-panel">
              <SortingDropdown />
              <ul className="list">
                {currentProducts.map((product) => (
                  <li key={product.id}>
                    <ProductDetailsInSRP product={product} />
                  </li>
                ))}
              </ul>
              <div className="flex-content">
                <Pagination total={sortedProducts.length} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ProductSearch;
