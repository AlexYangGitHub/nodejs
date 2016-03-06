var http = require('http');

var httpServer = http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'})
	response.end('<h1>Doing unimportant things well is not important</h1>');
});

httpServer.listen(9998);

console.log('Hey, You  make it , the first node.js Server !');

// 建立第一個 node js application，主要是特過 http 模組，建立 server (createServer)
