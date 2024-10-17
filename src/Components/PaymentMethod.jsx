import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const PaymentMethod = ({ handlePayment }) => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePayment(paymentInfo);
    // Optionally, you can clear the form fields after submission
    setPaymentInfo({
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    });
  };

  return (
    <div>
      <h3>Payment Information</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="cardNumber">
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter card number"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="expiryDate">
          <Form.Label>Expiry Date</Form.Label>
          <Form.Control
            type="text"
            placeholder="MM/YYYY"
            name="expiryDate"
            value={paymentInfo.expiryDate}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="cvv">
          <Form.Label>CVV</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter CVV"
            name="cvv"
            value={paymentInfo.cvv}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">Submit Payment</Button>
      </Form>
    </div>
  );
};

export default PaymentMethod;
