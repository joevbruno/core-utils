var assign = require('object-assign');

var coreUtils = {
  registerUtil: function(name, src) {
    if (coreUtils[name]) {
      throw new Error('Utility ' + name + ' already exists in coreUtils. Use a different name.');
    }
    coreUtils[name] = src;
    return coreUtils;
  },
  unregisterUtil: function(name) {
    delete coreUtils[name];
    return coreUtils;
  },
  registerUtils: function(obj) {
    Object.keys(obj).map(function(util) {
      coreUtils.registerComponent(util, obj[util]);
    });
  },
  getUtils: function() {
    var utils = Object.assign({}, coreUtils);
    return utils;
  } 
};
module.exports = coreUtils; 


