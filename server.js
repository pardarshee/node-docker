// const http = require("http");

// const PORT = process.env.PORT || 4000; // Use environment variable if available
// const HOST = "0.0.0.0"; // Ensure it binds to all interfaces

// const server = http.createServer((req, res) => {
//   if (req.url === "/health") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ status: "ok" }));
//   } else {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello, Docker!\n");
//   }
// });

// server.listen(PORT, HOST, () => {
//   console.log(`Server running on http://${HOST}:${PORT}`);
// });
