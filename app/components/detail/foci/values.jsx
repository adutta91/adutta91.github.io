var React = require('react');

var Values = React.createClass({
  render: function() {
    return (
      <div className="aboutFocus intro">
        <div className="valueTitle left">Be nice...</div>
        <div className="valueText left">
          It seems like a straightforward thing, but there are times when it's
          easy to forget. I strive to always be friendly, conscientious, and
          empathetic to all those around me. Especially in a work environment,
          it's important to me to foster an environment of cooperation and
          enthusiasm. It's super important to me to recognize the abilities and
          achievements of your coworkers and assign them the full respect they're
          due.
        </div>

        <div className="valueTitle right">...Work hard</div>
        <div className="valueText right">
          I'm a big believer in loving what you do. I'm lucky enough to be
          able to do exactly that, so in my position, I very much am against calling
          it 'work'. That being said, I think a strong and consistent work ethic
          is vitally important in whatever you do. To give each task your full
          concerted attention and effort and to take pride in what you achieve,
          while still recognizing the imperfections is something I hold in
          extremely high regard.
        </div>

        <div className="valueTitle left">Have fun...</div>
        <div className="valueText left">
          One of the things my Dad always used to say was "Attitude Determines
          Altitude", and as cheesy as that may sound to some, I find it incredibly
          inspiring and motivating. Not only does it demonstrate the healthiness
          of a good perspective, it also recognizes the effect of a positive outlook.
          I've learned throughout my life, sometimes the hard way, that optimism
          is a far more powerful thing than most realize.
        </div>
      </div>
    )
  }
});

module.exports = Values;
