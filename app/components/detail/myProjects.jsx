var React = require('react');
var Carousel = require('nuka-carousel');

var EacPortfolio = require('./projects/eacPortfolio');
var MyPortfolio = require('./projects/myPortfolio');
var Impulse = require('./projects/impulse');
var Echo = require('./projects/echo');
var Cellular = require('./projects/cellular');


var MyProjects = React.createClass({
  mixins: [Carousel.ControllerMixin],
  getInitialState() {
    return { slideIndex: 0 };
  },

  newSlide: function(idx) {
    this.setState({ slideIndex: idx});
  },

  render: function() {
    return (
      <div className="detailPane">
        <Carousel
           ref="carousel"
           className='carousel'
           data={this.setCarouselData.bind(this, 'carousel')}
           slideIndex={this.state.slideIndex}
           afterSlide={this.newSlide}>
           <EacPortfolio />
           <MyPortfolio />
           <Impulse />
           <Echo />
           <Cellular />
       </Carousel>
      </div>
    );
  }
});

module.exports = MyProjects;
