var chalk = require('chalk')

module.exports = function () {
  // var packageJSON = require('./packageJson').get();
  // if (!packageJSON.repository) return;

  var done = this.async();
  var self = this;

  this.prompt([{
    type: 'confirm',
    name: 'travisHook',
    message: 'Would you like to setup Travis?',
    default: true
  }], function (props) {
    if (!props.travisHook) return done() // opt out

    // TODO: check if travisjs is installed

    console.log(chalk.yellow.bold('travisjs init'));

    self.spawnCommand('travisjs', ['init'])
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
