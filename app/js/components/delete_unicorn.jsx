var React = require('react');

module.exports = React.createClass({

  getInitialState: function() {
    return {delete: false};
  },

  deleteUnicorn: function(e) {

    e.preventDefault();

    var data = {_id: this.props.unicorn._id};

    $.ajax({
      url: this.props.url + '/' + this.props.unicorn._id,
      dataType: 'json',
      type: 'DELETE',
      data: data,
      success: function(data) {
        console.log(data);
      },
      error: function(xhr, status, err) {
      }.bind(this)
    });
  },

  cancelDelete: function(e) {
    e.preventDefault();
    this.setState({delete: false});
  },

  updateDelete: function(e) {
    e.preventDefault();
    this.setState({delete: true});
  },

  render: function() {
    return (
      <div>
        {this.state.delete ?
          <form onSubmit={this.deleteUnicorn}>

            <input type="submit" value="ARE YOU SURE, YOU MURDRER!" />
            <button onClick={this.cancelDelete}>SPARE THEIR LIFE!!</button>

          </form>
        :
          <button onClick={this.updateDelete}>MURDER UNICORN!</button>
        }
      </div>
    );
  }

});
