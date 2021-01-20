"use strict";

const chalk = require("chalk");
const meetings = require("../store");

const { log } = console;

module.exports = {
  command: "list",
  aliases: ["ls"],
  describe: "Lists all saved Zoom meetings",
  handler: function (argv) {
    if (meetings.size === 0) {
      log("No Zoom meetings saved.");
      process.exit(1);
    }

    const longestKeyLength = Math.max(
      ...Object.keys(meetings.all).map((key) => key.length)
    );

    log(chalk.bold(`${"NAME".padEnd(longestKeyLength, " ")}\tLINK`));
    for (let name in meetings.all) {
      log(`${name.padEnd(longestKeyLength, " ")}\t${meetings.get(name)}`);
    }
    process.exit(0);
  },
};
