import React, { useState } from 'react';
import { Form, Button, Modal, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; 

function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
 const navigate = useNavigate();
  const handleLogin = () => {
    fetch('http://localhost:3001/UserAccounts')
      .then(res => res.json())
      .then(users => {
        const found = users.find(user => user.username === username && user.password === password);
        if (found) {
          setUser(found);
          alert(`Welcome, ${found.username} login Successful!`);
          setShowModal(true);
           navigate('/laptops');

        } else {
          alert("Invalid username or password!");

        }
      })
      .catch(err => console.error("Login fetch error:", err));
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '400px' }}>
      <h3>Login</h3>
      <Form>
        <Form.Group controlId="formUsername" className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Button onClick={handleLogin}>Login</Button>
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Body>Welcome, {username}! Login successful!</Modal.Body>
      </Modal>
    </Container>
  );
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired
};

export default Login;
