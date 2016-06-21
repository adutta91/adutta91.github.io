var React = require('react');

var DetailUtil = require('../../util/detailUtil');

var AboutButtonsIndex = React.createClass({

  _onClick: function(event) {
    var focus = event.currentTarget.innerHTML.toUpperCase();
    DetailUtil.setFocus(focus);
  },

  render: function() {
    return (
      <div className="aboutButtonIndex">
        <div className="aboutButton" onClick={this._onClick}>Values</div>
        <div className="aboutButton" onClick={this._onClick}>History</div>
        <div className="aboutButton" onClick={this._onClick}>Education</div>
      </div>
    )
  }
});

module.exports = AboutButtonsIndex;
