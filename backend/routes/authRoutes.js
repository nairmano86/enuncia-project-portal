const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { register, login } = require('../controllers/authController');

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Token is invalid' });

    req.user = decoded;
    next();
  });
};

// Public routes
router.post('/register', register);
router.post('/login', login);

// ✅ Protected route
router.get('/secret', verifyToken, (req, res) => {
  res.json({ message: 'Access granted ✅', user: req.user });
});

module.exports = router;
