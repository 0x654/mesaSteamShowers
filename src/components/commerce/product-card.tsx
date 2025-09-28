import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/commerce";
import { formatCurrency } from "@/lib/currency";

export function ProductCard({ product }: { product: Product }) {
  const minPrice = formatCurrency(product.priceRange.min.amount, product.priceRange.min.currencyCode);
  const maxPrice = formatCurrency(product.priceRange.max.amount, product.priceRange.max.currencyCode);

  return (
    <Link
      href={`/products/${product.handle}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
        {product.featuredImage ? (
          <Image
            src={product.featuredImage.src}
            alt={product.featuredImage.altText ?? product.title}
            fill
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
          />
        ) : null}
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600 shadow">
          Free Shipping
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-900">{product.title}</h3>
          <span className="text-sm font-medium text-blue-600">In Stock</span>
        </div>
        <p className="line-clamp-2 text-sm text-slate-600">{product.excerpt ?? product.description}</p>
        <div className="mt-auto flex items-baseline justify-between pt-2">
          <div className="text-lg font-semibold text-slate-900">
            {minPrice}
            {minPrice !== maxPrice ? <span className="text-sm font-normal text-slate-500"> – {maxPrice}</span> : null}
          </div>
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">View Details</span>
        </div>
      </div>
    </Link>
  );
}
