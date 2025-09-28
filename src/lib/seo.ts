import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { SeoMetadata } from "@/types/commerce";

export function buildMetadata(overrides: Partial<SeoMetadata> = {}): Metadata {
  const title = overrides.title ?? siteConfig.name;
  const description = overrides.description ?? siteConfig.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  } satisfies Metadata;
}
