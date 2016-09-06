var React = require('react');

var DetailUtil = require('../../util/detailUtil');

var LinksFooter = require('../links/linksFooter');

// TRANSITIONS
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var StaticText = React.createClass({

  setDetail: function(e) {
    var detail = e.currentTarget.innerHTML.split(" ").join("").toUpperCase();
    DetailUtil.setDetail(detail);
    if (detail === "ABOUTME") {
      DetailUtil.setFocus("INTRO");
    }
  },

  render: function() {
    return (
      <div id="textWrapper">
        <div className="text">
          <span id="greeting">Hello!</span>
        </div>
        <div className="text2">
          <span>What would you like to do?</span>
          <br/> <br/>
          <span className="option"> > learn more <span className="link" onClick={this.setDetail}>about me</span>?</span>
          <br/>
          <span className="option"> > check out <span className="link" onClick={this.setDetail}>my projects</span>?</span>
          <br/>
          <span className="option"> > or just <span className="link" onClick={this.setDetail}>say hi</span>?</span>
        </div>
      </div>
    )
  }
});

module.exports = StaticText;
