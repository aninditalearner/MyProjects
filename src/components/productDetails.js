import React from 'react';
import { useParams } from 'react-router-dom';
import products from './products';
import PageHeader from './pageHeader';
import '../css/ProductDetails.css'; // Import your CSS for the product details page

function ProductDetails() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === parseInt(productId));

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  return (
    <div>
      <PageHeader/>
    <div className="product-details-container">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-author">Author: {product.author}</p>
        <p className="product-publication">Publication Date: {product.publicationDate}</p>
        <p className="product-price">Price: ${product.price.toFixed(2)}</p>
        <div className="product-description">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
       
      </div>
      <section className="product-details-sidebar">
        <div className='product-add-to-cart'>
          <div className='type-of-book'>
            <span className='hidden-xs'>Selected type:&nbsp;</span>
            <b>Hardcover</b>
          </div>
          <div className='product-qty'>
            <span className='form-label'>Quantity:</span>
            <span className='product-quantity'>1</span>
            
          </div>
          <div class="product-price-wr">
            <p class="pr-price">${product.price.toFixed(2)}</p>
          </div>
          <div class="add-to-cart">
            <div class="addtocart-component">
	              <button class="small-button add-to-cart-button js-add-to-cart">Add to cart</button>
	          </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default ProductDetails;