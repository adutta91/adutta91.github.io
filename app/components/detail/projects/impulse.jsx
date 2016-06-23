var React = require('react');

var Impulse = React.createClass({
  render: function() {
    return (
      <div className="projectInfo">
        <img className="projectImage" src="http://res.cloudinary.com/dzyfczxnr/image/upload/c_crop,h_1500,w_2800/v1466723472/impulse.png"/>
        <h2 className="projectTitle">Impulse</h2>
        <p className="projectDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer augue
          nulla, aliquet quis dui vel, dapibus dignissim ante. Maecenas scelerisque
          eget urna ac pellentesque. Etiam luctus, est et ullamcorper cursus, nunc
          sem congue augue, sit amet sollicitudin purus nisl quis neque. Donec
          vestibulum auctor convallis. Sed mollis aliquam erat, at tristique metus.
          Vivamus urna lorem, rutrum ac finibus ultricies, elementum ac mi. Suspendisse
          elit nibh, porta non tempus sit amet, faucibus id tellus. Phasellus luctus
          ex quis elementum mollis. Aliquam erat volutpat. Vestibulum erat nunc,
          tristique vitae ipsum et, pulvinar aliquam enim. Praesent rhoncus quis
          urna ut posuere. Phasellus et ligula sed purus vulputate cursus a nec ante.
          Sed pharetra arcu eget felis placerat, non fermentum urna tempus. Nam eros dolor,
          pellentesque elementum convallis vitae, gravida at ipsum. Pellentesque ultrices
          ullamcorper ex, sit amet varius diam rutrum at. Integer dapibus nec enim quis semper.
        </p>
      </div>
    )
  }
});

module.exports = Impulse;
