var http = require('http');

var url = require('url');

function start() {
	
	var httpServer = http.createServer(ResponseFunction).listen(9998);

	function ResponseFunction(request, response) {
		// 取得 url 名稱
		var pathname = url.parse(request.url).pathname;
		console.log('request from :' + pathname );
		response.writeHead(200, {'Content-Type': 'text/html'})
		response.end('<h1>Doing unimportant things well is not important</h1>');
	}
	console.log('server is setup, and listen to port 9998');
}


exports.start = start;

