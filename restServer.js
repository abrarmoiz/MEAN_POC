var http = require('http');
var join = require('path').join;
var fs = require('fs');

console.log("Starting REST Service ....");
var server = http.createServer(function(req,res){
	switch(req.method){
		case 'POST': res.end("In Post"); break;
		case 'GET': res.end("In Get");break;
		
	}
});
server.listen(3030);