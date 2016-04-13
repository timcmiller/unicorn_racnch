var express = require('express');
var Unicorn = require(__dirname + '/../schema/unicorn.js');
var bodyParser = require('body-parser');

var unicornRouter = module.exports = exports = express.Router();

unicornRouter.use(bodyParser.json());
unicornRouter.use(bodyParser.urlencoded({extended: true}));

unicornRouter.get('/unicorns', function(req, res) {
  Unicorn.find({}, function(err, data) {
    if(err) console.log(err);
    res.send(data);
  });
});

unicornRouter.post('/unicorns', function(req, res) {
  var newUnicorn = new Unicorn(req.body);
  newUnicorn.save(function(err, data) {
    if(err) console.log(err);

    res.send(data);
  });
});

unicornRouter.put('/unicorns/:id', function(req, res) {
  debugger;
  var unicornData = req.body;
  delete unicornData._id;
  Unicorn.update({_id: req.params.id}, unicornData, function(err) {
    if(err) throw err;

    res.send('updated!');
  });
});

unicornRouter.delete('/unicorns/:id', function(req, res) {
  Unicorn.remove({_id: req.params.id}, function(err) {
    if(err) console.log(err);

    res.json({msg: 'unicornDeleted!'});
  });
});
