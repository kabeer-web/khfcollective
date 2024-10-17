import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Dropdown, Form, Button } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaList, FaHeart, FaSearch } from 'react-icons/fa';
import logo from './real.png';
import './NavBar.css'

const NavBar = ({ cartCount }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    } else {
      setIsLoggedIn(false);
      setUsername('');
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
    navigate('/login'); // Redirect to login page after logout
  };

  const handleCartClick = () => {
    if (!isLoggedIn) {
      navigate('/signup'); // Redirect to signup page if not logged in
    } else {
      navigate('/cart'); // Redirect to cart if logged in
    }
  };

  return (
    <>
      <Navbar expand="lg" className={`${isScrolled ? 'sticky-top' : ''}`} style={{ backgroundColor: '#fff' }}>
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img src={logo} height="60" className="d-inline-block align-top" alt="Kabeer E-com Logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle 
  aria-controls="basic-navbar-nav" 
  className="custom-toggler"
>
  <span className="custom-toggler-icon">
    <FaList />
  </span>
</Navbar.Toggle>


          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="align-items-center">
              <Nav.Link as={NavLink} to="/" style={{ color: '#000', marginRight: '15px' }}>Home</Nav.Link>
              {/* Dropdown for Categories */}
              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  id="categories-dropdown"
                  style={{ color: '#000', marginRight: '15px', backgroundColor: '#fff', border: 'none' }}
                >
                  Categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/categories/all">All</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/categories/plains">Plains</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/categories/printed">Printed</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/categories/polo">Polo</Dropdown.Item>
                
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link as={NavLink} to="/about" style={{ color: '#000', marginRight: '15px' }}>About Us</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" style={{ color: '#000', marginRight: '15px' }}>Contact</Nav.Link>
            </Nav>

            {/* Search Bar */}
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search for products..."
                className="mr-2"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="outline-dark" type="submit">
                <FaSearch />
              </Button>
            </Form>

            <Nav className="align-items-center">
              {isLoggedIn ? (
                <Dropdown align="end">
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-basic"
                    style={{
                      color: '#000',
                      backgroundColor: '#fff',
                      border: 'none',
                      borderRadius: '20px',
                      padding: '5px 15px',
                      fontWeight: 'bold',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                      marginRight: '15px'
                    }}
                  >
                    {username}
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ backgroundColor: '#fff', border: 'none', borderRadius: '4px' }}>
                    <Dropdown.Item as={NavLink} to="/myorders" style={{ color: '#000' }}>
                      <FaList style={{ marginRight: '10px' }} /> My Orders
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/wishlist" style={{ color: '#000' }}>
                      <FaHeart style={{ marginRight: '10px' }} /> Wishlist
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout} style={{ color: '#000' }}>
                      <FaUser style={{ marginRight: '10px' }} /> Logout
                    </Dropdown.Item>
                    <Dropdown.Divider />
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login" style={{ color: '#000', marginRight: '15px' }}><FaUser /> Login</Nav.Link>
                  <Nav.Link as={Link} to="/signup" style={{ color: '#000', marginRight: '15px' }}><FaUser /> Signup</Nav.Link>
                </>
              )}

              {/* Shopping Cart */}
              <Nav.Link onClick={handleCartClick} style={{ color: '#000', cursor: 'pointer', position: 'relative' }}>
                <FaShoppingCart size={24} />
                <span
                  className="badge bg-secondary"
                  style={{
                    position: 'absolute',
                    top: '-5px',
                    right: '-10px',
                    backgroundColor: '#000',
                    color: '#fff',
                    borderRadius: '50%',
                    padding: '3px 7px',
                    fontSize: '12px'
                  }}
                >
                  {cartCount}
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
