import React from 'react';
import { Carousel, Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaBiking, FaUserTie, FaCode } from 'react-icons/fa';
import image1 from './images/feroz.png';
import image2 from './images/hasnat.png';
import image3 from './images/kabeer.png';

import './AboutUs.css'; // Custom styles

const AboutUs = () => {
  return (
    <Container className="about-us-container">
      <h1>
        🌟 Meet Our Team 🌟
        <Badge className="ml-2" variant="success">
          Proudly from Pakistan 🇵🇰
        </Badge>
      </h1>
      <p className="intro-text">
        We're passionate individuals dedicated to bringing you the best experience, right from the heart of Pakistan!
      </p>
      <Carousel className="carousel-container">
        <Carousel.Item>
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={4}>
              <Card className="team-card">
                <Card.Img
                  variant="top"
                  src={image1}
                  className="card-img"
                />
                <Card.Body>
                  <Card.Title>
                    Muhammad Feroz <FaBiking />
                    <Badge variant="light" className="ml-2">Rider</Badge>
                  </Card.Title>
                  <Card.Text>
                    Hey there, I am a bike rider ensuring quick deliveries across Lahore and Karachi. 🏍️
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={4}>
              <Card className="team-card">
                <Card.Img
                  variant="top"
                  src={image2}
                  className="card-img"
                />
                <Card.Body>
                  <Card.Title>
                    Hasnat Ali <FaUserTie />
                    <Badge variant="dark" className="ml-2">Manager</Badge>
                  </Card.Title>
                  <Card.Text>
                    I manage operations and customer satisfaction across Pakistan, keeping everything running smoothly. 📊
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={4}>
              <Card className="team-card">
                <Card.Img
                  variant="top"
                  src={image3}
                  className="card-img"
                />
                <Card.Body>
                  <Card.Title>
                    Muhammad Kabeer <FaCode />
                    <Badge variant="info" className="ml-2">Developer</Badge>
                  </Card.Title>
                  <Card.Text>
                    I develop and maintain this platform, ensuring it’s always smooth and secure. Based in Islamabad. 💻
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default AboutUs;
