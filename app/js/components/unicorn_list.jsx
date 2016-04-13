var React = require('react');
var Unicorn = require('./unicorn.jsx');

module.exports = React.createClass({

  render: function() {

    var unicornNodes = this.props.unicorns.map(function(unicorn) {
      return (

        <Unicorn key={unicorn._id} unicorn={unicorn} {...this.props} />
      );
    }.bind(this));

    return (
      <ul>
        {unicornNodes}
      </ul>
    )
  }
});
