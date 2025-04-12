import React, { useState } from 'react';
import axios from '../api-utils/axios';  // Corrected relative path

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', { email, password });
      setMessage('Login successful');
      console.log(res.data); // you might want to store the token or user info
      // For example, store token in localStorage (if your backend returns a token)
      localStorage.setItem('authToken', res.data.token);
    } catch (err) {
      setMessage('Login failed');
      console.error(err.response?.data || err.message); // Log detailed error response
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
