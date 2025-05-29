import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Exercise3() {
  const cellStyle = {
    fontSize: '1.25rem',
    padding: '1.25rem',
    backgroundColor: '#d3d3d3',
    textAlign: 'center'
  };

  return (
    <div className="container my-4">

      {/* Header */}
      <div className="p-5 mb-4 bg-secondary bg-opacity-10 border">
        <h1 className="display-6 fw-bold">Let's test the grid!</h1>
      </div>

      {/* Navigation */}
      <ul className="nav mb-4">
        <li className="nav-item">
          <a className="nav-link active text-primary" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-primary" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-primary" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-muted" href="#">Disabled</a>
        </li>
      </ul>

      {/* Grid layout */}
      {/* Row 1 */}
      <div className="row g-0">
        <div className="col border" style={cellStyle}>First col</div>
        <div className="col border" style={cellStyle}>Second col</div>
      </div>

      {/* Row 2 */}
      <div className="row g-0">
        <div className="col border" style={cellStyle}>col</div>
        <div className="col border" style={cellStyle}>col</div>
        <div className="col border" style={cellStyle}>col</div>
      </div>

      {/* Row 3 */}
      <div className="row g-0">
        <div className="col border" style={cellStyle}>col</div>
        <div className="col border" style={cellStyle}>col</div>
        <div className="col border" style={cellStyle}>col</div>
        <div className="col border" style={cellStyle}>col</div>
      </div>

      {/* Footer */}
      <div className="text-center p-3 mt-4" style={{ backgroundColor: '#d9caca' }}>
        <h4 className="fw-bold">Created by ABC!</h4>
      </div>
    </div>
  );
}

export default Exercise3;
