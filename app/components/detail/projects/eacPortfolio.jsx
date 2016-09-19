var React = require('react');
var EacPortfolio = React.createClass({

  liveLink: function(event) {
    event.preventDefault()
    window.open(
      'http://eacportfolio.herokuapp.com',
      '_blank'
    );
  },

  githubLink: function(event) {
    event.preventDefault()
    window.open(
      'https://github.com/adutta91/emily_portfolio',
      '_blank'
    );
  },

  render: function() {
    return (
      <div className="projectInfo">
        <img className="projectImage"
             src="http://res.cloudinary.com/dzyfczxnr/image/upload/c_scale,w_841/v1474310336/portfolio/eacPortfolio.png"
             onClick={this.liveLink}/>
        <h2 className="projectTitle">Portfolio</h2>
        <span className="projectDesc">
          A portfolio page built for a global-health focused professional built
          with ReactJS and a backend with Rails/PostgreSQL. Features include:
          interactive globe displaying projects, scroll-sensitive header, "secret"
          project management dashboard for project creation, editing, and management,
          Google Map Geolocation for creating map markers from addresses or city
          names. I built the site in communication with the client, taking into
          consideration her desires to create a site according to her vision. I
          also built a method for her to manage the site data without needing
          web development experience.
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
          <span className="subHeader">Technologies: </span><span className="subText">
            ReactJS - Rails - AJAX - jQuery - CSS/HTML - WebGL - Google Geolocation API - PostgreSQL
          </span>
        </p>
      </div>
    )
  }
});

module.exports = EacPortfolio;
