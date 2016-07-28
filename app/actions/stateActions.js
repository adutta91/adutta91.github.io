var Dispatcher = require('../dispatcher');

module.exports = {
  skipAnimation: function() {
    Dispatcher.dispatch({
      actionType: 'ANIMATION_SKIPPED'
    });
  }
};
