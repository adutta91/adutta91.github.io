var React = require('react');

var SkillList = require('../../../assets/objects/skills');

var Skills = React.createClass({

  getSkills: function(type) {
    return SkillList[type].map(function(skill) {
      return (<li className="listItem">{skill}</li>)
    });
  },

  render: function() {
    return (
      <div className="aboutFocus">
        <ul className="flexRow wrap">{this.getSkills("TECHNICAL")}</ul>
        <ul className="flexRow wrap">{this.getSkills("RECREATIONAL")}</ul>
        <ul className="flexRow wrap">{this.getSkills("LANGUAGE")}</ul>
      </div>
    )
  }
});

module.exports = Skills;
