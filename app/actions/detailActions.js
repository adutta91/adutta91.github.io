var Dispatcher = require('../dispatcher');

module.exports = {
  setDetail: function(detail) {
    Dispatcher.dispatch({
      actionType: "RECEIVE_DETAIL",
      detail: detail
    });
  },

  setFocus: function(focus) {
    Dispatcher.dispatch({
      actionType: "RECEIVE_FOCUS",
      focus: focus
    });
  }
};
