export type ImageAsset = {
  id: string;
  altText?: string | null;
  src: string;
  width: number;
  height: number;
};

export type Price = {
  amount: number;
  currencyCode: string;
  compareAtAmount?: number | null;
};

export type ProductVariant = {
  id: string;
  title: string;
  sku?: string | null;
  availableForSale: boolean;
  price: Price;
  image?: ImageAsset | null;
  selectedOptions: Array<{ name: string; value: string }>;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  vendor?: string | null;
  description: string;
  excerpt?: string | null;
  collections: CollectionSummary[];
  featuredImage?: ImageAsset | null;
  media: ImageAsset[];
  variants: ProductVariant[];
  options: Array<{ id: string; name: string; values: string[] }>;
  priceRange: {
    min: Price;
    max: Price;
  };
  metafields?: Record<string, string | number | boolean | null>;
};

export type CollectionSummary = {
  id: string;
  handle: string;
  title: string;
  description?: string | null;
  heroImage?: ImageAsset | null;
};

export type CollectionWithProducts = CollectionSummary & {
  products: Product[];
};

export type NavigationLink = {
  title: string;
  href: string;
  children?: NavigationLink[];
};

export type Review = {
  id: string;
  title: string;
  body: string;
  rating: number;
  createdAt: string;
  author: {
    name: string;
    location?: string | null;
  };
};

export type CartLineItem = {
  id: string;
  productId: string;
  variantId: string;
  title: string;
  variantTitle?: string | null;
  quantity: number;
  price: Price;
  image?: ImageAsset | null;
};

export type Cart = {
  id: string;
  lines: CartLineItem[];
  subtotal: Price;
  total: Price;
  discounts?: Array<{ code: string; amount: Price }>;
  updatedAt: string;
};

export type SeoMetadata = {
  title: string;
  description: string;
  image?: ImageAsset | null;
};
