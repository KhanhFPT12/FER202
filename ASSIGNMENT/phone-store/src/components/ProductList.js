import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import '../App.css'; // thêm file CSS tùy chỉnh

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const res = await api.get('/products');
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc muốn xoá?')) {
      await api.delete(`/products/${id}`);
      fetchProducts();
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      const priceA = parseFloat(a.currentPrice.replaceAll('.', ''));
      const priceB = parseFloat(b.currentPrice.replaceAll('.', ''));
      return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    });

  return (
    <Container fluid className="product-page px-0">
      {/* Banner */}
      <div className="banner-wrapper">
        <img src="/images/banner.jpg" className="banner-img" alt="FPT Banner" />
      </div>

      <Container className="mt-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="text-primary fw-bold">📱 DKN STORE</h2>
          <Button onClick={() => navigate('/add')} variant="success">+ Thêm điện thoại</Button>
        </div>

        {/* Search & Sort */}
        <div className="d-flex justify-content-between mb-4">
          <Form.Control
            type="text"
            placeholder="🔍 Tìm theo tên điện thoại..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ width: '60%' }}
          />
          <Form.Select
            style={{ width: '38%' }}
            onChange={e => setSortOrder(e.target.value)}
            value={sortOrder}
          >
            <option value="asc">Sắp xếp giá tăng dần</option>
            <option value="desc">Sắp xếp giá giảm dần</option>
          </Form.Select>
        </div>

        {/* Product Grid */}
        <Row>
          {filteredProducts.map(product => (
            <Col md={4} key={product.id} className="mb-4">
              <Card className="product-card h-100">
                <Card.Img
                  variant="top"
                  src={product.image}
                  height="280px"
                  style={{ objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-danger fw-bold">{product.name}</Card.Title>
                  <Card.Text className="mb-1">
                    💸 <s>{product.price}</s> → <span className="text-success fw-semibold">{product.currentPrice} VND</span>
                  </Card.Text>
                  <div className="mt-auto d-flex justify-content-between">
                    <Button variant="info" as={Link} to={`/products/${product.id}`}>Chi tiết</Button>
                    <Button variant="danger" onClick={() => handleDelete(product.id)}>Xoá</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default ProductList;
