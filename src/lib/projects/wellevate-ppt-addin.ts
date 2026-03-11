import { Project } from "utils/types";

export default ((): Project => ({
  id: "wellevate-ppt-addin",
  company: "wellevate",
  name: "PowerPoint Add-in",
  desc: "A PowerPoint Add-in built in VB.NET that extends Microsoft PowerPoint that is AI powered with custom features and functionality for designers use ",
  thumbnail: "/images/lowpoly.png",
  logo: "/images/projects/powerpoint-addin/logo.png",
  role: "fullstack",
  tech: ["vb.net", "microsoft-office", "powerpoint-addin", "visual-studio"],
  previewText: "View Demo",
  preview: [
    { yt: "TM82xJZhADE", caption: "PowerPoint Add-in Demo" },
    { yt: "7AOlKWGg9rA", caption: "PowerPoint Add-in Demo 2" },
    { yt: "e-aRFQZo-4o", caption: "PowerPoint Add-in Demo 3" },
  ],
}))();
