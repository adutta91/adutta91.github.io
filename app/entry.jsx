// REACT
var React = require('react');
var ReactDOM = require('react-dom');

//COMPONENTS
var AnimatedText = require('./components/animatedText');
var LinksFooter = require('./components/linksFooter');

var App = React.createClass({
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
