var React = require('react');
var Typist = require('react-typist');

var animatedText = React.createClass({
  render: function() {
    return (
      <div>
        <Typist className="animatedText" avgTypingSpeed={60} startDelay={1000} cursor={{hideWhenDone: true, hideWhenDoneDelay: 300}}>
          <span className="greeting">Hello!</span>
        </Typist>
        <Typist className="animatedText" avgTypingSpeed={50} startDelay={2200}>
          My name is Arjun Dutta, and I'm a web developer!
        </Typist>
      </div>
    )
  }
});

module.exports = animatedText;
