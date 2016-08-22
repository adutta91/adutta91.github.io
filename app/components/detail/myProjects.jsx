var React = require('react');
var Carousel = require('nuka-carousel');

var Impulse = require('./projects/impulse');
var Echo = require('./projects/echo');
var Cellular = require('./projects/cellular');


var MyProjects = React.createClass({
  mixins: [Carousel.ControllerMixin],
  getInitialState() {
    return { slideIndex: 0 };
  },
  render: function() {
    return (
      <div className="detailPane">
        <Carousel
           ref="carousel"
           className='carousel'
           data={this.setCarouselData.bind(this, 'carousel')}
           slideIndex={this.state.slideIndex}
           afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}>
           <Impulse />
           <Echo />
           <Cellular />
       </Carousel>
      </div>
    );
  }
});

module.exports = MyProjects;
