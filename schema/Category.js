'use strict';

exports = module.exports = function(app, ottoman) {
  var Category = ottoman.model('Category', {
    pivot: { type: 'string', default: '' },
    name: { type: 'string', default: '' }
  });

  require('./plugins/pagedFind')(Category);
};
