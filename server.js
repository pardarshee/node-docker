const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Docker!\n');
  }
});

const PORT = 3000; // Keep it as 3000 inside the container
const HOST = '0.0.0.0'; // Ensure it binds to all interfaces

server.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
