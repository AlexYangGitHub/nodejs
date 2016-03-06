function router (pathname,  handler, response) {
	console.log("Route this request: " + pathname);

	if (typeof handler[pathname] === 'function') {
		handler[pathname](response); // 執行該 handler 的函式，並把 response 帶入(之後應該會知道在幹麻) 
	} else {
		// 找不到對應的 函式
		console.log('There is no such handler' + pathname);
	}
}

exports.router = router;
