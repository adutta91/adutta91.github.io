var DetailActions = require('../actions/detailActions');

module.exports = {
  setDetail: function(detail) {
    DetailActions.setDetail(detail);
  },

  setFocus: function(focus) {
    DetailActions.setFocus(focus);
  }
};
