var express = require('express');
var fs = require('fs');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

fs.readFile('data1.txt', function(err, str) {
	app.get('/*', function(req, res) {
		res.header("content-Type", "text/html");
		res.render("index", {
			data: str
		});
	});
});

var server = app.listen(7304, function() {
	console.log('Express server listening on port ' + server.address().port);
});
