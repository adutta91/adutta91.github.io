var React = require('react');
var myPortfolio = React.createClass({

  githubLink: function(event) {
    event.preventDefault()
    window.open(
      'https://github.com/adutta91/adutta91.github.io',
      '_blank'
    );
  },

  render: function() {
    return (
      <div className="projectInfo">
        <img className="projectImage"
             src="http://res.cloudinary.com/dzyfczxnr/image/upload/c_scale,w_841/v1475099477/portfolio/Screen_Shot_2016-09-28_at_2.50.28_PM.png"
             onClick={this.liveLink}/>
        <h2 className="projectTitle">Portfolio</h2>
        <span className="projectDesc">
          A portfolio site I built in attempt to convey more about myself and
          give brief descriptions on my more presentable projects. This is a bit
          of a meta-description, since if you're reading this now, you're already
          here! The entire site is built with ReactJS, and presents an interactive
          interface. It's a single-page site that is intuitive to navigate and
          all relevant links and information can be accessed with 1-3 clicks.
          The site should accomodate all major browsers and screen sizes. I had
          a lot of fun making, tweaking, and maintaining this!
          <br/><br/>
          <div className="projectLinks">
            <img
              src="app/assets/images/github.png"
              onClick={this.githubLink}
              className="icon"/>
          </div>
        </span>
        <p>
          <span className="subHeader">Technologies: </span><span className="subText">
            ReactJS - JavaScript - CSS/HTML
          </span>
        </p>
      </div>
    )
  }
});

module.exports = myPortfolio;
