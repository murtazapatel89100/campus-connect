import fs from "fs";
import path from "path";

const envPath: string = path.resolve(process.cwd(), ".env.local");
const templatePath: string = path.resolve(process.cwd(), "env.template");

function checkAndCreateEnv(): void {
  if (fs.existsSync(envPath)) {
    console.log("✅ Your .env exists");
  } else {
    if (fs.existsSync(templatePath)) {
      fs.copyFileSync(templatePath, envPath);
      console.log(".env was missing. Created it from env.template");
    } else {
      console.error("env.template is missing. Cannot create .env");
      process.exit(1);
    }
  }
}

checkAndCreateEnv();
