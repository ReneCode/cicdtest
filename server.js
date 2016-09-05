
var app = require('./expressServer');

var port = process.env.PORT || 3000;
app().listen(port, function() {
	console.log("# Server listen on port:", port);
});

