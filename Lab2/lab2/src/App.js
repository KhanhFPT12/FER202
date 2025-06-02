import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MenuSection from './components/MenuSection';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <MenuSection />
      <BookingForm />
    </div>
  );
}

export default App;