import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_PROJECTID!,
  dataset: process.env.NEXT_PUBLIC_DATASET!,
  title: "Campus Connect",
  apiVersion: "2025-07-07",
  basePath: "/studio",
  plugins: [structureTool()],
});

export default config;
