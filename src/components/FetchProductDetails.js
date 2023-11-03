import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAuthorizationToken } from "./Auth";
import { fetchProductDetails, setAuthToken } from "./GetProductAPI"; // Import the API function
import PageHeader from "./pageHeader";
import Footer from "./Footer";
import "../css/ProductDetails.css";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageNo, setPageNo] = useState(null);

  useEffect(() => {
    // Function to fetch and set the product details
    const fetchProduct = async () => {
      try {
        // Get the authorization token
        const token = await getAuthorizationToken();
        setAuthToken(token);
        console.log(token);

        // Fetch the product details using the token
        const productDetails = await fetchProductDetails(productId);
        setProduct(productDetails);
        console.log(productDetails);
        setLoading(false);
        const variantOption = productDetails.baseOptions[0].options.find(
          (option) => option.code === productId
        );
        if (variantOption) {
          let pageNo = variantOption.classifications[0].features.find(
            (feature) => feature.code === "numberOfPages"
          ).featureValues[0].value;
          setPageNo(pageNo);
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>No product details available.</div>;
  }

  return (
    <div className="pdp">
      <PageHeader />
      <ul class="breadcrumbs" id="breadcrumbStyle">
        <li id="breadcrumbHome">
          <a href="/en-us">Home</a>
        </li>

        <li>
          <a href="/en-us/Subjects-c-subjects">Subjects</a>
        </li>
        <li>
          <a href="/en-us/General+%26+Introductory+Computer+Science-c-CS00">
            General &amp; Introductory Computer Science
          </a>
        </li>
        <li>
          <a href="/en-us/General+%26+Introductory+Computer+Science/Object+Technologies-c-CS60">
            Object Technologies
          </a>
        </li>
        <li>
          <a href="/en-us/General+%26+Introductory+Computer+Science/Object+Technologies+Java-c-CS66">
            Object Technologies - Java
          </a>
        </li>
      </ul>
      <div className="product-details-container">
        <div className="product-image">
          <img src={product.images[0].url} alt={product.images[0].altText} />
        </div>
        <div className="product-info">
          <h2 className="product-title">{product.name}</h2>
          <p class="product-author">
            <a
              class="product-authors"
              href="/en-us/search?filters%5Bauthor%5D=Barry+Burd&amp;pq=++"
            >
              Barry Burd
            </a>
          </p>
          <p>
            <span>ISBN: {product.code}</span>
            <span>March 2022</span>

            <span>{pageNo}&nbsp;Pages</span>
          </p>
          <p className="product-price">Price: {product.price.formattedValue}</p>
          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
        </div>
        <section className="product-details-sidebar">
          <div className="product-add-to-cart">
            <div className="type-of-book">
              <span className="hidden-xs">Selected type:&nbsp;</span>
              <b>{product.editionFormat}</b>
            </div>
            <div className="product-qty">
              <span className="form-label">Quantity:</span>
              <span className="product-quantity">1</span>
            </div>
            <div class="product-price-wr">
              <p class="pr-price">{product.price.formattedValue}</p>
            </div>
            <div class="add-to-cart">
              <div class="addtocart-component">
                <button class="small-button add-to-cart-button js-add-to-cart">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
