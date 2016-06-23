var React = require('react');

var DetailUtil = require('../../util/detailUtil');

var AboutButtonsIndex = React.createClass({

  _onClick: function(event) {
    if (event.currentTarget.className === "aboutButton selected") {
      event.currentTarget.className = "aboutButton";
      DetailUtil.setFocus("INTRO");
    } else {
      this.selectButton(event);
    }
  },

  selectButton: function(event) {
    var focus = event.currentTarget.innerHTML.toUpperCase();
    event.currentTarget.className += " selected"
    var sibs = $(event.currentTarget).siblings();
    sibs[0].className = "aboutButton";
    sibs[1].className = "aboutButton";
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
