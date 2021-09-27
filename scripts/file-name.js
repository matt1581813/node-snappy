const path = require("path");

const suffix = `node-v${process.versions.modules}-${process.platform}-${process.arch}`;
const baseName = `${suffix}`;
const qualifiedName = path.resolve(__dirname, "..","lib" + path.sep + baseName + path.sep + "snappy.node");
module.exports = { suffix, baseName, qualifiedName };
