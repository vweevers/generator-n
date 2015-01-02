/* This file constructs project tree based on information provided in package.json */
var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var readPackage = require('./packageJson').read

module.exports = function () {
  var pkg = readPackage();
  if (!pkg) return;

  // why?!
  initPackageVariables.bind(this)(pkg);
  copyTemplates.bind(this)();
  createEntryPoint.bind(this)(pkg.main);
  createLicense.bind(this)(pkg.license);
  createUnitTests.bind(this)(pkg);
};

function copyTemplates() {
  this.copy('_.gitignore', '.gitignore');
}

function createEntryPoint(filename) {
  if (!filename) {
    this.log.error('Main package file name is missing. File will not be created');
    return;
  }

  // create file if it does not exist:
  var fd = fs.openSync(filename, 'a');
  fs.closeSync(fd);
}

function initPackageVariables(pkg) {
  this.packageName = pkg.name;
  this.packageAuthor = pkg.author || '';
  this.packageLicense = pkg.license;
  this.packageDescription = pkg.description;
}

function createLicense(license) {
  if (license.match(/\bmit\b/i))
    var tpl = 'mit'
  else if (license.match(/\bbsd\b/i))
    tpl = license.indexOf('3') >= 0 ? 'bsd3' : 'bsd2'

  if (tpl)
    this.template(path.join('license', tpl), 'LICENSE')
}

function createUnitTests(pkg) {
  var testCommand = pkg.scripts && pkg.scripts.test;
  var match = testCommand.match(/^(tap|tape|mocha|grunt|cake)\b/);
  var framework = match && match[1];

  if (framework) {
    var done = this.async()
    this.npmInstall([framework], { 'saveDev': true }, done);
  }
}
