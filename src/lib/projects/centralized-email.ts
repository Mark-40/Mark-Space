import { Project } from "utils/types";

export default ((): Project => ({
  id: "centralized-email",
  company: "wellevate",
  name: "Centralized Email Notification",
  desc: "A microservice built with Spring Boot that centralizes email notification delivery across Wellevate's systems, ensuring consistent and reliable communication.",
  thumbnail: "/images/lowpoly.png",
  logo: "/images/lowpoly.png",
  role: "fullstack",
  tech: ["springboot", "java", "microservices", "smtp", "rest-api"],
}))();
