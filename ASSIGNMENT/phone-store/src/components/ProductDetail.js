import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { Container, Card, Button } from 'react-bootstrap';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container className="mt-5">
      <Card>
        <Card.Img
  variant="top"
  src={product.image}
  style={{
    maxHeight: '300px',
    objectFit: 'contain',
    padding: '20px',
    backgroundColor: '#f9f9f9'
  }}
/>

        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>
            <strong>Old price:</strong> {product.price} VND<br />
            <strong>Current price:</strong> {product.currentPrice} VND
          </Card.Text>
          <Button variant="primary" onClick={() => navigate(`/edit/${id}`)}>Edit</Button>{' '}
          <Button variant="secondary" onClick={() => navigate('/products')}>Back</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductDetail;
