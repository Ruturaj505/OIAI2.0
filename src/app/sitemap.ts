import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://oiai.edu.in";
  const currentDate = new Date().toISOString();

  const routes = [
    "",
    "/career-roadmap",
    "/internships",
    "/corporate-training",
    "/academic-partnerships",
    "/workshops",
    "/faculty",
    "/projects",
    "/success-stories",
    "/verify-certificate",
    "/blog",
    "/faq",
    "/bhubaneswar",
    "/odisha",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/bhubaneswar" || route === "/career-roadmap" ? 0.9 : 0.8,
  }));
}
