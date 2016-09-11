var React = require('react');

var GithubLink = React.createClass({

  _onClick: function() {
    window.open(
      'https://github.com/adutta91',
      '_blank'
    );
  },

  render: function() {
    return (
      <div>
        <img
          className="icon"
          src="app/assets/images/github.png"
          onClick={this._onClick}
        />
      </div>
    );
  }
});

module.exports = GithubLink;
