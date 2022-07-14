import { writeFileSync } from "fs";
import { resolve } from "path";

import { getDirectories } from "../src/controllers/fs-utils";

function main() {
  const commandsFolder = resolve(__dirname, "../src/commands");
  const commands = getDirectories(commandsFolder);
  const importLines = commands.map(
    (cmd) => `export { ${cmd} } from "./${cmd}";`
  );
  const outputStr = importLines.join("\n");
  writeFileSync(`${commandsFolder}/index.ts`, `${outputStr}\n`, "utf-8");
}

main();
