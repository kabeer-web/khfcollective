import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa'; // Star icons for the rating
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import MyOrders from './Components/MyOrders';
import ProductDetails from './Components/ProductDetails';
import Wishlist from './Components/Wishlist';
import Footer from './Components/Footer';
import { products } from './Components/Product';

// Category imports
import All from './Components/Categories/All';
import Plains from './Components/Categories/Plains';
import Customprint from './Components/Categories/Customprint';
import Printed from './Components/Categories/Printed';
import Polo from './Components/Categories/Polo';

const App = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showReview, setShowReview] = useState(false);
  const [rating, setRating] = useState(null);
  const plainsProducts = products.filter(product => [15, 16, 17, 18, 19].includes(product.id));
  const userId = 'sampleUserId'; // Replace with actual user ID from context/auth

  useEffect(() => {
    // Show pop-up if user has not rated before
    const hasRated = localStorage.getItem(`hasRated_${userId}`);
    if (!hasRated) {
      setShowReview(true); // Keep the modal always open until rated
    }
  }, [userId]);

  const handleRating = (rate) => {
    setRating(rate);
    localStorage.setItem(`hasRated_${userId}`, true); // Mark as rated
    setShowReview(false); // Close the pop-up after rating
  };

  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      if (!prevItems.find((item) => item.id === product.id)) {
        return [...prevItems, product];
      }
      return prevItems;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <div className="app-container">
        {/* Exclusive Offer Banner */}
        <div style={{ backgroundColor: '#FFD700', color: '#000', padding: '10px 0', textAlign: 'center', fontWeight: 'bold', fontSize: '1rem', position: 'fixed', top: '0', width: '100%', zIndex: '1000' }}>
          🎉 Exclusive Opening Offer: 50% OFF on All T-shirts! Valid from Sep 20 to Sep 30 🎉
        </div>

        <div className="main-content" style={{ paddingTop: '50px' }}>
          <NavBar cartCount={cartItems.length} />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <main role="main" className="px-4">
                  <Routes>
                    <Route path="/" element={<Home products={products} addToWishlist={addToWishlist} addToCart={addToCart} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
                    <Route path="/myorders" element={<MyOrders cartItems={cartItems} />} />
                    <Route path="/product/:id" element={<ProductDetails products={products} addToCart={addToCart} addToWishlist={addToWishlist} wishlistItems={wishlistItems} />} />
                    <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} />} />

                    {/* Categories */}
                    <Route path="/categories/all" element={<All category="all" products={products} addToWishlist={addToWishlist} />} />
                    <Route path="/categories/plains" element={<Plains category="Plains" products={plainsProducts} addToWishlist={addToWishlist} />} />
                    <Route path="/categories/printed" element={<Printed category="Printed" products={products.filter(product => product.name.includes('Printed'))} addToWishlist={addToWishlist} />} />
                    <Route path="/categories/polo" element={<Polo />} />
                    <Route path="/categories/custom-print" element={<Customprint category="Custom Print" products={products.filter(product => product.name.includes('Graphic'))} addToWishlist={addToWishlist} />} />
                  </Routes>
                </main>
              </div>
            </div>
          </div>
          <Footer />
        </div>

        {/* Rating Pop-up */}
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '10px',
          width: '250px',
          zIndex: '9999',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        }}>
          <p style={{ fontWeight: 'bold' }}>Rate Our Website</p>
          <p style={{ fontSize: '0.9rem' }}>We'd love to hear your feedback!</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
            {[...Array(5)].map((star, index) => {
              const starRating = index + 1;
              return (
                <FaStar
                  key={index}
                  size={25}
                  style={{ marginRight: 5, cursor: 'pointer' }}
                  color={starRating <= rating ? '#ffc107' : '#e4e5e9'}
                  onClick={() => handleRating(starRating)}
                />
              );
            })}
          </div>
         
        </div>
      </div>
    </Router>
  );
};

export default App;
