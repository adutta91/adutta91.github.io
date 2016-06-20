var React = require('react');

var LinkedinLink = React.createClass({

  _onClick: function() {
    window.open(
      'https://linkedin.com/in/arjundutta91',
      '_blank' 
    );
  },

  render: function() {
    return (
      <div>
        <img
          className="icon"
          src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1466453609/portfolio/linkedin.png"
          onClick={this._onClick}
        />
      </div>
    )
  }
});

module.exports = LinkedinLink;
