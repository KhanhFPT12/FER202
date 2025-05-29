import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Exercise4() {
  return (
    <div>
      {/* Header */}
      <header className="text-center py-4" style={{ backgroundColor: '#ed9121' }}>
        <img
          src="/images/fptlogo.jpg" // ← Đường dẫn từ thư mục public/images
          alt="FPT University"
          style={{ width: '300px', background: 'white', padding: '10px' }}
        />
        <nav className="mt-2">
          <a href="#" className="mx-2 text-white text-decoration-none">Home</a>
          <a href="#" className="mx-2 text-white text-decoration-none">About</a>
          <a href="#" className="mx-2 text-white text-decoration-none">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="text-center my-5">
        <section className="mb-4">
          <h4><strong>About</strong></h4>
          <p>This is the about section of the website.</p>
        </section>
        <section>
          <h4><strong>Contact</strong></h4>
          <p>For any inquiries, please contact us at <a href="mailto:example@example.com">example@example.com</a>.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-3" style={{ backgroundColor: '#f4c985', color: '#fff' }}>
        <small>© 2023 Website. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default Exercise4;


