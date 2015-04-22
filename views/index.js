'use strict';

exports.init = function(req, res){
  res.render('index');
};

exports.setup = function(req, res, next) {
  var rootGroup = new req.app.db.models.AdminGroup({
    _id: 'root',
    name: 'Root'
  });

  var rootAdmin = new req.app.db.models.Admin({
    name: {
      first: 'Root',
      last: 'Admin',
      full: 'Root Admin'
    },
    groups: [rootGroup]
  });

  var rootUser = new req.app.db.models.User({
    username: 'root',
    isActive: 'yes',
    email: 'brett19@gmail.com',
    roles: {
      admin: rootAdmin
    }
  });
  rootAdmin.user = {
    id: rootUser,
    name: rootUser.username
  };

  rootGroup.save(function(err) {
    if (err) {
      return next(err);
    }

    rootAdmin.save(function(err) {
      if (err) {
        return next(err);
      }

      rootUser.save(function(err) {
        if (err) {
          return next(err);
        }

        res.send('Setup Complete!');
      });
    });
  });
};
