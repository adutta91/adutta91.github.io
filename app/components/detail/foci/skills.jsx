var React = require('react');

var SkillList = require('../../../assets/objects/skills');

var Skills = React.createClass({

  getSkills: function(type) {
    return SkillList[type].map(function(skill) {
      return (<li className="listItem">{skill}</li>)
    });
  },

  getList: function(type) {
    return (
      <ul className="flexRow wrap">{this.getSkills(type)}</ul>
    )
  },

  render: function() {
    return (
      <div className="aboutFocus">
        <h4>Technologies & Skills</h4>
        {this.getList("TECHNICAL")}
        <h4>Recreational</h4>
        {this.getList("RECREATIONAL")}
        <h4>Languages</h4>
        {this.getList("LANGUAGE")}
      </div>
    )
  }
});

module.exports = Skills;
