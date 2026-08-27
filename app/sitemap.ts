import { MINERALS, SERVICES } from "@/lib/data";
import { url } from "inspector";
import { MetadataRoute } from "next";


const BASE_URL = "https://theloniousmining.com";

async function fetchDynamicRoutes(){
    const services = SERVICES.map((service) => service.slug)
    const minerals = MINERALS.map((mineral) => mineral.slug)
    return {services, minerals}
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticRoutes = [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1.0
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8
        },
        {
            url: `${BASE_URL}/services`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.6
        },
        {
            url: `${BASE_URL}/minerals`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.6
        },
    ];

  const { services, minerals } = await fetchDynamicRoutes();

  const mineralEntries = minerals.map((slug: string) => ({
    url: `https://${BASE_URL}/minerals/${slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const serviceEntries = services.map((slug: string) => ({
    url: `https://${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...mineralEntries, ...serviceEntries];
}