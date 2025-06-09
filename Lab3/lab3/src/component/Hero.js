import React from 'react';
import { Container } from 'react-bootstrap';

function Hero() {
  return (
    <div className="hero">
      <Container>
        <img
          src="/images/pizza1.jpg"
          alt="Neapolitan Pizza"
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1 className="hero-title">Neapolitan Pizza</h1>
          <p className="hero-subtitle">If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</p>
        </div>
      </Container>
    </div>
  );
}

export default Hero;