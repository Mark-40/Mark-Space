import { Project } from "utils/types";

export default ((): Project => ({
  id: "portbarton-school",
  name: "Bobby and Kates Academy",
  desc: "A school management dashboard built with PHP and MySQL for Portbarton, providing administrators with tools to manage student records, grades, and school data.",
  thumbnail: "/images/projects/portbarton-school/1.png",
  logo: "/images/projects/portbarton-school/1.png",
  role: "fullstack",
  tech: ["php", "mysql", "html", "css", "javascript"],
  previewText: "View Screenshots",
  preview: [
    { img: "/images/projects/portbarton-school/1.png", caption: "Screenshot 1" },
  ],
  platforms: [
    { type: "web", link: "https://bobbyandkatesacademyedu.net/" },
  ],
}))();
