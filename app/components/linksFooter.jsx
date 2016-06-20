var React = require('react');

// COMPONENTS
var GithubLink = require('./links/githubLink');
var LinkedinLink = require('./links/linkedinLink');
var ResumeLink = require('./links/resumeLink');

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
