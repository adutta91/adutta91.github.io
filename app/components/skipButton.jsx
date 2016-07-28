var React = require('react');

var StateUtil = require('../util/stateUtil');


var SkipButton = React.createClass({

  buttonClicked: function() {
    StateUtil.skipAnimation();
  },

  render: function() {
    return (
      <div className="skip button" onClick={this.buttonClicked}>
        skip
      </div>
    )
  }
});

module.exports = SkipButton;
