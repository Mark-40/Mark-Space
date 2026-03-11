// import { writeFileSync } from "fs";

import sindro from "./sindro";
import lpu from "./lpu";
import cornelia from "./cornelia";
import magezi from "./magezi";
import lufthansaCareers from "./lufthansa-careers";
import lufthansaCMR from "./lufthansa-cmr";
import teeconcepts from "./teeconcepts";
import staffmd from "./staffmd";
import cabrini from "./cabrini";
import lpuGWA from "./lpu-gwa";
import lpuLMS from "./lpu-lms";
import lpuLMSV2 from "./lpu-lms-v2";

// Wellevate
import wellevatePptAddin from "./wellevate-ppt-addin";
import wellevateConsole from "./wellevate-console";
import convaplan from "./convaplan";
import wellevateTicketing from "./wellevate-ticketing";
import aiTranslation from "./ai-translation";
import centralizedEmail from "./centralized-email";

// Prulife UK
import pruone from "./pruone";
import pruforce from "./pruforce";
import pulse from "./pulse";

// Freelance
import inventorySystem from "./inventory-system";
import portbartonSchool from "./portbarton-school";

export const homeProjects = [wellevateConsole, convaplan, wellevatePptAddin, pruone];

export const featuredProjects = [wellevateConsole, convaplan, wellevatePptAddin, pruone];

export const projects = [
  // Wellevate
  wellevateTicketing,
  aiTranslation,
  centralizedEmail,
  // Prulife UK
  pruforce,
  pulse,
  // Freelance
  inventorySystem,
  portbartonSchool,
  // Previous work
  sindro,
  lpu,
  cornelia,
  magezi,
  lufthansaCareers,
  lufthansaCMR,
  teeconcepts,
  staffmd,
  cabrini,
  lpuGWA,
  lpuLMS,
  lpuLMSV2,
];

export const allProjects = [...featuredProjects, ...projects];

// let data = JSON.stringify(projects);
// writeFileSync("public/projects.json", data);
