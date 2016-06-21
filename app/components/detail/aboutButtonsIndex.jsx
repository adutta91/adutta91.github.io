var React = require('react');


var AboutButtonsIndex = React.createClass({

  _onClick: function() {
      alert('hooray');
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
