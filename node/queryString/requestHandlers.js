var querystring = require('querystring'); 
var history = [];

function start(response, query) {
    console.log("Handler 'start' is started.");
    console.log("Query string is: " + query);

}
  
function send(response, query) {
    console.log("Handler 'send' is started.");
    console.log("Query string is: " + query);

    var parseString = querystring.parse(query);
    var obj = {
    	'm': parseString.m,
    	'u':parseString.u,
    	'timeStamp' :  (new Date()).getTime()
    };
    
    history.push(obj);
    //  印出每一筆資訊
   	console.log('debug:');
    history.forEach(function(data){
    	console.log('message: ' + data.m + ' user: ' + data.u + ' timeStamp: ' + data.timeStamp);
    });
}

exports.start = start;
exports.send = send;