var React = require('react');
var Unicorn_List = require('./unicorn_list.jsx');
var Add_Unicorn = require('./add_unicorn.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {unicorns: []};
  },

  componentDidMount: function() {
    this.loadUnicornsFromServer();
    setInterval(this.loadUnicornsFromServer, this.props.pollInterval);
  },

  loadUnicornsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(unicorns) {
        console.log('success');
        this.setState({unicorns: unicorns});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render:function() {
    return (
      <section>
        <Unicorn_List {...this.props} unicorns={this.state.unicorns} />
        <Add_Unicorn {...this.props} />
      </section>
    )
  }
});
