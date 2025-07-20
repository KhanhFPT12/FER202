import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductForm from './components/ProductForm';

function App() {
  const isLoggedIn = localStorage.getItem('user');

  return (
    <Router>
      <Routes>
        {/* Luôn redirect về /login nếu chưa đăng nhập */}
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Các route chỉ truy cập được nếu đã login */}
        <Route path="/products/:id" element={isLoggedIn ? <ProductDetail /> : <Navigate to="/login" />} />
        <Route path="/edit/:id" element={isLoggedIn ? <ProductForm /> : <Navigate to="/login" />} />
        <Route path="/add" element={isLoggedIn ? <ProductForm /> : <Navigate to="/login" />} />
        <Route path="/products" element={isLoggedIn ? <ProductList /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
