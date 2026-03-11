import { Project } from "utils/types";

export default ((): Project => ({
  id: "wellevate-ticketing",
  company: "wellevate",
  name: "Ticketing System",
  desc: "An internal ticketing and issue-tracking system built with Next.js and MongoDB, enabling teams to manage, track, and resolve requests efficiently.",
  thumbnail: "/images/projects/ticketing-system/1.png",
  logo: "/images/projects/ticketing-system/logo.png",
  role: "fullstack",
  tech: ["nextjs", "react", "mongodb", "nodejs", "typescript"],
  previewText: "View Screenshots",
  preview: [
    { img: "/images/projects/ticketing-system/1.png", caption: "Screenshot 1" },
    { img: "/images/projects/ticketing-system/2.png", caption: "Screenshot 2" },
  ],
}))();
