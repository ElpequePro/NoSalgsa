// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001; // You can change this to any port you prefer

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint to get all users
app.get('/api', (req, res) => {
  fs.readFile(path.join(__dirname, 'jocs.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read data' });
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData.users);
  });
});

// Endpoint to get a user by ID
app.get('/api/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  fs.readFile(path.join(__dirname, 'jocs.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read data' });
    }
    const jsonData = JSON.parse(data);
    const user = jsonData.users.find(u => u.id === userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});