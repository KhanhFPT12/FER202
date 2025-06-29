import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    agreeTerms: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });

    // Validation in real-time
    if (name === 'firstName' || name === 'lastName') {
      setErrors({ ...errors, [name]: value.trim() ? '' : 'Looks good!', [name]: '' });
    } else if (name === 'username') {
      setErrors({ ...errors, username: value.trim() ? '' : 'Please choose a username.' });
    } else if (name === 'city' || name === 'state' || name === 'zip') {
      setErrors({ ...errors, [name]: value.trim() ? '' : `Please provide a valid ${name}.` });
    } else if (name === 'agreeTerms') {
      setErrors({ ...errors, agreeTerms: !checked ? 'You must agree before submitting.' : '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      firstName: formData.firstName.trim() ? '' : 'Looks good!',
      lastName: formData.lastName.trim() ? '' : 'Looks good!',
      username: formData.username.trim() ? '' : 'Please choose a username.',
      city: formData.city.trim() ? '' : 'Please provide a valid city.',
      state: formData.state.trim() ? '' : 'Please provide a valid state.',
      zip: formData.zip.trim() ? '' : 'Please provide a valid zip.',
      agreeTerms: formData.agreeTerms ? '' : 'You must agree before submitting.',
    };
    setErrors(newErrors);

    if (Object.values(newErrors).every(error => !error)) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="container mt-4">
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                isValid={formData.firstName.trim() && !errors.firstName}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                isValid={formData.lastName.trim() && !errors.lastName}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                isValid={formData.username.trim() && !errors.username}
                isInvalid={!!errors.username}
              />
              <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                isValid={formData.city.trim() && !errors.city}
                isInvalid={!!errors.city}
              />
              <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                isValid={formData.state.trim() && !errors.state}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                isValid={formData.zip.trim() && !errors.zip}
                isInvalid={!!errors.zip}
              />
              <Form.Control.Feedback type="invalid">{errors.zip}</Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>
        <Form.Group className="mb-3" controlId="formTerms">
          <Form.Check
            type="checkbox"
            name="agreeTerms"
            label="Agree to terms and conditions"
            checked={formData.agreeTerms}
            onChange={handleChange}
            isInvalid={!!errors.agreeTerms}
          />
          <Form.Control.Feedback type="invalid">{errors.agreeTerms}</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit form
        </Button>
      </Form>
    </div>
  );
}

export default Contact;