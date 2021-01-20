"use strict";

module.exports = function run(argv) {
  require("yargs")(argv)
    .commandDir("./lib/cmds")
    .help()
    .alias("help", "h")
    .version(false).argv;
};
