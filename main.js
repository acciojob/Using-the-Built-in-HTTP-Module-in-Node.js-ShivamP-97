const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];

const server = http.createServer((req, res) => {
  if (!filePath) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    return res.end('Error: No file path provided.');
  }

  fs.readFile(path.resolve(filePath), 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      return res.end('Error reading file.');
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);
  });
});

if (require.main === module) {
  server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
}

module.exports = server;
