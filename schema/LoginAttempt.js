'use strict';

exports = module.exports = function(app, ottoman) {
  ottoman.model('LoginAttempt', {
    ip: { type: 'string', default: '' },
    user: { type: 'string', default: '' },
    time: { type: 'Date', default: Date.now }
  }, {
    index: {
      findByIp: {
        by: 'ip'
      },
      findByIpAndUser: {
        by: ['ip', 'user']
      }
    }
  });
};
