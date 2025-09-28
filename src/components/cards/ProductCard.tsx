import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/content";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/10 bg-slate-900 text-slate-100 shadow-lg shadow-slate-900/30 transition hover:border-cyan-300/50 hover:shadow-cyan-500/20">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/90 to-transparent" />
        <div className="absolute bottom-4 left-4 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-slate-200">
          {product.steamGenerator}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-white">{product.name}</h3>
          <p className="mt-2 text-sm text-slate-300">{product.description}</p>
        </div>
        <dl className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
          <div>
            <dt className="text-slate-400">Capacity</dt>
            <dd className="font-medium">{product.capacity}</dd>
          </div>
          <div>
            <dt className="text-slate-400">Dimensions</dt>
            <dd className="font-medium">{product.dimensions}</dd>
          </div>
          <div>
            <dt className="text-slate-400">Finishes</dt>
            <dd className="font-medium">{product.finishOptions.join(", ")}</dd>
          </div>
          <div>
            <dt className="text-slate-400">Investment</dt>
            <dd className="font-semibold text-cyan-300">{product.price}</dd>
          </div>
        </dl>
        <ul className="space-y-2 text-sm text-slate-300">
          {product.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center justify-between pt-2">
          <Link
            href="#design"
            className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
          >
            Configure this model
          </Link>
          <button className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-cyan-300">
            Compare
          </button>
        </div>
      </div>
    </article>
  );
}
