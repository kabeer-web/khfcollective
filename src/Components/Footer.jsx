import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import logo from './real.png'; // Import your logo image here

const Footer = () => {
  return (
    <footer className="text-center py-5" style={{ backgroundColor: '#fff', borderTop: '1px solid #ccc' }}>
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-4 d-flex flex-column align-items-center">
            <img
              src={logo}
              height="60"
              className="d-inline-block mb-3"
              alt="Kabeer E-com Logo"
            />
            <h5 className="text-uppercase mb-4" style={{ color: '#000' }}>Verified and Trusted by</h5>
            <div className="d-flex flex-column align-items-center">
              <div className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2" style={{ color: '#4CAF50' }} />
                <p className="mb-0" style={{ color: '#000' }}>Shopify</p>
              </div>
              <div className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2" style={{ color: '#4CAF50' }} />
                <p className="mb-0" style={{ color: '#000' }}>Daraz</p>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="me-2" style={{ color: '#4CAF50' }} />
                <p className="mb-0" style={{ color: '#000' }}>OLX</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h5 className="text-uppercase mb-4" style={{ color: '#000' }}>Customer Care</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#" style={{ color: '#000', textDecoration: 'none' }}>Help Center</a></li>
              <li><a href="#" style={{ color: '#000', textDecoration: 'none' }}>How to Buy</a></li>
              <li><a href="#" style={{ color: '#000', textDecoration: 'none' }}>Corporate & Bulk Purchasing</a></li>
              <li><a href="#" style={{ color: '#000', textDecoration: 'none' }}>Returns & Refunds</a></li>
              <li><a href="#" style={{ color: '#000', textDecoration: 'none' }}>Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="text-uppercase mb-4" style={{ color: '#000' }}>Follow Us</h5>
            <div className="d-flex justify-content-center mb-3">
              <a href="https://www.facebook.com/profile.php?id=61565183520270" className="me-3" style={{ color: '#000', textDecoration: 'none' }}>Facebook</a>
              <a href="https://www.instagram.com/khfcollective/" style={{ color: '#000', textDecoration: 'none' }}>Instagram</a>
            </div>
            <p className="mb-0" style={{ color: '#000' }}>Exclusive Deals and Offers!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="mb-0" style={{ color: '#000' }}>© {new Date().getFullYear()} KHF Collective. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

