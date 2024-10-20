import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Wishlist = ({ wishlistItems, removeFromWishlist }) => {
  return (
    <Container className="mt-4">
      <h1>Wishlist</h1>
      <Row>
        {wishlistItems.length === 0 ? (
          <Col>
            <p>Your wishlist is empty.</p>
          </Col>
        ) : (
          wishlistItems.map((product) => (
            <Col md={4} key={product.id}>
              <Card>
                <Link to={`/product/${product.id}`}>
                  <Card.Img variant="top" src={product.image} />
                </Link>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>₹{product.price}</Card.Text>
                  <Button variant="dark" onClick={() => removeFromWishlist(product.id)}>Remove</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Wishlist;
