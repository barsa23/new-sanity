// Different environments use different variables
const projectId =
  import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID! ||
  import.meta.env.PUBLIC_SANITY_PROJECT_ID!;
const dataset =
  import.meta.env.PUBLIC_SANITY_STUDIO_DATASET! ||
  import.meta.env.PUBLIC_SANITY_DATASET!;


// Feel free to remove this check if you don't need it
// if (!projectId || !dataset) {
//   throw new Error(
//     `Missing environment variable(s). Check if named correctly in .env file.\n\nShould be:\nPUBLIC_SANITY_STUDIO_PROJECT_ID=${projectId}\nPUBLIC_SANITY_STUDIO_DATASET=${dataset}\n\nAvailable environment variables:\n${JSON.stringify(
//       import.meta.env,
//       null,
//       2
//     )}`
//   );
// }
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schema";

export default defineConfig({
  name: "project-name",
  title: "Project Name",
  projectId: "5zh25q8a",
  dataset: "production",
    backend: {
      name: "github",
      branch: "main",
      repo: "barsa23/new-sanity",
      publish_mode: "editorial_workflow",
      squash_merges: true,
      site_url: "https://new-sanity-mu.vercel.app/" },
 
  
  plugins: [deskTool(), visionTool(), vercelDeployTool()],
  schema: {
    types: schemaTypes,
  },
});





