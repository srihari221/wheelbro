import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', { email, password });
      if (response.status === 200) {
        const username = response.data.username; // Replace with actual response data
        navigate('/Home', { state: { username } });
      }
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="box">
        {/* Removed the close button */}
        <h2 className="logintitle">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="iptxt"
              required
            />
          </div>
          <div className="mb-3">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="iptxt"
              required
            />
          </div>
          
          <button type="submit" className="btn1">Login</button>
          <div className="words">
            Don't have an account? <a href="/Signup" className="btn2">Register</a>
          </div>
        </form>
      </div>
      <div className="auth-bg"></div>
    </div>
  );
};

export default Login;
