"use strict";

const open = require("open");
const chalk = require("chalk");
const meetings = require("../store");

const { log } = console;

module.exports = {
  command: "join <name>",
  aliases: ["j"],
  describe: "Join a Zoom meeting",
  builder: function (yargs) {
    return yargs.option("s", {
      alias: "start",
      describe: "Start the meeting if you are the host",
      boolean: true,
    });
  },
  handler: function (argv) {
    const { name, start } = argv;
    const meeting = meetings.get(name);
    if (!meeting) {
      log(chalk.red("Zoom meeting does not exist."));
      process.exit(1);
    }

    const zoomURL = new URL(meeting);
    const host = zoomURL.host;
    const action = start ? "start" : "join";
    const confno = `confno=${zoomURL.pathname.split("/")[2]}`;
    const pwd = zoomURL.search && `&${zoomURL.search.split("?")[1]}`;
    const zoomDirectLink = `zoommtg://${host}/${action}?${confno}${pwd}`;

    log("Joining Zoom meeting...");
    open(zoomDirectLink);
  },
};
