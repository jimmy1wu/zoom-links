"use strict";

const Configstore = require("configstore");
const packageName = require("../package.json").name;

module.exports = new Configstore(packageName);
