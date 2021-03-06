'use strict';

exports = module.exports = function(app, ottoman) {
  ottoman.model('Note', {
    data: { type: 'string', default: '' },
    userCreated: {
      id: { ref:'User' },
      name: { type: 'string', default: '' },
      time: { type: 'Date', default: Date.now }
    }
  });
};
