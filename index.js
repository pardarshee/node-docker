const express = require('express');
const app = express();

const PORT = process.env.PORT || 6000; // Use Docker's assigned port if available

// Main route
app.get('/', (req, res) => {
    res.send('Hi Pardarshee');
});

// Healthcheck route
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.listen(PORT, '0.0.0.0', () => {  // Listen on all network interfaces
    console.log(`Server running on http://localhost:${PORT}`);
});
