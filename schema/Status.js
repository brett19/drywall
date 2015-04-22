'use strict';

exports = module.exports = function(app, ottoman) {
  ottoman.model('Status', {
    pivot: { type: 'string', default: '' },
    name: { type: 'string', default: '' }
  });
};
