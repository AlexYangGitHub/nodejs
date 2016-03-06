var http = require('http');

var url = require('url');

function start(route, handler) {
	
	var httpServer = http.createServer(ResponseFunction).listen(9998);
	function ResponseFunction(request, response) {
		var pathname = url.parse(request.url).pathname;
		var queryString = url.parse(request.url).query;
		if (pathname === '/favicon.ico') {
			return;
		}

      	console.log("Request for " + pathname + " received.");
     	console.log("Request url: " + request.url);

     	route(pathname, handler, response, queryString);

		response.writeHead(200, {'Content-Type': 'text/html'})
		response.end('<h1>urlRouting example</h1>');
	}
	console.log('server is setup, and listen to port 9998');
}

exports.start = start;