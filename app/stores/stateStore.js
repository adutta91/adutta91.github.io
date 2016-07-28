var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var StateStore = new Store(Dispatcher);

var _animationSkipped = false;

StateStore.animationStatus = function() {
  return _animationSkipped;
};

StateStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'ANIMATION_SKIPPED':
      skipAnimation();
      this.__emitChange();
      break;
  }
};

var skipAnimation = function() {
  _animationSkipped = true;
};

module.exports = StateStore;
