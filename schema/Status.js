'use strict';

exports = module.exports = function(app, ottoman) {
  var Status = ottoman.model('Status', {
    pivot: { type: 'string', default: '' },
    name: { type: 'string', default: '' }
  });

  require('./plugins/pagedFind')(Status);
};
