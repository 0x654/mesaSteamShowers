import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ProductGallery } from "@/components/commerce/product-gallery";
import { AddToCartButton } from "@/components/commerce/add-to-cart-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { mockProducts } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/seo";
import { formatCurrency } from "@/lib/currency";

export function generateMetadata({ params }: { params: { handle: string } }): Metadata {
  const product = mockProducts.find((item) => item.handle === params.handle);
  if (!product) {
    return buildMetadata({ title: "Product Not Found" });
  }

  return buildMetadata({
    title: `${product.title} | Mesa Steam Showers`,
    description: product.excerpt ?? product.description,
  });
}

export function generateStaticParams() {
  return mockProducts.map((product) => ({ handle: product.handle }));
}

export default function ProductDetailPage({ params }: { params: { handle: string } }) {
  const product = mockProducts.find((item) => item.handle === params.handle) ?? notFound();

  const price = formatCurrency(product.priceRange.min.amount, product.priceRange.min.currencyCode);

  return (
    <div className="py-16">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <ProductGallery media={product.media} />
        <div className="space-y-6">
          <div className="space-y-3">
            <SectionHeading eyebrow={product.collections[0]?.title ?? "Mesa"}>
              {product.title}
            </SectionHeading>
            <p className="text-lg text-slate-600">{product.description}</p>
            <div className="text-3xl font-semibold text-slate-900">{price}</div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Includes</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• 6kW steam generator with aromatherapy reservoir</li>
              <li>• Rainfall shower head + handheld wand</li>
              <li>• Hydro-massage body jets and foot massager</li>
              <li>• Bluetooth audio, LED chromatherapy, ozone sterilization</li>
            </ul>
          </div>
          <AddToCartButton
            lineItem={{
              id: `${product.id}-default`,
              productId: product.id,
              variantId: product.variants[0]?.id ?? product.id,
              title: product.title,
              variantTitle: product.variants[0]?.title,
              quantity: 1,
              price: product.priceRange.min,
              image: product.featuredImage,
            }}
          />
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Delivery &amp; Support</p>
            <p>White-glove freight delivery within 7–10 business days nationwide.</p>
            <p>US-based product specialists available via phone, chat, or video consultations.</p>
            <p>Financing available with instant approval options at checkout.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
