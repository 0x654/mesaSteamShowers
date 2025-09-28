import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductGrid } from "@/components/commerce/product-grid";
import { mockProducts } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Shop Steam Showers, Saunas & Walk-In Tubs",
  description: "Browse the complete Mesa Steam Showers catalog featuring in-stock steam showers, saunas, and hydrotherapy bathtubs.",
});

export default function ProductsPage() {
  return (
    <div className="py-16">
      <Container className="space-y-12">
        <SectionHeading eyebrow="Catalog" align="center">
          All Mesa Products
        </SectionHeading>
        <ProductGrid products={mockProducts} />
      </Container>
    </div>
  );
}
