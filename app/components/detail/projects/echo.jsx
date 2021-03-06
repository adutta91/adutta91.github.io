var React = require('react');

var Echo = React.createClass({

  liveLink: function(event) {
    window.open(
      'http://www.echomusic.tech',
      '_blank'
    );
  },

  githubLink: function(event) {
    window.open(
      'https://github.com/adutta91/EchoMusic',
      '_blank'
    );
  },

  render: function() {
    return (
      <div className="projectInfo">
        <img className="projectImage"
             src="http://res.cloudinary.com/dzyfczxnr/image/upload/c_scale,w_841/v1466723475/echo.png"
             onClick={this.liveLink}/>
        <h2 className="projectTitle">Echo</h2>
        <span className="projectDesc">
          Echo was a solo project that I built with Rails and React. It's a single
          page music sharing and exploration app, allowing users to: create accounts,
          upload music, save music to their profile, and listen to music that other
          people have uploaded. I had a lot of fun playing around with this project,
          and have thought through many improvements that I plan to implement down
          the line.
          <br/><br/>
          <div className="projectLinks">
            <img
              src="app/assets/images/github.png"
              onClick={this.githubLink}
              className="icon"/>
            <img
              src="app/assets/images/web.png"
              onClick={this.liveLink}
              className="icon"/>
          </div>
        </span>
        <p>
          <span className="subHeader">Technologies: </span><span className="subText">ReactJS - Ruby - Rails - PostgreSQL - AJAX - jQuery - CSS/HTML - Heroku - RESTful Web Services</span>
        </p>
      </div>
    )
  }
});

module.exports = Echo;
