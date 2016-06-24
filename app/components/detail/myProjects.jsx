var React = require('react');
var Carousel = require('nuka-carousel');

var Impulse = require('./projects/impulse');
var Echo = require('./projects/echo');
var Cellular = require('./projects/cellular');


var MyProjects = React.createClass({
  mixins: [Carousel.ControllerMixin],
  render: function() {
    return (
      <div className="detailPane">
          <Carousel>
            <Impulse />
            <Echo />
            <Cellular />
          </Carousel>
      </div>
    );
  }
});

module.exports = MyProjects;
