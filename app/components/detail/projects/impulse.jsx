var React = require('react');
var Impulse = React.createClass({

  liveLink: function(event) {
    event.preventDefault()
    window.open(
      'https://chrome.google.com/webstore/detail/impulse/aigkahjbocbglmnnhaghdednifgbofdm',
      '_blank'
    );
  },

  mattLink: function(event) {
    event.preventDefault()
    window.open(
      'https://github.com/mattyshen',
      '_blank'
    );
  },

  githubLink: function(event) {
    event.preventDefault()
    window.open(
      'https://github.com/mattyshen/impulse',
      '_blank'
    );
  },

  render: function() {
    return (
      <div className="projectInfo">
        <img className="projectImage"
             src="http://res.cloudinary.com/dzyfczxnr/image/upload/c_crop,h_1500,w_2800/v1466725669/impulse_ss.png"
             onClick={this.liveLink}/>
        <h2 className="projectTitle">Impulse</h2>
        <span className="projectDesc">
          Impulse was a collaborative project with my friend
          <a onClick={this.mattLink}> Matt</a>. The basic idea is a new-tab
          override on the Chrome browser. That means that everytime you open a
          new tab, a customized page is displayed, as opposed to the default new
          tab screen. We decided to give it a League of Legends twist - by
          pinging Riot's open API, we gained access to a huge amount of game
          statistics and data, which we've organized by searching for a specific
          user. All widget settings and preferences are saved, so you won't have
          to keep re-entering your search, etc. It's also on the Chrome Web Store!
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
          <span className="subHeader">Technologies: </span><span className="subText">ReactJS - AJAX - jQuery - CSS/HTML</span>
        </p>
      </div>
    )
  }
});

module.exports = Impulse;
