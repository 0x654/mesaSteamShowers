import type { CollectionWithProducts, ImageAsset, Product } from "@/types/commerce";

const baseImage: ImageAsset = {
  id: "hero",
  src: "https://images.unsplash.com/photo-1600566753751-8f43f8c25b7a?auto=format&fit=crop&w=1200&q=80",
  width: 1200,
  height: 1200,
  altText: "Modern steam shower with glass enclosure",
};

const generateProduct = (id: number): Product => ({
  id: `product-${id}`,
  handle: `mesa-${id}`,
  title: `Mesa Steam Shower ${id}`,
  vendor: "Mesa",
  description:
    "A fully enclosed steam shower featuring rainfall ceiling shower, hydro-massage jets, and aromatherapy steam delivery.",
  excerpt: "Luxury hydrotherapy steam shower with Bluetooth audio and chromatherapy lighting.",
  collections: [
    { id: "col-1", handle: "steam-showers", title: "Steam Showers" },
  ],
  featuredImage: baseImage,
  media: [
    baseImage,
    {
      ...baseImage,
      id: `alt-${id}`,
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      altText: "Luxurious bathroom interior",
    },
  ],
  variants: [
    {
      id: `variant-${id}`,
      title: "Default",
      availableForSale: true,
      price: { amount: 3499 + id * 100, currencyCode: "USD" },
      selectedOptions: [],
    },
  ],
  options: [],
  priceRange: {
    min: { amount: 3499 + id * 100, currencyCode: "USD" },
    max: { amount: 3899 + id * 120, currencyCode: "USD" },
  },
});

export const mockCollections: CollectionWithProducts[] = [
  {
    id: "col-1",
    handle: "steam-showers",
    title: "Steam Showers",
    description: "Transform your bathroom into a spa sanctuary with feature-rich steam showers.",
    heroImage: baseImage,
    products: [generateProduct(1), generateProduct(2), generateProduct(3)],
  },
  {
    id: "col-2",
    handle: "infrared-saunas",
    title: "Infrared Saunas",
    description: "Detoxify and unwind with therapeutic full-spectrum infrared saunas.",
    heroImage: {
      id: "sauna",
      src: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1200&q=80",
      width: 1200,
      height: 800,
      altText: "Infrared sauna with cedar interior",
    },
    products: [generateProduct(4), generateProduct(5), generateProduct(6)],
  },
];

export const mockProducts = mockCollections.flatMap((collection) => collection.products);
