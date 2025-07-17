// src/components/Login.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      setMessage("Username và Password không được để trống");
      return;
    }

    if (username === "admin" && password === "password123") {
      setMessage(`Login successfully with username: ${username}`);
      setTimeout(() => navigate("/posts"), 1000); // Điều hướng sau khi hiển thị thông báo
    } else {
      setMessage("Thông tin đăng nhập không đúng");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <input
        type="text"
        className="form-control my-2"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="form-control my-2"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleLogin}>
        Đăng nhập
      </button>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
};

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
};

export default Login;
