var path = require('path')
  , fs = require('fs')
  , pkgPath = path.join(process.cwd(), 'package.json')

module.exports = {
  read: read,
  write: write
}

function read() {
  try {
    // don't use require(), to avoid cache
    var json = fs.readFileSync(pkgPath, 'utf-8')
    return JSON.parse(json)
  } catch (e) {}
}

function write(pkg) {
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
}
