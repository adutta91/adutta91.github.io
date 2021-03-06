var React = require('react');
var Typist = require('react-typist');

var Intro = React.createClass({

  onClick: function() {
    window.open(
      'https://www.facebook.com/arjun.dutta.71',
      '_blank'
    )
  },

  render: function() {
    return (
      <div id="intro" className="aboutFocus">
        <div className="introGreeting">
         <img onClick={this.onClick}
              className="icon large round"
              src="app/assets/images/me.jpg"/>
        </div>
        <p>
        Thanks for visiting - I hope you're doing well! :)
        </p>
        <p>
        A little about me:
        </p>
        <p>
        I'm a reader, writer, skier, coffee enthusiast, guitarist, gamer, hiker, etc, etc...
        </p>
        <p>
        I'm guessing you came here to see what I'm up to, what I do, what I'm like...
        There are a bunch of things that interest me (see above), there are ways to
        see what I'm up to (see my projects), but I'm really struggling with how to
        convey my personality. Best I can do is ask you to call me and find out
        for yourself!
        </p>
        <p>
        But I know that's not always feasible. So instead I've just provided some
        info that I think is relevant, for your viewing pleasure!
        </p>
        <p>
        Anyhow, I really appreciate you dropping by, I hope you have an awesome
        day, and I hope to hear from you!
        </p>
        <Typist avgTypingSpeed={50}
                startDelay={2000}
                onTypingDone={this.typingDone}
                cursor={{hideWhenDone: true, hideWhenDoneDelay: 250}}>
          <span className="handwriting signature">- Arjun Dutta</span>
        </Typist>
      </div>
    )
  }
});

module.exports = Intro;
