import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './All.css';

const All = ({ products }) => {
  return (
    <div className="all-products">
      <Container className="mt-5">
        <div className="hero-section">
          <h1 className="heading">ALL PRODUCTS 👕🎽👚</h1>
        </div>

        <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4 mt-4">
          {products.map((product) => (
            <Col key={product.id} className="mb-4">
              <Link to={`/product/${product.id}`} className="card">
                <div className="card-image-container">
                  <img src={product.image} alt={product.name} className="card-image" />
                </div>
                <h2 className="card-title">{product.name}</h2>
                <p className="card-regular-price">Regular Price: PKR {product.regularPrice}</p>
                <p className="card-sale-price">
                  Sale Price: <strong>PKR {product.salePrice}</strong>
                </p>
                <p className="card-save">Save PKR {product.regularPrice - product.salePrice}</p>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default All;
