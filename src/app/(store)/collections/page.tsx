import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CollectionCard } from "@/components/commerce/collection-card";
import { mockCollections } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Shop by Category | Mesa Steam Showers",
  description: "Explore steam showers, saunas, bathtubs, and packages curated for home spa renovations.",
});

export default function CollectionsPage() {
  return (
    <div className="py-16">
      <Container className="space-y-12">
        <SectionHeading eyebrow="Shop" align="center">
          Browse by Category
        </SectionHeading>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {mockCollections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </Container>
    </div>
  );
}
