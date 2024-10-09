import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import { FaBiking, FaUserTie, FaCode } from 'react-icons/fa';
import image1 from './images/feroz.png';
import image2 from './images/hasnat.png';
import image3 from './images/kabeer.png';


import './AboutUs.css'; // Custom styles

const AboutUs = () => {
  return (
    <Container className="about-us-container bg-white text-black py-5">
      <h1 className="text-center mb-4">🌟 Meet Our Team 🌟</h1>
      <Carousel className="carousel-container">
        <Carousel.Item>
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={4}>
              <Card className="team-card">
                <Card.Img
                  variant="top"
                  src={image1}
                  className="rounded-circle"
                />
                <Card.Body>
                  <Card.Title>
                    Muhammad Feroz <FaBiking />
                  </Card.Title>
                  <Card.Text>
                    Hey there, I am a bike rider. I ensure quick and reliable
                    deliveries for our customers. 🏍️
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
                  className="rounded-circle"
                />
                <Card.Body>
                  <Card.Title>
                    Hasnat Ali <FaUserTie />
                  </Card.Title>
                  <Card.Text>
                    Hey there, I am the manager. I handle all the operations on
                    this website. 📊
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
                  className="rounded-circle"
                />
                <Card.Body>
                  <Card.Title>
                    Muhammad Kabeer <FaCode />
                  </Card.Title>
                  <Card.Text>
                    Hey there, I am a web developer and designer. I make sure
                    our website works smoothly. 💻
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
