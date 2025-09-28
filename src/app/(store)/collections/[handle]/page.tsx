import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductGrid } from "@/components/commerce/product-grid";
import { mockCollections } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata({ params }: { params: { handle: string } }): Metadata {
  const collection = mockCollections.find((item) => item.handle === params.handle);
  if (!collection) {
    return buildMetadata({ title: "Collection Not Found" });
  }

  return buildMetadata({
    title: `${collection.title} | Mesa Steam Showers`,
    description: collection.description ?? `Explore ${collection.title} from Mesa Steam Showers`,
  });
}

export function generateStaticParams() {
  return mockCollections.map((collection) => ({ handle: collection.handle }));
}

export default function CollectionDetailPage({ params }: { params: { handle: string } }) {
  const collection = mockCollections.find((item) => item.handle === params.handle) ?? notFound();

  return (
    <div className="py-16">
      <Container className="space-y-12">
        <SectionHeading eyebrow="Collection" align="center">
          {collection.title}
        </SectionHeading>
        {collection.description ? (
          <p className="mx-auto max-w-3xl text-center text-base text-slate-600">{collection.description}</p>
        ) : null}
        <ProductGrid products={collection.products} />
      </Container>
    </div>
  );
}
