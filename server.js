const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {  // Ensure Coolify can check this route
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Docker!\n');
});

// Bind to 0.0.0.0 to be accessible from outside the container
server.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
