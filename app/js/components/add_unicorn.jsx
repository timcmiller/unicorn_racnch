var React = require('react');

module.exports = React.createClass({

  getInitialState: function() {
    return {add: false};
  },

  addUnicorn: function(e) {

    e.preventDefault();

    var data = {name: e.target[0].value, location: e.target[1].value, favFood: e.target[2].value, color: e.target[3].value};

    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: data,
      success: function(data) {
        console.log(data);
      },
      error: function(xhr, status, err) {
      }.bind(this)
    });
  },

  cancelAdd: function(e) {
    e.preventDefault();
    this.setState({add: false});
  },

  updateAdd: function(e) {
    e.preventDefault();
    this.setState({add: true});
  },

  render: function() {
    return (
      <div>
        {this.state.add ?
          <form onSubmit={this.addUnicorn}>
            <label forHTML="name">Name</label>
            <input type="text" name="name" placeholder="Name"/>

            <label forHTML="location">Location</label>
            <input type="text" name="location" placeholder="Location"/>

            <label forHTML="favFood">Favorite Food</label>
            <input type="text" name="favFood" placeholder="Favorite Food"/>

            <label forHTML="color">Color</label>
            <input type="text" name="color" placeholder="Color"/>

            <input type="submit" value="Update" />
            <button onClick={this.cancelAdd}>Cancel</button>
          </form>
        :
          <button onClick={this.updateAdd}>Add Unicorn!</button>
        }
      </div>
    );
  }

});
