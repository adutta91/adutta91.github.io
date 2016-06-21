var React = require('react');

var AboutMe = React.createClass({

  _onClick: function() {
    alert('clicked about me!');
  },

  render: function() {
    return (
      <div>learn more <span onClick={this._onClick}>about me</span></div>
    );
  }
});

module.exports = AboutMe;
