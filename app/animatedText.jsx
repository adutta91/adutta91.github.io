var React = require('react');
var Typist = require('react-typist');

var animatedText = React.createClass({
  render: function() {
    return (
      <Typist className="animatedText" avgTypingSpeed={50} startDelay={1000}>
        <h1 className="greeting">Hello!</h1>
        My name is Arjun Dutta, and I'm a web developer!
      </Typist>
    )
  }
});

module.exports = animatedText;
