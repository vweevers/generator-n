# <%= packageName %>

> <%= packageDescription %>

[![npm status](http://img.shields.io/npm/v/<%= packageName %>.svg?style=flat-square)](https://www.npmjs.org/package/<%= packageName %>) [![Stability](http://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square)](http://nodejs.org/api/documentation.html#documentation_stability_index) <% if (repoName) { %><% if (hasTravis) { %>[![Travis build status](https://img.shields.io/travis/<%= repoName %>.svg?style=flat-square&label=travis)](http://travis-ci.org/<%= repoName %>) <% } %><% if (hasAppVeyor) { %>[![AppVeyor build status](https://img.shields.io/appveyor/ci/<%= repoName %>.svg?style=flat-square&label=appveyor)](https://ci.appveyor.com/project/<%= repoName %>) <% } %>[![Dependency status](https://img.shields.io/david/<%= repoName %>.svg?style=flat-square)](https://david-dm.org/<%= repoName %>)<% } %>

Jump to: [api](#api) / [install](#install) / [license](#license)

## example

```js
var myModule = require('<%= packageName %>')
```

## api

## install

With [npm](https://npmjs.org) do:

```
npm install <%= packageName %>
```

## license

[<%= packageLicense %>](http://opensource.org/licenses/<%= packageLicense %>) © <%= authorLink %>
