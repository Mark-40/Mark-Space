import { Project } from "utils/types";

export default ((): Project => ({
  id: "pruone",
  company: "prulifeuk",
  name: "PruOne",
  desc: "A web application for Prulife UK built with React and Node.js, providing a unified platform for agents and clients to manage insurance products and services.",
  thumbnail: "/images/projects/pruone/1.png",
  logo: "/images/projects/pruone/1.png",
  role: "fullstack",
  tech: ["react", "nodejs", "javascript", "typescript"],
  previewText: "View Screenshots",
  preview: [
    { img: "/images/projects/pruone/1.png", caption: "Screenshot 1" },
    { img: "/images/projects/pruone/2.png", caption: "Screenshot 2" },
  ],
  platforms: [
    {
      type: "web",
      link: "https://www.prulifeuk.com.ph",
    },
  ],
}))();
