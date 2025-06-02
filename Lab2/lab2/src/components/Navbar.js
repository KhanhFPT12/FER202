import React from 'react';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        {/* Logo */}
        <div className="navbar-left col-md-4">
          <a className="navbar-brand" href="/">Pizza House</a>
        </div>

        {/* Menu */}
        <div className="navbar-center col-md-4">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Tìm kiếm */}
        <div className="navbar-right col-md-4">
          <form className="d-flex">
            <input
              className="form-control search-bar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">🔍</button>
          </form>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;