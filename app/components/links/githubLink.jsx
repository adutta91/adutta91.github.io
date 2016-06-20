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
          src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1466453609/portfolio/github.png"
          onClick={this._onClick}
        />
      </div>
    );
  }
});

module.exports = GithubLink;
