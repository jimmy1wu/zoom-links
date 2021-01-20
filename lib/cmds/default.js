"use strict";

const chalk = require("chalk");

const { log } = console;

module.exports = {
  command: "$0",
  handler: function (argv) {
    const titleArt =
      "  __________   ____  __  __        _      _____ _   _ _  __ _____  \n" +
      " |___  / __ \\ / __ \\|  \\/  |      | |    |_   _| \\ | | |/ // ____| \n" +
      "    / / |  | | |  | | \\  / |______| |      | | |  \\| | ' /| (___   \n" +
      "   / /| |  | | |  | | |\\/| |______| |      | | | . ` |  <  \\___ \\  \n" +
      "  / /_| |__| | |__| | |  | |      | |____ _| |_| |\\  | . \\ ____) | \n" +
      " /_____\\____/ \\____/|_|  |_|      |______|_____|_| \\_|_|\\_\\_____/ \n\n";

    log(chalk.yellowBright(titleArt));
    log("Enter 'zm --help' for a list of commands.");
    process.exit(0);
  },
};
