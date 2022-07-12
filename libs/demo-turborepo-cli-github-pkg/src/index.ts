#!/usr/bin/env node
import { readFileSync } from "fs";
import { resolve } from "path";

import chalk from "chalk";
import { Command, createCommand } from "commander";
import {
  Package,
  UpdateNotifier,
  default as updateNotifier,
} from "update-notifier";

import * as commands from "./commands";

import type { PackageJson } from "type-fest";

const pkgJson = JSON.parse(
  readFileSync(resolve(__dirname, "..", "package.json"), "utf-8")
) as PackageJson;

const notifier: UpdateNotifier = updateNotifier({
  pkg: pkgJson as Package,
  // 1 day interval
  updateCheckInterval: 1000 * 60 * 60 * 24,
});

if (notifier.update) {
  console.log(
    `Update available: ${chalk.gray(notifier.update.current)} -> ${chalk.green(
      notifier.update.latest
    )}`
  );
  console.log(
    `Run ${chalk.cyan(`npm i -g ${notifier.update.name}`)} to update\n`
  );
}

const program = createCommand();
program.version(pkgJson.version ?? "0");
Object.values(commands).map((cmd: (program: Command) => void) => {
  cmd(program as Command);
});

program.parse(process.argv);
