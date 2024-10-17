import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const HomePage = ({ products }) => {
  return (
    <div style={{ backgroundColor: '#fff', color: '#000', fontFamily: 'Roboto, sans-serif', marginTop: '100px' }}>
      <Container className="mt-5">
        <div className="hero-section" style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#000', marginBottom: '10px' }}>
            KHF COLLECTIVE CLOTHS
          </h1>
          <p className="hero-text" style={{ fontSize: '1.5rem', color: '#333', margin: '0 auto', maxWidth: '80%' }}>
            Timeless Fashion, Modern Flair, Explore Our Collection <span className="highlighted-text">👕</span>
          </p>
        </div>

        <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4 mt-4">
          {products.map((product) => (
            <Col key={product.id} className="mb-4">
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card className="product-card" style={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <Card.Img variant="top" src={product.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <Card.Body>
                    <Card.Title style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#000' }}>
                      {product.name}
                    </Card.Title>
                    <p style={{ marginBottom: '0.5rem', color: '#777', textDecoration: 'line-through' }}>
                      Regular price: PKR {product.regularPrice}
                    </p>
                    <h5 style={{ marginBottom: '0.5rem', color: '#ff0000' }}>
                      Sale price: PKR {product.salePrice}
                    </h5>
                    <p style={{ marginBottom: '0.5rem', color: '#000' }}>Save PKR {product.saveAmount}</p>
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
