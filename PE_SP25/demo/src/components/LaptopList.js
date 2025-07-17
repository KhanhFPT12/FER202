import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LaptopList() {
  const [laptops, setLaptops] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // 🔎 Fetch dữ liệu bằng fetch API
  useEffect(() => {
    fetch('http://localhost:3001/Laptops')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => setLaptops(data))
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  // 🔍 Lọc danh sách laptop theo tên brand hoặc model
  const filtered = laptops.filter((item) =>
    item.brand.toLowerCase().includes(search.toLowerCase()) ||
    item.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <h2 className="my-4" style={{marginLeft:'45%', fontSize: '300%'} }>Laptop List</h2>
      <input
        type="text"
        placeholder="Search by name..."
        className="form-control mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Row>
        {filtered.map((item) => ( // neu khong co filtered thi cu dung thang laptops 
          <Col md={3} key={item.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={item.image} height={180} />
              <Card.Body>
                <Card.Title>{item.brand} - {item.model}</Card.Title>
                <Card.Text>Year: {item.year}</Card.Text>
                <Card.Text>Price: {item.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/laptops/${item.id}`)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LaptopList;
