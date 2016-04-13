var Unicorn = require(__dirname + '/../schema/unicorn.js');

const unicorns = [
  {
    name: 'Sprinkles',
    color: 'green',
    favFood: 'apples',
    location: 'Barn'
  },
  {
    name: 'Rainbows',
    color: 'green',
    favFood: 'apples',
    location: 'Pasture'
  },
  {
    name: 'Gold',
    color: 'green',
    favFood: 'apples',
    location: 'Barn'
  }
];

unicorns.map(function(eachUnicorn) {
  newUnicorn = new Unicorn(eachUnicorn);
  newUnicorn.save(function(err, eachJob) {
    if(err) throw err;
  });
});
