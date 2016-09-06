var React = require('react');

var History = React.createClass({
  render: function() {
    return (
      <div className="aboutFocus vScroll">
        <p className="valueText">
          There's not much to say, really. I've been blessed by a pretty
          awesome life so far - amazing family, the best of friends. I've lived
          and studied in some pretty cool places, got to travel a bit, and looking
          forward to some interesting times ahead. But that's not exactly what
          you want to know, I'll bet.
        </p>
        <p className="valueText">
          I went through a bunch of different interests as I grew up: English,
          Environmental Science, and Psychology were my main pursuits. I ended
          up earning a degree in Cognitive & Brain Sciences and did some pretty
          interesting research for a bit.
        </p>
        <p className="center valueText">
          <strong>BUT THEN I DISCOVERED COMP SCI</strong>
        </p>
        <p className="valueText">
          I fell in love (of a sort) - the world that opened up to me was like
          something out of a dream. Upon exploration, I found that Web Development
          combined two things I found truly fascinating: the understanding of a
          problem and the building of a solution. Parts of each were scattered among
          my earlier interests, but this area really brought it all together for me.
        </p>
        <p className="valueText">
          So I decided to become a Web Developer. Coming from a Psych background,
          I'm particularly interested in the Human part of building a product. How
          do you make something that's <strong>useful</strong>, <strong>intuitive</strong>,
          and <strong>beautiful</strong>, all at the same time? This is a question
          I love to address. What's more, each of those three are all equally
          important, in my mind. Finding a way to maximize them is something
          I find enthralling.
        </p>
        <p className="valueText">
          So here I am now - ready to build awesome things with awesome people!
        </p>
      </div>
    )
  }
});

module.exports = History;
