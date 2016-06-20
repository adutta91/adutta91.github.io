var React = require('react');
var Typist = require('react-typist');

var animatedText = React.createClass({

  getInitialState: function() {
    return ({
      nextLine: false
    });
  },

  nextLine: function() {
    this.setState({nextLine: true})
  },

  getNextLine: function() {
    if(this.state.nextLine) {
      return (
        <Typist className="animatedText" avgTypingSpeed={50} startDelay={750}>
          My name is Arjun, and I'm a web developer. Nice to meet you!
        </Typist>
      );
    } else {
      return (<div/>);
    }
  },

  render: function() {
    var nextLineCallback = this.nextLine;
    return (
      <div>
        <Typist className="animatedText"
                avgTypingSpeed={60}
                startDelay={1000}
                onTypingDone={function() { window.setTimeout(nextLineCallback, 750)}}
                cursor={{hideWhenDone: true, hideWhenDoneDelay: 750}}>
          <span className="greeting">Hello!</span>
        </Typist>
        {this.getNextLine()}
      </div>
    )
  }
});

module.exports = animatedText;
