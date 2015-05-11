'use strict';

exports = module.exports = function(app, ottoman) {
  var Account = ottoman.model('Account', {
    user: {
      id: { ref: 'User' },
      name: { type: 'string', default: '' }
    },
    isVerified: { type: 'string', default: '' },
    verificationToken: { type: 'string', default: '' },
    name: {
      first: { type: 'string', default: '' },
      middle: { type: 'string', default: '' },
      last: { type: 'string', default: '' },
      full: { type: 'string', default: '' }
    },
    company: { type: 'string', default: '' },
    phone: { type: 'string', default: '' },
    zip: { type: 'string', default: '' },
    status: {
      id: { ref: 'Status' },
      name: { type: 'string', default: '' },
      userCreated: {
        id: { ref: 'User' },
        name: { type: 'string', default: '' },
        time: { type: 'Date', default: Date.now }
      }
    },
    statusLog: 'Mixed',
    notes: 'Mixed',
    userCreated: {
      id: { ref: 'User' },
      name: { type: 'string', default: '' },
      time: { type: 'Date', default: Date.now }
    },
    search: 'Mixed'
  });

  require('./plugins/pagedFind')(Account);
};
