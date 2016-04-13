var express = require('express');
var Unicorn = require(__dirname + '/../schema/unicorn.js');

var unicornRouter = module.exports = exports = express.Router();

unicornRouter.get('/assignments', function(req, res) {
  Unicorn.find({}, function(err, data) {

  });
});
