var React = require('react');

var ResumeLink = React.createClass({

  _onClick: function() {
    window.open(
      'app/assets/ArjunDuttaResume2016.pdf',
      '_blank' 
    );
  },

  render: function() {
    return (
      <div>
        <img
          className="icon"
          src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1466453609/portfolio/resume.jpg"
          onClick={this._onClick}
        />
      </div>
    );
  }
});

module.exports = ResumeLink;
