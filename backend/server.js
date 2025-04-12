const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors'); // ✅ Import cors
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Enable CORS for your frontend domain
app.use(cors({
  origin: 'https://portal.enuncia.work',
  credentials: true
}));

// Middleware to parse JSON
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Routes
app.use('/api/auth', authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection failed:', err));
