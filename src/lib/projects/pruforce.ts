import { Project } from "utils/types";

export default ((): Project => ({
  id: "pruforce",
  company: "prulifeuk",
  name: "Pruforce",
  desc: "A web application for Prulife UK built with React and Node.js, empowering financial advisors with tools to manage client portfolios and insurance policies.",
  thumbnail: "/images/projects/pruforce/1.png",
  logo: "/images/projects/pruforce/1.png",
  role: "fullstack",
  tech: ["react", "nodejs", "javascript", "typescript"],
  previewText: "View Screenshots",
  preview: [
    { img: "/images/projects/pruforce/1.png", caption: "Screenshot 1" },
  ],
  platforms: [
    {
      type: "web",
      link: "https://www.prulifeuk.com.ph",
    },
  ],
}))();
