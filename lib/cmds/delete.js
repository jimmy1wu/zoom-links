"use strict";

const chalk = require("chalk");
const meetings = require("../store");

const { log } = console;

module.exports = {
  command: "delete <name>",
  aliases: ["rm"],
  describe: "Delete a saved Zoom meeting",
  handler: function (argv) {
    const { name } = argv;
    if (!meetings.has(name)) {
      log(chalk.red("Zoom meeting does not exist."));
      process.exit(1);
    }

    meetings.delete(name);

    log(chalk.green("Successfully deleted Zoom meeting."));
    process.exit(0);
  },
};
