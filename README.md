# Node.js minimalistic package generator

This is a generator for [Yeoman](http://yeoman.io). Unlike many other generators
this one will not include bunch of frameworks, config files and folders. Running
`yo n` will generate really simple folder structure:

```
README.md
LICENSE
index.js
package.json
```

In fact it will delegate generation work to `npm init` itself, and then will do
smart initializations, based on your package.json. This includes:

* Create proper `LICENSE` file
* Add author to `README.md` with name and url
* Include test dependency based on your `test` script
* Initialize local git repository
* Add `engines.node`: `>= 0.10.0`
* Add [shield.io](https://shield.io) badges for npm, stability, David, Travis and/or AppVeyor.
* <strike>Make initial commit to GitHub</strike>

And optionally:

* Initialize GitHub project
* Add `.travis.yml` and setup hook
* Add `appveyor.yml` and setup hook

## Demo
[YouTube screencast](http://www.youtube.com/watch?v=VKsmKs9DzsE) (1 minute 22 seconds long)

## Trivia
Typing `yo n` is two times shorter than `npm init`

## Install

Before you can use this generator, make sure you have both Yeoman and generator-n installed.

```
npm install -g generator-n yo
```

If you want `n` to setup AppVeyor, you should install the `appveyor` tool, generate a
[token](https://ci.appveyor.com/api-token) and add it:

```
npm install -g appveyor
appveyor auth <appveyor token>
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
