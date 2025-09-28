import Image from "next/image";
import Link from "next/link";
import type { CollectionSummary } from "@/types/commerce";

export function CollectionCard({ collection }: { collection: CollectionSummary }) {
  return (
    <Link
      href={`/collections/${collection.handle}`}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-56 w-full overflow-hidden">
        {collection.heroImage ? (
          <Image
            src={collection.heroImage.src}
            alt={collection.heroImage.altText ?? collection.title}
            fill
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70" />
        <div className="absolute bottom-0 p-6 text-white">
          <h3 className="text-xl font-semibold">{collection.title}</h3>
          {collection.description ? (
            <p className="mt-2 line-clamp-2 text-sm text-slate-100">{collection.description}</p>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
