import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Cart from './Components/Cart';
import MyOrders from './Components/MyOrders';
import ProductDetails from './Components/ProductDetails';
import Wishlist from './Components/Wishlist';
import Footer from './Components/Footer';
import { products } from './Components/Product'; // Import product data

// Category imports
import All from './Components/Categories/All';
import Watches from './Components/Categories/Watches';
import Plains from './Components/Categories/Plains';
import Customprint from './Components/Categories/Customprint';
import Printed from './Components/Categories/Printed';
import Polo from './Components/Categories/Polo';

const App = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate login status

  const plainsProducts = products.filter(product => [15, 16, 17, 18, 19].includes(product.id));

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
        <div style={{
          backgroundColor: '#FFD700', /* Yellow Background */
          color: '#000', /* Black Text */
          padding: '10px 0',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '1rem',
          position: 'fixed',
          top: '0',
          width: '100%',
          zIndex: '1000'
        }}>
          🎉 Exclusive Opening Offer: 50% OFF on All T-shirts! Valid from Sep 24 to Sep 30 🎉
        </div>

        <div className="main-content" style={{ paddingTop: '50px' }}> {/* Adjusted paddingTop to account for the fixed banner */}
          <NavBar cartCount={cartItems.length} />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <main role="main" className="px-4">
                  <Routes>
                    <Route path="/" element={<Home products={products} addToWishlist={addToWishlist} addToCart={addToCart} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> {/* Pass setIsLoggedIn to Login */}
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} isLoggedIn={isLoggedIn} />} />
                    <Route path="/myorders" element={<MyOrders cartItems={cartItems} />} />
                    <Route path="/product/:id" element={<ProductDetails products={products} addToCart={addToCart} addToWishlist={addToWishlist} wishlistItems={wishlistItems} isLoggedIn={isLoggedIn} />} />
                    <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} />} />
                    <Route path="/categories/all" element={<All category="all" products={products} addToWishlist={addToWishlist} />} />
                    <Route path="/categories/plains" element={<Plains category="Plains" products={plainsProducts} addToWishlist={addToWishlist} />} />
                    <Route path="/categories/printed" element={<Printed category="Printed" products={products.filter(product => product.name.includes('Printed'))} addToWishlist={addToWishlist} />} />
                    <Route path="/categories/watches" element={<Watches />} />
                    <Route path="/categories/polo" element={<Polo />} />
                    <Route path="/categories/custom-print" element={<Customprint category="Custom Print" products={products.filter(product => product.name.includes('Graphic'))} addToWishlist={addToWishlist} />} />
                  </Routes>
                </main>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
