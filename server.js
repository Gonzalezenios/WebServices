const http = require('http');

const server = http.createServer((req, res) => {
  res.send('Hi, I am a http express server from Node.js' );
});

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Http server listen `);  
});