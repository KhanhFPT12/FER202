import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { Container, Form, Button } from 'react-bootstrap';

function ProductForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    currentPrice: '',
    image: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit) {
      api.get(`/products/${id}`).then(res => setProduct(res.data));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      await api.put(`/products/${id}`, product);
    } else {
      await api.post('/products', product);
    }
    navigate('/products');
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '600px' }}>
      <h3>{isEdit ? 'Edit Phone' : 'Add Phone'}</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control value={product.name} onChange={e => setProduct({ ...product, name: e.target.value })} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control value={product.description} onChange={e => setProduct({ ...product, description: e.target.value })} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Old Price</Form.Label>
          <Form.Control value={product.price} onChange={e => setProduct({ ...product, price: e.target.value })} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Current Price</Form.Label>
          <Form.Control value={product.currentPrice} onChange={e => setProduct({ ...product, currentPrice: e.target.value })} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control value={product.image} onChange={e => setProduct({ ...product, image: e.target.value })} required />
        </Form.Group>
        <Button type="submit">{isEdit ? 'Update' : 'Add'}</Button>{' '}
        <Button variant="secondary" onClick={() => navigate('/products')}>Cancel</Button>
      </Form>
    </Container>
  );
}

export default ProductForm;
