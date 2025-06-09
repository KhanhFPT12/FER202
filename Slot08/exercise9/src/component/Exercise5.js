import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Exercise5 = () => {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header bg-warning text-center py-3">
        <div className="container">
          <img src="/images/fptlogo.jpg" alt="FPT Logo" className="header-logo" />
          <nav className="mt-3">
            <a href="#home" className="nav-link mx-2">Home</a>
            <a href="#about" className="nav-link mx-2">About</a>
            <a href="#contact" className="nav-link mx-2">Contact</a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="container my-5">
        <section id="about">
          <h2>About</h2>
          <p>This is the about section of the website.</p>
        </section>
        <section id="contact" className="mt-4">
          <h2>Contact</h2>
          <p>For any inquiries, please contact us at example@example.com.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer bg-light text-center py-3">
        <p>© 2023 Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Exercise5;