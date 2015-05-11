'use strict';

exports = module.exports = function(app, ottoman) {
  var Admin = ottoman.model('Admin', {
    user: {
      id: { ref: 'User' },
      name: { type: 'string', default: '' }
    },
    name: {
      full: { type: 'string', default: '' },
      first: { type: 'string', default: '' },
      middle: { type: 'string', default: '' },
      last: { type: 'string', default: '' }
    },
    groups: [{ ref: 'AdminGroup' }],
    permissions: [{
      name: 'string',
      permit: 'boolean'
    }],
    timeCreated: { type: 'Date', default: Date.now }
  });
  Admin.prototype.hasPermissionTo = function(something) {
    //check group permissions
    var groupHasPermission = false;
    for (var i = 0 ; i < this.groups.length ; i++) {
      for (var j = 0 ; j < this.groups[i].permissions.length ; j++) {
        if (this.groups[i].permissions[j].name === something) {
          if (this.groups[i].permissions[j].permit) {
            groupHasPermission = true;
          }
        }
      }
    }

    //check admin permissions
    for (var k = 0 ; k < this.permissions.length ; k++) {
      if (this.permissions[k].name === something) {
        if (this.permissions[k].permit) {
          return true;
        }

        return false;
      }
    }

    return groupHasPermission;
  };
  Admin.prototype.isMemberOf = function(group) {
    for (var i = 0 ; i < this.groups.length ; i++) {
      if (this.groups[i]._id === group) {
        return true;
      }
    }

    return false;
  };

  require('./plugins/pagedFind')(Admin);
};
