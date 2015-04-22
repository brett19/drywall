'use strict';

exports = module.exports = function(app, ottoman) {
  ottoman.model('Category', {
    pivot: { type: 'string', default: '' },
    name: { type: 'string', default: '' }
  });
};
