var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
var unicornRouter = require(__dirname + '/routes/unicorn_routes.js');
var mongoose = require('mongoose');

// mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/unicorn_dev');

app.use(express.static(__dirname + '/build/'));

app.use('/api', unicornRouter);

app.use(function(req, res) {
  res.status(404).send('could not file file');
});

app.listen(port, function() {
  console.log('server up on port ' + port + '.');
});

