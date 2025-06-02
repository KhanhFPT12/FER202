import React from 'react';

function BookingForm() {
  return (
    <section className="booking-form">
      <h2>Book Your Table</h2>
      <div className="container">
        <div className="form-row">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Name *" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Your Email *" />
          </div>
          <div className="form-group">
            <select className="form-control">
              <option>Select a Service</option>
              <option>Service 1</option>
              <option>Service 2</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            rows="5"
            placeholder="Please write your comment"
          ></textarea>
        </div>
        <button type="submit" className="btn">Send Message</button>
      </div>
    </section>
  );
}

export default BookingForm;