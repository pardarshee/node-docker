// Load environment variables only in local development
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();

// Access environment variables from Coolify
const PORT = process.env.PORT || 6000; // Ensure this matches Dockerfile
const API_KEY = process.env.API_KEY || 'Not set';

// Middleware or Routes
app.get('/', (req, res) => {
    res.send(`Coolify API Key: ${API_KEY}`);
});

// Health Check (for Coolify)
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

module.exports = app;
