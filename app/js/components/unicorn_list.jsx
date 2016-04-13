var React = require('react');

module.exports = React.createClass({

  handleUpdateLocation: function(e) {
    e.preventDefault();
    //ajax updated location

  },

  render: function() {

    var unicorns = [
      {
        name: 'brook',
        id: 1,
        location: 'barn'
      },
      {
        name: 'tim',
        id: 2,
        location: 'pature'
      }
    ];

    var unicornNodes = unicorns.map(function(unicorn) {
      return (

        <li key={unicorn.id}>
          {unicorn.name} is {unicorn.location}
          <form onSubmit={this.handleUpdateLocation}>
            <input type="text" name="location" />
          </form>
        </li>
      );
    }.bind(this));

    return (
      <ul>
        {unicornNodes}
      </ul>
    )
  }
});
