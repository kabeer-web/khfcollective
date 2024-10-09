import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { products } from '../Product'; // Import product data
import './watches.css'; // Corrected relative path for Watches CSS

function Watches() {
  // Filter products to include watches, girl products, cuti products, and gfbf products
  const filteredProducts = products.filter(product => 
    (product.id >= 20 && product.id <= 29) || // GFBF products
    (product.id >= 44 && product.id <= 57) || // Girl products
    (product.id >= 30 && product.id <= 36)    // Cuti products
  );

  return (
    <div>
      <h1 className="heading">Watches Collection</h1>
      <div className="card-container">
        {filteredProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="card"> {/* Use Link for navigation */}
            <img src={product.image} alt={product.name} className="card-image" />
            <h2>{product.name}</h2>
            <p>Regular Price: PKR {product.regularPrice}</p>
            <p>Sale Price: <strong>PKR {product.salePrice}</strong></p>
            <p>Save PKR {product.regularPrice - product.salePrice}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Watches;
