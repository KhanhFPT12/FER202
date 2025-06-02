import React from 'react';
import './Exercises7.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Exercises7 = () => {
  return (
    <div className="container mt-4">
      <h5 className="fw-bold">Cards Columns</h5>
      <div className="row">
        <div className="col-md-4">
          <div className="card-custom card-blue">
            <img src="/images/xe.jpg" alt="Car 1" className="card-image" />
            <p className="card-text">Some text inside the first card</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-custom card-yellow">
            <img src="/images/xe.jpg" alt="Car 2" className="card-image" />
            <p className="card-text">Some text inside the first card</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-custom card-red">
            <img src="/images/xe.jpg" alt="Car 3" className="card-image" />
            <p className="card-text">Some text inside the first card</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercises7;
