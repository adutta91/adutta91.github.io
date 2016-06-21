var React = require('react');

// COMPONENTS
var AboutButtonsIndex = require('./aboutButtonsIndex');

var AboutMe = React.createClass({
  render: function() {
    return (
      <div key="aboutPane" className="detailPane">
       <div key="aboutTitle" className="detailTitle">About Me</div>
       <AboutButtonsIndex key="aboutIndex"/>
      </div>
    );
  }
});

module.exports = AboutMe;
