var React = require('react');


var Education = React.createClass({
  render: function() {
    return (
      <div id="educationDisplay" className="aboutFocus vScroll">
        <div className="institution flex">
          <img className="valueImg" src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1466747928/portfolio/thacher.png"/>
          <div className="valueText education left">
            The Thacher School is a boarding school located in Southern California.
            Students complete a rigorous academic curriculum as well as learn
            responsibility, maturity and the value of lasting friendships and
            the great outdoors.
          </div>
        </div>

        <div className="institution flex">
          <img className="valueImg" src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1466747928/portfolio/tufts.jpg"/>
          <div className="valueText education left">
            Tufts University, located in Medford, MA, was where I really explored
            more in depth the various interests I had been developing through high
            school. I ended up studying Psychology, only discovering my love for
            Computer Science during my last year there.
            <br/><br/>
            (B.S. Cognitive & Brain Science, Cum Laude, GPA: 3.63)
          </div>
        </div>

        <div className="institution flex">
          <img className="valueImg" src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1466747928/portfolio/app_academy.png"/>
          <div className="valueText education left">
            App Academy is a competitive Web Development bootcamp in San Francisco
            with a {'<'} 5% acceptance rate. Graduates put in about 1000 hours of coding,
            and learn to navigate and build full stack web applications. It is an
            amazing space filled with brilliant, enthusiastic people, and I learned
            an incredible amount there, deepening my interest in Web Development.
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Education;
