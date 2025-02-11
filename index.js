const http = require("http");

const PORT = process.env.PORT || 3001;
const SECRET_MESSAGE = process.env.MY_SECRET || "No env variable set";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Coolify ENV: ${SECRET_MESSAGE}\n`);
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
