var http = require('http');

http.createServer(function(res,req){
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');