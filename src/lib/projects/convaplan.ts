import { Project } from "utils/types";

export default ((): Project => ({
  id: "convaplan",
  company: "wellevate",
  name: "ConvaPlan",
  desc: "A web application built with Next.js and MongoDB for Wellevate, designed to streamline planning and management workflows.",
  thumbnail: "/images/projects/convaplan/1.png",
  logo: "/images/projects/convaplan/1.png",
  role: "fullstack",
  tech: ["nextjs", "react", "mongodb", "nodejs", "typescript"],
  previewText: "View Screenshots",
  preview: [
    { img: "/images/projects/convaplan/1.png", caption: "Screenshot 1" },
    { img: "/images/projects/convaplan/2.png", caption: "Screenshot 2" },
  ],
}))();
