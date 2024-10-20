import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './HomePage.css'; // Ensure you import the CSS file

const HomePage = ({ products }) => {
  return (
    <div className="home-page">
      <Container className="mt-5">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">KHF COLLECTIVE CLOTHS</h1>
            <p className="hero-text">
              Timeless Fashion, Modern Flair, Explore Our Collection <span className="highlighted-text">👕</span>
            </p>
            <Link to="/shop" className="cta-btn">Shop Now</Link>
          </div>
        </div>

        <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4 mt-4">
          {products.map((product) => (
            <Col key={product.id} className="mb-4">
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card className="product-card">
                  <div className="card-image">
                    <Card.Img variant="top" src={product.image} />
                  </div>
                  <Card.Body>
                    <Card.Title className="product-title">{product.name}</Card.Title>
                    <div className="price-info">
                      <p className="regular-price">Regular price: PKR {product.regularPrice}</p>
                      <h5 className="sale-price">Sale price: PKR {product.salePrice}</h5>
                      <p className="save-amount">Save PKR {product.saveAmount}</p>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
