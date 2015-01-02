var path = require('path'),
    fs = require('fs'),
    pathToPackageJson = path.join(process.cwd(), '/package.json');

module.exports = {
  get: readPackageJson,
  set: function (key, value) {
    var packageJson = readPackageJson();
    if (!packageJson) { return; } // this is not normal

    // TODO: should we verify if field is present?
    packageJson[key] = value;
    writePackageJson(packageJson);
  }
};


function readPackageJson() {
  try {
    // don't use require(), to avoid cache
    var json = fs.readFileSync(pathToPackageJson, 'utf-8')
    return JSON.parse(json)
  } catch (e) {}
}

function writePackageJson(packageJson) {
  fs.writeFileSync(pathToPackageJson, JSON.stringify(packageJson, null, 2));
}
