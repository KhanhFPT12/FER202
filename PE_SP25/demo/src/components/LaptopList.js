import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col, Dropdown, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LaptopList() {
  const [laptops, setLaptops] = useState([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Fetch dữ liệu bằng fetch API
  useEffect(() => {
    fetch('http://localhost:3001/Laptops')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => setLaptops(data))
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  //  Lọc danh sách laptop theo tên brand hoặc model
  const filtered = laptops //tim kiem 
    .filter(item =>
      item.brand.toLowerCase().includes(search.toLowerCase()) ||
      item.model.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'price') return Number(a.price.slice(1)) - Number(b.price.slice(1));
      if (sortBy === 'year') return b.year - a.year;
      return 0;
    });




    // phan cart
  const handleAddToCart = (item) => {
    if (item.quantity <= 0) return alert('Out of stock!');

    const existing = cart.find(cartItem => cartItem.id === item.id);
    if (existing) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleCheckout = async () => {
    for (const cartItem of cart) {
      const updatedLaptop = laptops.find(l => l.id === cartItem.id);
      if (!updatedLaptop) continue;

      const newQuantity = updatedLaptop.quantity - cartItem.quantity;
      if (newQuantity < 0) {
        alert(`Not enough goods ${updatedLaptop.brand} ${updatedLaptop.model}`);// laptop khong du so luong
        return;
      }

      await fetch(`http://localhost:3001/Laptops/${cartItem.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: newQuantity }),
      });
    }

    alert('Payment successful!'); // thanh toan thanh cong
    setCart([]);
    // reload lại laptops để cập nhật số lượng
    fetch('http://localhost:3001/Laptops')
      .then(res => res.json())
      .then(data => setLaptops(data));
  };




  return (
    <Container>
      <h2 className="my-4" style={{ marginLeft: '45%', fontSize: '300%' }}>Laptop List</h2>
      <input
        type="text"
        placeholder="Search by name..."
        className="form-control mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Dropdown className="mb-3">
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Sort By
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSortBy('price')}>Price</Dropdown.Item>
          <Dropdown.Item onClick={() => setSortBy('year')}>Year</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Row>
        {filtered.map((item) => ( // neu khong co filtered thi cu dung thang laptops 
          <Col md={3} key={item.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={item.image} height={180} />
              <Card.Body>
                <Card.Title>{item.brand} - {item.model}</Card.Title>
                <Card.Text>Year: {item.year}</Card.Text>
                <Card.Text>Price: {item.price}</Card.Text>
                <Card.Text>Quantity : {item.quantity}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/laptops/${item.id}`)}
                >
                  View Details
                </Button>
                <Button
                  variant="success"
                  onClick={() => handleAddToCart(item)}
                  disabled={item.quantity <= 0}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>




      {cart.length > 0 && (
        <div className="mt-5">
          <h4>🛒 Giỏ hàng</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Brand</th>
                <th>Model</th>
                <th>Price</th>
                <th>Số lượng mua</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>{item.brand}</td>
                  <td>{item.model}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="warning" onClick={handleCheckout}>Thanh toán</Button>
        </div>
      )}

    </Container>
  );
}

export default LaptopList;
