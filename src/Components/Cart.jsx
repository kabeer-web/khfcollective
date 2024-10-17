import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    emailAddress: '',
    address: '',
    country: ''
  });
  const [message, setMessage] = useState('');
  const shippingFee = 200; // Static shipping fee
  const total = cartItems.reduce((acc, item) => acc + item.price, 0) + shippingFee;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    const emailData = {
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      emailAddress: formData.emailAddress,
      address: formData.address,
      country: formData.country,
      productName: cartItems.map(item => item.name).join(', '),
      productPrice: cartItems.map(item => item.price).join(', '),
      productSize: cartItems.map(item => item.selectedSize).join(', '),
      productImage: cartItems.map(item => item.image).join(', '),
    };

    emailjs.send('service_ko94f4c', 'template_61w3hss', emailData, 'L_nT0Z0Vqx-XM1a3J')
      .then(() => {
        setMessage('Email sent successfully');
        setIsModalOpen(false);
        setIsSuccessModalOpen(true);
        clearCart();
      })
      .catch(() => {
        setMessage('Error sending email');
      });
  };

  // Return statement inside the function.
  return (
    <div className="container my-5">
      <Row>
        <Col xs={12} md={8}>
          <h2 className="text-center">Your Cart 🛒</h2>
          {cartItems.length > 0 ? (
            <ul className="list-group">
              {cartItems.map(item => (
                <li key={item.id} className="list-group-item">
                  <img src={item.image} alt={item.name} style={{ width: '80px' }} />
                  <h5>{item.name}</h5>
                  <p>Rs. {item.price}</p>
                  <Button variant="light" onClick={() => removeFromCart(item.id)}>Remove</Button>
                  <Button variant="dark" onClick={() => setIsModalOpen(true)}>Purchase</Button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No items in the cart</p>
          )}
        </Col>

        <Col xs={12} md={4}>
          <h4>Order Summary</h4>
          <p>Total: Rs. {total}</p>
        </Col>
      </Row>

      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Purchase Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlePurchase}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group controlId="formEmailAddress">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" name="emailAddress" value={formData.emailAddress} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" name="address" value={formData.address} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" name="country" value={formData.country} onChange={handleInputChange} required />
            </Form.Group>
            <Button variant="dark" type="submit">Submit</Button>
          </Form>
          {message && <p>{message}</p>}
        </Modal.Body>
      </Modal>

      <Modal show={isSuccessModalOpen} onHide={() => setIsSuccessModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your order has been placed successfully!</p>
          <p>Thank you for your purchase!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={() => setIsSuccessModalOpen(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
