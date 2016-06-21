// REACT
var React = require('react');
var ReactDOM = require('react-dom');

// COMPONENTS
var AnimatedText = require('./components/animatedText');
var LinksFooter = require('./components/linksFooter');

// STORE
var DetailStore = require('./stores/detailStore');

// OBJECTS
var detailOptions = require('./assets/objects/details');

var App = React.createClass({

  getInitialState: function() {
    return ({
      detail: DetailStore.detail()
    });
  },

  componentDidMount: function() {
    this.detailListener = DetailStore.addListener(this.update);
  },

  componentWillUnmount: function() {
    this.detailListener.remove();
  },

  update: function() {
    this.setState({ detail: DetailStore.detail() });
  },

  getDetail: function() {
    return detailOptions[this.state.detail];
  },

  render: function() {
    return (
      <div className="container">
        <AnimatedText/>
        {this.getDetail()}
        <LinksFooter />
      </div>
    )
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector("#root");
  ReactDOM.render(<App />, root);
});
