import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-4">
    
     <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/slide1.jpg" alt="Slide 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/slide2.jpg" alt="Slide 2" />
        </Carousel.Item>
      </Carousel>

      {/* Danh sách hình ảnh menu */}
      <div className="row mt-4 justify-content-center">
        <div className="col-2">
          <img src="/images/menu-01.jpg" alt="Menu 1" className="img-fluid rounded-circle" />
        </div>
        <div className="col-2">
          <img src="/images/menu-02.jpg" alt="Menu 2" className="img-fluid rounded-circle" />
        </div>
        <div className="col-2">
          <img src="/images/menu-03.jpg" alt="Menu 3" className="img-fluid rounded-circle" />
        </div>
        <div className="col-2">
          <img src="/images/menu-04.jpg" alt="Menu 4" className="img-fluid rounded-circle" />
        </div>
        <div className="col-2">
          <img src="/images/menu-05.jpg" alt="Menu 5" className="img-fluid rounded-circle" />
        </div>
        <div className="col-2">
          <img src="/images/menu-06.jpg" alt="Menu 6" className="img-fluid rounded-circle" />
        </div>
     
      </div>

      <p className="text-center mt-4" style={{ color: 'red' }}>This is Home Page</p>
    </div>
  );
}

export default Home;