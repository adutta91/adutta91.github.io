var React = require('react');

var SayHi = React.createClass({
  render: function() {
    return (
      <div className="detailPane flexColumn">
        <div className="contactGreeting">
          Hi there! Below are some ways that you can best contact me! (phone and
          email preferred).
          <br/><br/>
          Slightly less reliable methods could be to wander the streets of San Francisco,
          scan the slopes during the ski season, or search for the coffee shops
          with the comfiest couches...
        </div>
        <div className="flexLeft">
          <div className="contact flexRow">
            <img className="symbol" src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1466717141/portfolio/atsign.jpg"/>
            <a href="mailto:arjundutta91@gmail.com">arjundutta91@gmail.com</a>
          </div>
          <div className="contact flexRow">
            <img className="symbol" src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1466717141/portfolio/phone.png"/>
            <span>(408) 458-6077</span>
          </div>
          <div className="contact flexRow">
            <img className="symbol" src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1466717141/portfolio/mail.png"/>
            <div className="flexColumn">
              <div>1413 Pitman Ave</div>
              <div>Palo Alto, CA 94103</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SayHi;
