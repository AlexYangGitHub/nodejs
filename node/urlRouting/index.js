var server = require('./server.js');
var router = require('./router.js');
var handlers = require("./requestHandlers.js");

var req = {
	'/' : handlers.start,
	'/start' : handlers.start,
	'/send' :handlers.send
};
// 把 requestHandlers 傳給，server 的 start ，再由 sever 的 start 傳給 rounter 去使用
server.start(router.router, req);

// 有 3 個模組再搭配使用，server 建立連線，並負責把 response 的參數的 pathname 往下傳，主要是利用 pathname 決定是使用哪一個 api 處理事件。
// router 分配事件給對應的 handlers 處理
// handlers 處理由 router 分發的事件
// 一切都由 index.js 往下傳遞，模組的參數。
// 問題：會出現 兩個  request ，多一個是 favicon.ico  http://stackoverflow.com/questions/19225299/prevent-favicon-ico-from-making-a-second-request-node-js
// 使用 if 判斷是去擋掉 favicon.ico request (用 return 擋掉)