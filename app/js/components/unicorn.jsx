var React = require('react');
var Delete_Unicorn = require('./delete_unicorn.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {edit: false};
  },

  handleUpdateLocation: function(e) {

    e.preventDefault();

    var data = {_id: this.props.unicorn._id, name: this.props.unicorn.name, location: e.target[0].value};

    $.ajax({
      url: this.props.url + '/' + this.props.unicorn._id,
      dataType: 'json',
      type: 'PUT',
      data: data,
      success: function(data) {
        console.log(data);
      },
      error: function(xhr, status, err) {
      }.bind(this)
    });
  },

  cancelEdit: function(e) {
    e.preventDefault();
    this.setState({edit: false});
  },

  updateEdit: function(e) {
    e.preventDefault();
    this.setState({edit: true});
  },

  render: function() {

    return (
      <li>
        {this.props.unicorn.name} is in the {this.props.unicorn.location}
        {this.state.edit ?
          <form onSubmit={this.handleUpdateLocation}>
            <input type="text" name="location" placeholder="updateLocation?"/>
            <input type="submit" value="Update" />
            <button onClick={this.cancelEdit}>Cancel</button>
          </form>
        :
          <button onClick={this.updateEdit}>Update Location</button>
        }
        <Delete_Unicorn {...this.props} />
      </li>
    );
  }
});
