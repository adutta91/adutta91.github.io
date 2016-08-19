var React = require('react');

var DetailUtil = require('../../util/detailUtil');
var DetailStore = require('../../stores/detailStore');

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

  getClassName: function(focus) {
    return focus === DetailStore.focus() ? "aboutButton selected" : "aboutButton";
  },

  render: function() {
    return (
      <div className="aboutButtonIndex">
        <div className={this.getClassName("VALUES")} onClick={this._onClick}>Values</div>
        <div className={this.getClassName("HISTORY")} onClick={this._onClick}>History</div>
        <div className={this.getClassName("EDUCATION")} onClick={this._onClick}>Education</div>
        <div className={this.getClassName("SKILLS")} onClick={this._onClick}>Skills</div>
      </div>
    )
  }
});

module.exports = AboutButtonsIndex;
