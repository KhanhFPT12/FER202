import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { Container, Form, Button } from 'react-bootstrap';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await api.get(`/accounts?username=${username}`);
    if (res.data.length > 0) {
      alert('Username already exists');
      return;
    }
    await api.post('/accounts', { username, password });
    alert('Register success!');
    navigate('/login');
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '400px' }}>
      <h3>Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control value={username} onChange={e => setUsername(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </Form.Group>
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
}

export default Register;