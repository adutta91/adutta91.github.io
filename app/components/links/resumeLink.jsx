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
          src="app/assets/images/resume.png"
          onClick={this._onClick}
        />
      </div>
    );
  }
});

module.exports = ResumeLink;
