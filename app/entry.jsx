// REACT
var React = require('react');
var ReactDOM = require('react-dom');

//COMPONENTS
var AnimatedText = require('./animatedText');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <AnimatedText/>
      </div>
    )
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector("#root");
  ReactDOM.render(<App />, root);
});
