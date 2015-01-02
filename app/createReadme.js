/* This file constructs project tree based on information provided in package.json */
var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var parseAuthor = require('parse-author')
var readPackage = require('./packageJson').read

module.exports = function () {
  var pkg = readPackage();
  if (!pkg) return;

  initPackageVariables.bind(this)(pkg);
  copyTemplates.bind(this)();
};

function copyTemplates() {
  this.template('_readme.md', 'README.md');
}

function initPackageVariables(pkg) {
  this.packageName = pkg.name;

  var author = pkg.author

  if (author) {
    if (typeof author == 'string') author = parseAuthor(author)
    if (author.url) this.authorLink = '['+author.name+']('+author.url+')'
    else this.authorLink = author.name
  } else {
    this.authorLink = ''
  }

  this.packageLicense = pkg.license;
  this.packageDescription = pkg.description;

  var repo = pkg.repository || ''
  var url = typeof repo == 'string' ? repo : repo.url || ''
  var match = url.match(/.*github.com\/([^\.#$]+)/)
  this.repoName = (match && match[1]) || ''

  var cwd = process.cwd()
  this.hasTravis = fs.existsSync(path.join(cwd, '.travis.yml'))
  this.hasAppVeyor = fs.existsSync(path.join(cwd, 'appveyor.yml'))
}
