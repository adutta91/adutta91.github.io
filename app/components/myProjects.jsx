var React = require('react');

var MyProjects = React.createClass({

  _onClick: function() {
    alert('clicked my projects!');
  },

  render: function() {
    return (
      <div>check out <span onClick={this._onClick}>my projects</span></div>
    );
  }
});

module.exports = MyProjects;
