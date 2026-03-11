import { Project } from "utils/types";

export default ((): Project => ({
  id: "pulse",
  company: "prulifeuk",
  name: "Pulse",
  desc: "A mobile application for Prulife UK that keeps clients and agents connected, offering real-time updates on insurance policies, health tips, and financial wellness.",
  thumbnail: "/images/lowpoly.png",
  logo: "/images/lowpoly.png",
  role: "fullstack",
  tech: ["react-native", "mobile", "javascript"],
  platforms: [
    {
      type: "android",
      link: "https://play.google.com/store/apps/details?id=com.prulifeuk.pulse",
    },
    {
      type: "ios",
      link: "https://apps.apple.com/ph/app/pulse-by-pru-life-uk/id1450387580",
    },
  ],
}))();
