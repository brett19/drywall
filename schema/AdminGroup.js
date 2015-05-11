'use strict';

exports = module.exports = function(app, ottoman) {
  var AdminGroup = ottoman.model('AdminGroup', {
    name: { type: 'string', default: '' },
    permissions: 'Mixed'
  });

  require('./plugins/pagedFind')(AdminGroup);
};
