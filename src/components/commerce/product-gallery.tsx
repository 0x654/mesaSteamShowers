"use client";

import { useState } from "react";
import Image from "next/image";
import type { ImageAsset } from "@/types/commerce";

export function ProductGallery({ media }: { media: ImageAsset[] }) {
  const [activeImage, setActiveImage] = useState(media[0]);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-slate-100">
        {activeImage ? (
          <Image
            key={activeImage.id}
            src={activeImage.src}
            alt={activeImage.altText ?? "Product image"}
            fill
            className="h-full w-full object-cover"
            sizes="(min-width: 1280px) 40vw, 100vw"
            priority
          />
        ) : null}
      </div>
      <div className="grid grid-cols-4 gap-3">
        {media.map((image) => (
          <button
            key={image.id}
            className={`relative aspect-square overflow-hidden rounded-2xl border-2 transition ${
              activeImage?.id === image.id ? "border-blue-600" : "border-transparent"
            }`}
            onClick={() => setActiveImage(image)}
            type="button"
          >
            <Image
              src={image.src}
              alt={image.altText ?? "Product thumbnail"}
              fill
              className="h-full w-full object-cover"
              sizes="96px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
