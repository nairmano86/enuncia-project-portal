const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const authenticate = require('../middleware/authMiddleware');

// Public routes
router.post('/register', register);
router.post('/login', login);

// ✅ Protected route
router.get('/secret', authenticate, (req, res) => {
  res.json({
    message: 'You have accessed a protected route!',
    user: req.user,
  });
});

module.exports = router;
