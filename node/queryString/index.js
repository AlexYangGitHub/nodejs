var server = require('./server.js');
var router = require('./router.js');
var handlers = require("./requestHandlers.js");

var req = {
	'/' : handlers.start,
	'/start' : handlers.start,
	'/send' :handlers.send
};

server.start(router.router, req);

// 20160306 使用 url 模組，把 query 參數拿出來當作 訊息物件!
