import { readdirSync, readFileSync, writeFileSync } from "fs";

import type { JsonObject } from "type-fest";

export function readJsonSync(filepath: string): JsonObject {
  return JSON.parse(readFileSync(filepath, "utf-8")) as JsonObject;
}

export function writeJsonSync(filepath: string, data: JsonObject): void {
  return writeFileSync(filepath, JSON.stringify(data, null, 2), "utf-8");
}

export function getDirectories(source: string): string[] {
  return readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}
