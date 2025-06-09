import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Menu() {
  const pizzas = [
    {
      title: 'Margherita Pizza',
      price: '$40.00',
      image: "/images/menu1.jpg",
      sale: true,
    },
    {
      title: 'Mushroom Pizza',
      price: '$21.00',
        image: "/images/menu2.jpg",
     
    },
    {
      title: 'Hawaiian Pizza',
      price: '$30.00',
        image: "/images/menu3.jpg",
      new: true,
    },
    {
      title: 'Pesto Pizza',
      price: '$40.00',
       image: "/images/menu4.jpg",
      sale: true,
    },
  ];

  return (
    <section className="menu-section">
      <Container>
        <h2 className="menu-title">Our Menu</h2>
        <Row>
          {pizzas.map((pizza, index) => (
            <Col md={3} className="mb-4" key={index}>
              <Card className="menu-card">
                <Card.Img variant="top" src={pizza.image} className="menu-card-image" />
                <Card.Body className="menu-card-body">
                  {pizza.sale && <span className="badge badge-sale">SALE</span>}
                  {pizza.new && <span className="badge badge-new">NEW</span>}
                  <Card.Title className="menu-card-title">{pizza.title}</Card.Title>
                  <Card.Text className="menu-card-price">{pizza.price}</Card.Text>
                  <Button variant="dark" className="menu-card-button">Buy</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Menu;