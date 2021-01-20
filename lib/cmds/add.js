"use strict";

const chalk = require("chalk");
const meetings = require("../store");

const { log } = console;

module.exports = {
  command: "add <name> <link>",
  aliases: ["a"],
  describe: "Save a new Zoom meeting",
  handler: function (argv) {
    const { name, link } = argv;

    if (meetings.has(name)) {
      log(chalk.red("Zoom meeting name already exists"));
      process.exit(1);
    }

    let zoomURL;
    try {
      zoomURL = new URL(link);
    } catch (e) {
      log(chalk.red("Invalid Zoom meeting link."));
      process.exit(1);
    }

    if (
      !/^https:/.test(zoomURL.protocol) ||
      !/^(.*\.)?zoom.us/.test(zoomURL.host) ||
      !/^\/j\/[0-9]+/.test(zoomURL.pathname) ||
      !/^(\?pwd=[a-zA-Z0-9]+)?/.test(zoomURL.search)
    ) {
      log(chalk.red("Invalid Zoom meeting link."));
      process.exit(1);
    }

    meetings.set(name, zoomURL.href);

    log(chalk.green("Successfully saved Zoom meeting."));
    process.exit(0);
  },
};
