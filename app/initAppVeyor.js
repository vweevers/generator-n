var chalk = require('chalk')
  , appveyor = require.resolve('appveyor/appveyor')

module.exports = function () {
  // var packageJSON = require('./packageJson').get();
  // if (!packageJSON.repository) return;

  var done = this.async();
  var self = this;

  this.prompt([{
    type: 'confirm',
    name: 'appveyorHook',
    message: 'Would you like to setup AppVeyor?',
    default: true
  }], function (props) {
    if (!props.appveyorHook) return done() // opt out

    self.spawnCommand('node', [appveyor, 'init'])
      .on('error', end)
      .on('exit', end);

    function end(err) {
      if (err) {
        self.log.error(err);
        self.log.error('Failed appveyor setup. You will have to do this manually.');
      }

      done();
    }
  });
}
