import React from 'react';

function MenuSection() {
  return (
    <section className="menu-section">
      <h2 className="text-center mb-4">Our Menu</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="menu-card position-relative">
              <span className="label-sale">SALE</span>
              <img src="/images/menu1.jpg" alt="Margherita Pizza" />
              <div className="card-body">
                <h5 className="card-title">Margherita Pizza</h5>
                <p className="card-text">$40.00 <span style={{ color: '#ff9900' }}>$14.00</span></p>
                <button className="btn btn-block">Buy</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="menu-card position-relative">
              {/* <span className="label-new"></span> */}
              <img src="/images/menu2.jpg" alt="Mushroom Pizza" />
              <div className="card-body">
                <h5 className="card-title">Mushroom Pizza</h5>
                <p className="card-text">$23.00</p>
                <button className="btn btn-block">Buy</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="menu-card position-relative">
              <span className="label-sale">NEW</span>
              <img src="/images/menu3.jpg" alt="Hawaiian Pizza" />
              <div className="card-body">
                <h5 className="card-title">Hawaiian Pizza</h5>
                <p className="card-text">$30.00</p>
                <button className="btn btn-block">Buy</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="menu-card position-relative">
              <span className="label-sale">SALE</span>
              <img src="/images/menu4.jpg" alt="Pesto Pizza" />
              <div className="card-body">
                <h5 className="card-title">Pesto Pizza</h5>
                <p className="card-text">$40.00 <span style={{ color: '#ff9900' }}>$10.00</span></p>
                <button className="btn btn-block">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuSection;