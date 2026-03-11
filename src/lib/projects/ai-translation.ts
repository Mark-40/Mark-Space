import { Project } from "utils/types";

export default ((): Project => ({
  id: "ai-translation",
  company: "wellevate",
  name: "AI Translation Service",
  desc: "A microservice built with Spring Boot that provides AI-powered translation capabilities, enabling multi-language support across Wellevate's platform.",
  thumbnail: "/images/lowpoly.png",
  logo: "/images/lowpoly.png",
  role: "fullstack",
  tech: ["springboot", "java", "microservices", "rest-api", "ai"],
}))();
