import { Project } from "utils/types";

export default ((): Project => ({
  id: "wellevate-console",
  company: "wellevate",
  name: "Wellevate Console",
  desc: "A management console for Wellevate Employees and Clients, built with Next.js and MongoDB, enabling efficient administration and monitoring of platform operations.",
  thumbnail: "/images/projects/wellevate-console/1.png",
  logo: "/images/projects/wellevate-console/logo.png",
  role: "fullstack",
  tech: ["nextjs", "react", "mongodb", "nodejs", "typescript"],
  previewText: "View Screenshots",
  preview: [
    { img: "/images/projects/wellevate-console/1.png", caption: "Screenshot 1" },
    { img: "/images/projects/wellevate-console/2.png", caption: "Screenshot 2" },
  ],
}))();
