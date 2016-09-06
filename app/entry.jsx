// REACT
var React = require('react');
var ReactDOM = require('react-dom');

// COMPONENTS
var AnimatedText = require('./components/text/animatedText');
var StaticText = require('./components/text/staticText');
var LinksFooter = require('./components/links/linksFooter');

// STORE
var DetailStore = require('./stores/detailStore');
var StateStore = require('./stores/stateStore');

// OBJECTS
var detailOptions = require('./assets/objects/details');

// TRANSITIONS
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


var App = React.createClass({

  getInitialState: function() {
    return ({
      detail: DetailStore.detail(),
      animationSkipped: StateStore.animationStatus()
    });
  },

  componentDidMount: function() {
    this.detailListener = DetailStore.addListener(this.update);
    this.stateListener = StateStore.addListener(this.update);
  },

  componentWillUnmount: function() {
    this.detailListener.remove();
    this.stateListener.remove();
  },

  update: function() {
    this.setState({
      detail: DetailStore.detail(),
      animationSkipped: StateStore.animationStatus()
    });
  },

  getDetail: function() {
    return detailOptions[this.state.detail];
  },

  getText: function() {
    if (this.state.animationSkipped) {
      return (
        <StaticText />
      )
    } else {
      return (
        <AnimatedText />
      )
    }
  },

  render: function() {
    return (
      <div id="app">
        <div id="contentWrapper">
          { this.getText() }
          { this.getDetail() }
          <ReactCSSTransitionGroup transitionName="transition" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          </ReactCSSTransitionGroup>
        </div>
        <LinksFooter />
      </div>
    )
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector("#root");
  ReactDOM.render(<App />, root);
});
