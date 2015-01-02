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
* Include test dependency based on your `test` script
* Optional: initialize GitHub project for your package
* Optional: generate `.travis.yml` and add hook
* Optional: generate `appveyor.yml` and add hook
* Add [shield.io](https://shield.io) badges for npm, stability, David, Travis and/or AppVeyor.
* Add author(s) to `README.md` with name and url
* <strike>Make initial commit to GitHub</strike>

## Demo
[YouTube screencast](http://www.youtube.com/watch?v=VKsmKs9DzsE) (1 minute 22 seconds long)

## Trivia
Typing `yo n` is two times shorter than `npm init`

## Install

Before you can use this generator, make sure you have both Yeoman and generator-n
installed. If you want `n` to setup Travis and/or AppVeyor, you should install
the `travisjs` and `appveyor` tools as well. The `appveyor` tool requires a
[token](https://ci.appveyor.com/api-token).

```
npm install -g travisjs appveyor
npm install -g generator-n yo

appveyor auth <appveyor token>
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
