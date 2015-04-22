'use strict';

exports = module.exports = function(app, ottoman) {
  ottoman.model('AdminGroup', {
    name: { type: 'string', default: '' },
    permissions: 'Mixed'
  });
};
