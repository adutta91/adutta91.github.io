var React = require('react');


var Education = React.createClass({
  render: function() {
    return (
      <div className="aboutFocus flexColumn">
        <div className="flexRow">
          <div className="valueText education left">
            <strong>2010</strong>
            <br/>
            The Thacher School is a boarding school located in Southern California.
            Students complete a rigorous academic curriculum as well as learn
            responsibility, maturity and the value of lasting friendships and
            the great outdoors.
          </div>
          <img className="valueImg" src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1466747928/portfolio/thacher.png"/>
        </div>

        <div className="flexRow">
          <div className="valueText education left">
          <strong>2015</strong>
          <br/>
            Tufts University, located in Medford, MA, was where I really explored
            more in depth the various interests I had been developing through high
            school. I ended up studying Psychology, only discovering my love for
            Computer Science during my last year there.
            <br/>
            (B.S. Cognitive & Brain Science, Cum Laude, GPA: 3.63)
          </div>
          <img className="valueImg" src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1466747928/portfolio/tufts.jpg"/>
        </div>

        <div className="flexRow">
          <div className="valueText education left">
            <strong>2016</strong>
            <br/>
            App Academy is a competitive Web Development bootcamp in San Francisco
            with a {'<'} 5% acceptance rate. Graduates put in about 1000 hours of coding,
            and learn to navigate and build full stack web applications. It is an
            amazing space filled with brilliant, enthusiastic people, and I learned
            an incredible amount there, deepening my interest in Web Development.
          </div>
          <img className="valueImg" src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1466747928/portfolio/app_academy.png"/>
        </div>
      </div>
    )
  }
});

module.exports = Education;
