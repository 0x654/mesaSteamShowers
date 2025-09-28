import { products } from "@/data/products";
import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/cards/ProductCard";

export function ProductShowcase() {
  return (
    <section id="showers" className="bg-slate-950 py-24" aria-labelledby="showcase-heading">
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Collection</p>
            <h2 id="showcase-heading" className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Mesa steam shower suites for every architectural vision.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-slate-300">
            Explore our curated 2024 line featuring modular footprints, integrated hydrotherapy, and precision climate control. Each model can be reconfigured with your designer through the Mesa studio.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
