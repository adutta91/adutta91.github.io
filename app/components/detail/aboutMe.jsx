var React = require('react');

// STORES
var DetailStore = require('../../stores/detailStore');

// COMPONENTS
var AboutButtonsIndex = require('./aboutButtonsIndex');

// OBJECTS
var focusOptions = require('../../assets/objects/focusOptions');

var AboutMe = React.createClass({

  getInitialState: function() {
    return ({
      focus: DetailStore.focus()
    });
  },

  componentDidMount: function() {
    this.detailListener = DetailStore.addListener(this.update);
  },

  componentWillUnmount: function() {
    this.detailListener.remove();
  },

  update: function() {
    this.setState({ focus: DetailStore.focus() });
  },

  getFocus: function() {
    return focusOptions[this.state.focus];
  },

  render: function() {
    return (
      <div className="detailPane flex column">
        <div key="aboutTitle" className="detailTitle">About Me</div>
        <div id="aboutMeDisplay" key="aboutPane" className="flex">
          <AboutButtonsIndex key="aboutIndex"/>
          {this.getFocus()}
        </div>
      </div>
    );
  }
});

module.exports = AboutMe;
