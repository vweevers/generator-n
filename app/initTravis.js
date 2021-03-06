var chalk = require('chalk')
  , travisjs = require.resolve('travisjs/bin/travisjs')

module.exports = function () {
  var done = this.async();
  var self = this;

  this.prompt([{
    type: 'confirm',
    name: 'travisHook',
    message: 'Would you like to setup Travis?',
    default: true
  }], function (props) {
    if (!props.travisHook) return done() // opt out

    self.spawnCommand('node', [travisjs, 'init'])
      .on('error', end)
      .on('exit', end);

    function end(err) {
      if (err) {
        self.log.error(err);
        self.log.error('Failed travis setup. You will have to do this manually.');
      }

      done();
    }
  });
}
