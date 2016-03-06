var http = require('http');

var url = require('url');

function start(route, handler) {
	// 建立一個 http server
	var httpServer = http.createServer(ResponseFunction).listen(9998);
	function ResponseFunction(request, response) {
		var pathname = url.parse(request.url).pathname;

		if (pathname === '/favicon.ico') {
			return;
		}

      	console.log("Request for " + pathname + " received.");
     	console.log("Request url: " + request.url);

     	// 由外部丟 callBack 進來，並且將 request 的 pathname 丟入
     	route(pathname, handler, response);

		response.writeHead(200, {'Content-Type': 'text/html'})
		response.end('<h1>urlRouting example</h1>');
	}
	console.log('server is setup, and listen to port 9998');
}

exports.start = start;