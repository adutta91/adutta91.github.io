var React = require('react');

var SkillList = require('../../../assets/objects/skills');

var Skills = React.createClass({

  getSkills: function(type) {
    return SkillList[type].map(function(skill) {
      return (<li>{skill}</li>)
    });
  },

  render: function() {
    return (
      <div className="aboutFocus">
        <ul>{this.getSkills("TECHNICAL")}</ul>
        <ul>{this.getSkills("RECREATIONAL")}</ul>
        <ul>{this.getSkills("LANGUAGE")}</ul>
      </div>
    )
  }
});

module.exports = Skills;
