// REACT
var React = require('react');
var ReactDOM = require('react-dom');

// COMPONENTS
var AnimatedText = require('./components/animatedText');
var LinksFooter = require('./components/linksFooter');

// STORE
var DetailStore = require('./stores/detailStore');

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

  render: function() {
    return (
      <div className="container">
        <AnimatedText/>
        <LinksFooter />
      </div>
    )
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector("#root");
  ReactDOM.render(<App />, root);
});
