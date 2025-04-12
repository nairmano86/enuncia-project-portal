import React, { useState } from 'react';
import axios from 'api-utils/axios.js'; // Correct import

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'freelancer'
  });
  const [loading, setLoading] = useState(false); // New loading state
  const [message, setMessage] = useState(''); // New message state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setMessage(''); // Clear any previous messages
    try {
      const res = await axios.post('/auth/register', formData);
      setMessage('Registered successfully!');
      console.log(res.data);
      setFormData({ name: '', email: '', password: '', role: 'freelancer' }); // Clear form after successful submission
    } catch (err) {
      setMessage('Registration failed!');
      console.error(err.response?.data || err.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Freelancer Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <select name="role" onChange={handleChange} value={formData.role}>
            <option value="freelancer">Freelancer</option>
            <option value="employee">Employee</option>
          </select>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      <p>{message}</p> {/* Display success or error message */}
    </div>
  );
}

export default Register;
