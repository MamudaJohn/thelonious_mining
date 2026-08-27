import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/dashboard/"], // block anything private
      },
    ],
    sitemap: "https://yourdomain.com/sitemap.xml",
  };
}