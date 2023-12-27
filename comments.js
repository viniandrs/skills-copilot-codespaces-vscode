// create web server with node.js
// run: node comments.js

var http = require('http');
var url = require('url');
var items = [];

var server = http.createServer(function(req, res) {
    console.log('Request received.');
	}
);

server.listen(3000); 
