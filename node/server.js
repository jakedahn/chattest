var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': "*"});
  res.end('Hello World\n');
  console.log("request done");
}).listen(3333, "0.0.0.0");


console.log('Server running at http://0.0.0.0:3333/');