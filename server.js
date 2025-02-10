const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Docker!\n');
  }
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
