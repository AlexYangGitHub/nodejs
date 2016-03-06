function router (pathname,  handler, response, queryString) {
	console.log("Route this request: " + pathname);

	if (typeof handler[pathname] === 'function') {
		handler[pathname](response, queryString);
	} else {
		console.log('There is no such handler' + pathname);
	}
}

exports.router = router;
