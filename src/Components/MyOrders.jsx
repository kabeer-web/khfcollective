// MyOrders.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MyOrders = ({ cartItems }) => {
  const Container = styled.div`
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `;

  const OrderList = styled.ul`
    list-style: none;
    padding: 0;
  `;

  const OrderItem = styled.li`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
  `;

  const NoOrdersMessage = styled.div`
    text-align: center;
    margin-top: 20px;
  `;

  return (
    <Container>
      <h2>My Orders</h2>
      {cartItems.length > 0 ? (
        <OrderList>
          {cartItems.map(item => (
            <OrderItem key={item.id}>
              <div>
                <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
                <span>{item.name}</span>
              </div>
              <span>${item.price}</span>
            </OrderItem>
          ))}
        </OrderList>
      ) : (
        <NoOrdersMessage>
          <p>There are no orders placed yet.</p>
          <Link to="/">CONTINUE SHOPPING</Link>
        </NoOrdersMessage>
      )}
    </Container>
  );
};

export default MyOrders;
