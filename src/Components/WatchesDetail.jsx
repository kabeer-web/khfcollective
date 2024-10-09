import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import './WatchesDetail.css'; // Ensure this CSS file exists

const WatchesDetail = ({ products, addToCart, addToWishlist, wishlistItems = [] }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  // Initialize states
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const shippingFee = 200; // Static shipping fee

  // Handle case if product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  // Update wishlist status
  const isWishlist = wishlistItems.some(item => item.id === product.id);
  if (isInWishlist !== isWishlist) {
    setIsInWishlist(isWishlist);
  }

  const handleAddToCart = () => {
    addToCart(product); // Add product directly without size selection
    showPopup('Added to cart!');
  };

  const handleAddToWishlist = () => {
    if (isInWishlist) {
      showPopup('Removed from wishlist!');
    } else {
      addToWishlist(product);
      showPopup('Added to wishlist!');
    }
    setIsInWishlist(!isInWishlist);
  };

  const showPopup = (message) => {
    setPopupMessage(message);
    setTimeout(() => {
      setPopupMessage('');
    }, 3000);
  };

  return (
    <div className="watches-details-container">
      <h1 className="product-title">{product.name || 'Product Name Not Available'}</h1>
      <img className="product-image" src={product.image || '/default-image.png'} alt={product.name} />
      <p className="product-description">{product.description || 'No description available.'}</p>
      <p className="product-price">
        Price: PKR {product.price || 'Price Not Available'} <br />
        Shipping Fee: PKR {shippingFee} <br />
        <strong>Total: PKR {product.price ? product.price + shippingFee : 'Price Not Available'}</strong>
      </p>

      {/* Removed size selection section */}

      <div className="button-container">
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          <FaShoppingCart /> Add to Cart
        </button>
        <button
          className={`add-to-wishlist-button ${isInWishlist ? 'active' : ''}`}
          onClick={handleAddToWishlist}
        >
          <FaHeart className={`heart-icon ${isInWishlist ? 'active' : ''}`} />
          {isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
        </button>
      </div>

      {popupMessage && <div className="popup">{popupMessage}</div>}
      
      {/* Unique Section for Watches */}
      <div className="watch-features">
        <h3>Features:</h3>
        <ul>
          <li>Material: Stainless Steel</li>
          <li>Movement: Quartz</li>
          <li>Water Resistance: 50m</li>
        </ul>
      </div>
      
      <div className="style-tips">
        <h3>Style Tips:</h3>
        <p>Pair this watch with formal attire for a sophisticated look.</p>
      </div>
    </div>
  );
};

export default WatchesDetail;
