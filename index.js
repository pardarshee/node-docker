const app = require('./server'); // Import the app instance

const PORT = process.env.PORT || 6000; // Match Dockerfile EXPOSE port

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
