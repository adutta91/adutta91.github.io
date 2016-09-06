var React = require('react');

var Cellular = React.createClass({

  liveLink: function(event) {
    window.open(
      'http://adutta91.github.io/Cellular-Game/',
      '_blank'
    );
  },

  githubLink: function(event) {
    window.open(
      'https://github.com/adutta91/Cellular-Game',
      '_blank'
    );
  },

  render: function() {
    return (
      <div className="projectInfo">
        <img className="projectImage"
             src="http://res.cloudinary.com/dzyfczxnr/image/upload/c_crop,h_1500,w_2800/v1466723532/Cellular.png"
             onClick={this.liveLink}/>
        <h2 className="projectTitle">Cellular</h2>
        <span className="projectDesc">
          Cellular was one of my first solo projects, and I had a lot of fun
          making this simple browser game. I used the canvas DOM element to draw
          little circles, the player controls one circle with the mouse (the player
          cell follows the cursor's position), and attempts to 'consume' cells that
          are smaller than it. There's also a 'rival' that will try to eat you if
          it is larger than you, otherwise it will eat the smaller neutral cells
          until it is large enough to take you on. It was fun tinkering with the
          AI behavior. The whole project was a study in class inheritance and OOP.
          <br/><br/>
          <div className="projectLinks">
            <img
              src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1466453609/portfolio/github.png"
              onClick={this.githubLink}
              className="icon"/>
            <img
              src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1471894149/portfolio/web.png"
              onClick={this.liveLink}
              className="icon"/>
          </div>
        </span>
        <p>
          <span className="subHeader">Technologies: </span><span className="subText">Javascript - OOP - CSS/HTML</span>
        </p>
      </div>
    )
  }
});

module.exports = Cellular;
