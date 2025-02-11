require('dotenv').config(); // Load .env if needed

const express = require('express');
const app = express();

// Access environment variables from Coolify
const PORT = process.env.PORT || 3000;  // Use Coolify's PORT or default to 3000
const API_KEY = process.env.API_KEY;    // Example: Fetch an API key from Coolify

// Middleware or Routes (if needed)
app.get('/', (req, res) => {
    res.send(`Coolify API Key: ${API_KEY}`);
});

// Export app for index.js
module.exports = app;
