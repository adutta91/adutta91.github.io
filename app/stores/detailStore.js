var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var DetailStore = new Store(Dispatcher);

var _detail = "";

DetailStore.detail = function() {
  return _detail;
};

DetailStore.__onDispatch = function(payload) {
  switch(payload.actionType){
    case 'RECEIVE_DETAIL':
      resetDetail(payload.detail);
      DetailStore.__emitChange();
      break;
  };
};

var resetDetail = function(detail) {
  _detail = detail;
}

module.exports = DetailStore;
