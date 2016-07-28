var React = require('react');

// COMPONENTS
var GithubLink = require('./githubLink');
var LinkedinLink = require('./linkedinLink');
var ResumeLink = require('./resumeLink');

var LinksFooter = React.createClass({
  render: function() {
    return (
      <div className="linksFooter">
        <GithubLink/>
        <LinkedinLink/>
        <ResumeLink/>
      </div>
    )
  }
});

module.exports = LinksFooter;
