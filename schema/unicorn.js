var mongoose = require('mongoose');

var unicornSchema = new mongoose.Schema({
  name: {type: String, required: true},
  color: {type: String, required: true},
  favFood: {type: String, required: true},
  location: {type: String, required: true}
});

module.exports = exports = mongoose.model('Unicorn', unicornSchema);
