var React = require('react');
var Typist = require('react-typist');

var Intro = React.createClass({
  render: function() {

    return (
      <div className="aboutFocus intro">
        <div className="introGreeting">
         <img className="icon"
              src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1466713899/portfolio/pixelavatar72.png"/>
         <Typist className="handwriting"
                 avgTypingSpeed={50}
                 startDelay={750}
                 cursor={{hideWhenDone: true, hideWhenDoneDelay: 500}}>
           <span className="handwriting">{"<- That's me!"}</span>
         </Typist>
        </div>
        Thanks for visiting - I hope you're doing well! :)
        <br/><br/>
        A little about me:
        <br/>
        I'm a reader, writer, skier, guitarist, gamer, hiker, etc, etc.
        <br/><br/>
        I'm guessing you came here to see what I'm up to, what I do, what I'm like...
        There are a bunch of things that interest me (see above), there are ways to
        see what I'm up to (see my projects), but I'm really struggling with how to
        convey my personality. Best I can do is ask you to call me and see for yourself!
        <br/><br/>
        But I know that's not always feasible. So instead I've just put stuff that
        I think is relevant on the tabs, for your viewing pleasure!
        <br/><br/>
        Anyhow, I really appreciate you dropping by, I hope to hear from you!
        <br/>
        <br/>
        <Typist avgTypingSpeed={50}
                startDelay={4000}
                cursor={{hideWhenDone: true, hideWhenDoneDelay: 250}}>
          <span className="handwriting signature">- Arjun Dutta</span>
        </Typist>
      </div>
    )
  }
});

module.exports = Intro;
