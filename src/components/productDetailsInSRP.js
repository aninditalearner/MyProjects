import React from 'react';
import { Link } from 'react-router-dom';
import '../css/productDetailsInSRP.css';

function productDetailsInSRP( {product} ) {
    return (
        
        <div className="product-item"> 
        <div><Link to={`/product/${product.id}`}>
            <div className='flex-container'>
            <div className='image'><img src={product.image} alt={product.name} /></div>
            <div className='product-details'>
                <h2>{product.name}</h2>
                <p>Author: {product.author}</p>
                <p>Publication Date: {product.publicationDate}</p>
                <p>Price: ${product.price.toFixed(2)}</p>
            </div>
            </div>
        </Link></div>
        </div>
        
    );
}

export default productDetailsInSRP;