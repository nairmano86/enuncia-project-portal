import React, { useState } from 'react';
import axios from '../api-utils/axiosInstance';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', { email, password });

      localStorage.setItem('authToken', res.data.token);
      setMessage('Login successful');

      const userRole = res.data.role; // ✅ Corrected based on backend

      if (userRole === 'employee') {
        navigate('/employee-dashboard');
      } else if (userRole === 'freelancer') {
        navigate('/freelancer-dashboard');
      } else {
        setMessage('Unknown role');
        console.error('Unknown role:', userRole);
      }

    } catch (err) {
      setMessage('Login failed');
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Login;
