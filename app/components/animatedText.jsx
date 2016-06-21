var React = require('react');
var Typist = require('react-typist');

// COMPONENTS
var AboutMe = require('./aboutMe');
var MyProjects = require('./myProjects');

var animatedText = React.createClass({

  getInitialState: function() {
    return ({
      firstLine: false,
      secondLine: false
    });
  },

  firstLine: function() {
    this.setState({firstLine: true, secondLine: false});
  },

  secondLine: function() {
    this.setState({firstLine: false, secondLine: true});
  },

  getFirstLine: function() {
    var secondLineCallback = this.secondLine;
    if(this.state.firstLine) {
      return (
        <Typist className="animatedText"
                avgTypingSpeed={50}
                startDelay={750}
                onTypingDone={function() { window.setTimeout(secondLineCallback, 1500); }}>
          My name is Arjun, and I'm a web developer. Nice to meet you!
        </Typist>
      );
    } else {
      return (<div></div>);
    }
  },

  getSecondLine: function() {

    if(this.state.secondLine) {
      return (
        <Typist className="animatedText2"
                avgTypingSpeed={50}
                startDelay={750}
                >
                <span>
            What would you like to do?
            <ul>
              <li><div>learn more <span className="link" onClick={function() { alert("somethingClicked") }}>about me</span></div></li>
              <li><div>check out <span className="link" onClick={function() { alert("somethingClicked") }}>my projects</span></div></li>
              <li><div>or just <span className="link" onClick={function() { alert("somethingClicked") }}>say hi!</span></div></li>
            </ul>
            </span>
        </Typist>
      );
    } else {
      return (<div></div>);
    }
  },

  render: function() {
    var firstLineCallback = this.firstLine;

    return (
      <div>
        <Typist className="animatedText"
                avgTypingSpeed={60}
                startDelay={1000}
                onTypingDone={function() { window.setTimeout(firstLineCallback, 750)}}
                cursor={{hideWhenDone: true, hideWhenDoneDelay: 750}}>
          <span className="greeting">Hello!</span>
        </Typist>
        {this.getFirstLine()}
        {this.getSecondLine()}
      </div>
    )
  }
});

module.exports = animatedText;
