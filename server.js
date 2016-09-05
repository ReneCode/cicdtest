

module.exports = function() {

	var serveStatic = require('serve-static');
	var path = require('path');
	var routes = require('./routes/routes');


	var express = require('express');
	var app = express();

	app.use(serveStatic(path.join(__dirname, 'public')));
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'pug');

	routes(app);

	var http = require('http');
	var server = http.createServer(app);

	server.on('close', function() {
		console.log('# Server closed');
	});

	return server;
}