var React = require('react');
var Typist = require('react-typist');

// UTIL
var DetailUtil = require('../util/detailUtil');

var animatedText = React.createClass({

  getInitialState: function() {
    return ({
      firstLine: false,
      secondLine: false
    });
  },

  setDetail: function(e) {
    var detail = e.currentTarget.innerHTML.split(" ").join("").toUpperCase();
    DetailUtil.setDetail(detail);
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
          My name is Arjun, and I'm a web developer.
          <br/><br/>
          Nice to meet you!
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
            <span>What would you like to do?</span>
            <br/> <br/>
            <span className="option"> > learn more <span className="link" onClick={this.setDetail}>about me</span>?</span>
            <br/>
            <span className="option"> > check out <span className="link" onClick={this.setDetail}>my projects</span>?</span>
            <br/>
            <span className="option"> > or just <span className="link" onClick={this.setDetail}>say hi</span>?</span>
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