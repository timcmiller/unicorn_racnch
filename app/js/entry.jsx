var React = require('react');
var ReactDOM = require('react-dom');
var UnicornRanch = require('./components/unicorn_ranch.jsx');

ReactDOM.render(
  <UnicornRanch url="/api/unicorns" pollInterval={2000}/>,
  document.getElementById('content')
);
