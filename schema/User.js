'use strict';

exports = module.exports = function(app, ottoman) {
  var User = ottoman.model('User', {
    username: { type: 'string' },
    password: 'string',
    email: { type: 'string' },
    roles: {
      admin: { ref: 'Admin' },
      account: { ref: 'Account' }
    },
    isActive: 'string',
    timeCreated: { type: 'Date', default: Date.now },
    resetPasswordToken: 'string',
    resetPasswordExpires: 'Date',
    twitter: {},
    github: {},
    facebook: {},
    google: {},
    tumblr: {},
    search: 'Mixed'
  }, {
    index: {
      findByUsername: {
        type: 'refdoc',
        by: 'username'
      },
      findByEmail: {
        type: 'refdoc',
        by: 'email'
      }
    }
  });
  User.prototype.canPlayRoleOf = function(role) {
    if (role === "admin" && this.roles.admin) {
      return true;
    }

    if (role === "account" && this.roles.account) {
      return true;
    }

    return false;
  };
  User.prototype.defaultReturnUrl = function() {
    var returnUrl = '/';
    if (this.canPlayRoleOf('account')) {
      returnUrl = '/account/';
    }

    if (this.canPlayRoleOf('admin')) {
      returnUrl = '/admin/';
    }

    return returnUrl;
  };
  User.encryptPassword = function(password, done) {
    var bcrypt = require('bcrypt');
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return done(err);
      }

      bcrypt.hash(password, salt, function(err, hash) {
        done(err, hash);
      });
    });
  };
  User.validatePassword = function(password, hash, done) {
    var bcrypt = require('bcrypt');
    bcrypt.compare(password, hash, function(err, res) {
      done(err, res);
    });
  };
};
