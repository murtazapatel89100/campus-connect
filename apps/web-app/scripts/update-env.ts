import fs from "fs";
import path from "path";

const localEnvPath = path.resolve(process.cwd(), ".env.local");
const templatePath = path.resolve(process.cwd(), "env.template");

function parseEnvKeys(filePath: string): string[] {
  if (!fs.existsSync(filePath)) return [];
  return fs
    .readFileSync(filePath, "utf-8")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => line.split("=")[0].trim());
}

function serializeKeys(keys: string[]): string {
  return keys.map((key) => `${key}=`).join("\n") + "\n";
}

function syncTemplate() {
  const localKeys = parseEnvKeys(localEnvPath);

  fs.writeFileSync(templatePath, serializeKeys(localKeys), "utf-8");
  console.log("env.template synced with .env.local");
}

syncTemplate();
