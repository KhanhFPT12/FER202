import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePassword = (password) => password.length >= 8;

function EmailPasswordForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);

    setEmailError(email && !emailValid ? "Email không hợp lệ" : "");
    setPasswordError(password && !passwordValid ? "Mật khẩu phải >= 8 ký tự" : "");

    setIsFormValid(emailValid && passwordValid);
  }, [email, password]);

  return (
    <Form className="p-3">
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={!!emailError}
        />
        <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPassword" className="mt-3">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={!!passwordError}
        />
        <Form.Control.Feedback type="invalid">{passwordError}</Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" className="mt-3" disabled={!isFormValid}>
        Gửi
      </Button>
    </Form>
  );
}

export default EmailPasswordForm;