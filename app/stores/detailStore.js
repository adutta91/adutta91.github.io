var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var DetailStore = new Store(Dispatcher);

var _detail = "";
var _focus = "INTRO";

DetailStore.detail = function() {
  return _detail;
};

DetailStore.focus = function() {
  return _focus;
};

DetailStore.__onDispatch = function(payload) {
  switch(payload.actionType){
    case 'RECEIVE_DETAIL':
      resetDetail(payload.detail);
      DetailStore.__emitChange();
      break;
    case 'RECEIVE_FOCUS':
      resetFocus(payload.focus);
      DetailStore.__emitChange();
      break;
  };
};

var resetDetail = function(detail) {
  _detail = detail;
}

var resetFocus = function(focus) {
  _focus = focus;
}

module.exports = DetailStore;
