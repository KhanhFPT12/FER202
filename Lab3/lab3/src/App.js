import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Menu from './component/Menu';
import BookingForm from './component/BookingForm';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Menu />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;