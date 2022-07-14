/**
 * Used to setup a brand-new CLI package
 */
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

import prompts from "prompts";

import type { PackageJson } from "type-fest";

function getPackageJson(): PackageJson {
  const pkgJson = readFileSync(resolve(__dirname, "../package.json"), "utf-8");
  return JSON.parse(pkgJson) as PackageJson;
}

function writePackageJson(json: PackageJson): void {
  writeFileSync(
    resolve(__dirname, "../package.json"),
    JSON.stringify(json, null, 2),
    "utf-8"
  );
}

function promptCliName() {
  return prompts({
    type: "text",
    name: "packageName",
    message: "What is the name of the package? ie. @okeeffed/<pkg-name>",
  });
}

async function main(): Promise<void> {
  const { packageName } = (await promptCliName()) as { packageName: string };
  const json = getPackageJson();
  const repoName = `@okeeffed/${packageName}-cli`;

  json.name = repoName;
  json.bin = {
    [packageName]: "lib/index.js",
  };
  json.scripts = {
    ...json.scripts,
    deploy: `npm uninstall -g . && npm i -g . && asdf reshim nodejs && ${packageName} --help`,
  };
  json.repository = {
    type: "git",
    url: `git+https://github.com/okeeffed/${repoName}.git`,
  };
  json.bugs = {
    url: `https://github.com/okeeffed/${repoName}/issues`,
  };
  json.homepage = `https://github.com/okeeffed/${repoName}#readme`;

  writePackageJson(json);

  console.log("package.json setup");
  console.log(
    "You must set the NPM_REGISTRY_TOKEN to install required packages in CI"
  );
  console.log('$ gh secret set NPM_REGISTRY_TOKEN -b"secret-value"');
}

// eslint-disable-next-line
main();
