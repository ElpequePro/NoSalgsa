// server.js

const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors())

app.get('/shop', (req, res) => {
  res.sendFile(path.join(__dirname, 'shopGames.json'));
});

app.get('/categories', (req, res) => {
  res.sendFile(path.join(__dirname, 'categoriesGames.json'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});