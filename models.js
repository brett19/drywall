'use strict';

exports = module.exports = function(app, ottoman) {
  //embeddable docs first
  require('./schema/Note')(app, ottoman);
  require('./schema/Status')(app, ottoman);
  require('./schema/StatusLog')(app, ottoman);
  require('./schema/Category')(app, ottoman);

  //then regular docs
  require('./schema/User')(app, ottoman);
  require('./schema/Admin')(app, ottoman);
  require('./schema/AdminGroup')(app, ottoman);
  require('./schema/Account')(app, ottoman);
  require('./schema/LoginAttempt')(app, ottoman);
};
