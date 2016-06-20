var React = require('react');
var Typist = require('react-typist');

var animatedText = React.createClass({
  render: function() {
    return (
      <Typist className="animatedText" avgTypingSpeed={40} startDelay={2000}>
        This is test stuff to animate.  
      </Typist>
    )
  }
});

module.exports = animatedText;
