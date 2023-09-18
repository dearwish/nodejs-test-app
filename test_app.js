var express = require('express');
var app = express();
app.get('/', function (req, res) {
	  res.send('Hello World!');
});

app.get('/sendmessage', (req, res) => {
	console.log('sendmessage', req.query.msg);
	return res.status(200).send({});
});

app.listen(3001, function () {
	console.log('App started on 3001');
});
