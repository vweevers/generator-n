/* This file constructs project tree based on information provided in package.json */
var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var parseAuthor = require('parse-author')

module.exports = function () {
  var packageJson = require('./packageJson').get();
  if (!packageJson) {
    return; // How could this happen?
  }

  initPackageVariables.bind(this)(packageJson);
  copyTemplates.bind(this)(packageJson);
};

function copyTemplates(packageJson) {
  this.template('_readme.md', 'README.md');
}

function initPackageVariables(packageJson) {
  this.packageName = packageJson.name;

  var authors = packageJson.authors || [packageJson.author]

  this.authorList = authors.map(function(author){
    if (typeof author == 'string') author = parseAuthor(author)
    if (author.url) return '['+author.name+']('+author.url+')'
    else return author.name
  }).join(', ')

  this.packageLicense = packageJson.license;
  this.packageDescription = packageJson.description;

  var repo = packageJson.repository || ''
  var url = typeof repo == 'string' ? repo : repo.url || ''
  var match = url.match(/.*github.com\/([^\.#$]+)/)
  this.repoName = (match && match[1]) || ''

  var cwd = process.cwd()
  this.hasTravis = fs.existsSync(path.join(cwd, '.travis.yml'))
  this.hasAppVeyor = fs.existsSync(path.join(cwd, 'appveyor.yml'))
}
