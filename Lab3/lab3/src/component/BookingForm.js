import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function BookingForm() {
  return (
    <section className="booking-section">
      <Container>
        <h2 className="booking-title">Book Your Table</h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form className="booking-form">
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Your Name *" className="booking-input" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control type="email" placeholder="Your Email *" className="booking-input" />
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formService">
                     <Form.Select className="booking-input">
                  <option>Select a Service</option>
                  <option value="dine">Dine In</option>
                  <option value="takeaway">Takeaway</option>
                  <option value="delivery">Delivery</option>
                </Form.Select>
                  </Form.Group>
                  </Col>

              </Row>
             
              <Form.Group className="mb-3 comment-group" controlId="formComment">
                <Form.Control as="textarea" rows={6} placeholder="Please write your comment" className="booking-input" />
              </Form.Group>
              <Button variant="warning" type="submit" className="booking-button">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BookingForm;