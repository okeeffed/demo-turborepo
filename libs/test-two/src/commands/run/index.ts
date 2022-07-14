import { runImpl } from "./run";

import type { Command } from "commander";

export const run = (program: Command): void => {
  program
    .command("run")
    .alias("r")
    .requiredOption("-w, --world <value>", "run world value")
    .option("-m, --meaning <value>", "replacement for prompt")
    .description("simple run world")
    .action(runImpl);
};
