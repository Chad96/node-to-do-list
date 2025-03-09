const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todos');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "https://todo-frontend-sooty-gamma.vercel.app", // Allow requests from your frontend
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  credentials: true // Allow cookies and credentials
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Routes
app.use('/api/todos', todoRoutes);

// Root route to confirm the backend is working
app.get("/", (req, res) => {
  res.send("Welcome to the To-Do List Backend API!");
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));