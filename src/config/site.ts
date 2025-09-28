import type { NavigationLink } from "@/types/commerce";

export const siteConfig = {
  name: "Mesa Steam Showers",
  description:
    "Luxury steam showers, bathtubs, and saunas engineered for spa-quality experiences in the comfort of your home.",
  contact: {
    phone: "1-888-980-8889",
    email: "support@mesasteamshowers.com",
    hours: "Mon–Fri 9am to 6pm EST",
  },
  social: {
    facebook: "https://www.facebook.com/mesasteamshowers",
    instagram: "https://www.instagram.com/mesasteamshowers",
    youtube: "https://www.youtube.com/@mesasteamshowers",
  },
  navigation: {
    primary: [
      { title: "Steam Showers", href: "/collections/steam-showers" },
      { title: "Walk-In Tubs", href: "/collections/walk-in-bathtubs" },
      { title: "Whirlpool Tubs", href: "/collections/whirlpool-tubs" },
      { title: "Infrared Saunas", href: "/collections/infrared-saunas" },
      { title: "All Products", href: "/products" },
    ] satisfies NavigationLink[],
    secondary: [
      { title: "Installation", href: "/pages/installation" },
      { title: "Financing", href: "/pages/financing" },
      { title: "FAQs", href: "/pages/faq" },
      { title: "Contact", href: "/pages/contact" },
    ] satisfies NavigationLink[],
    utility: [
      { title: "Account", href: "/account" },
      { title: "Cart", href: "/cart" },
    ] satisfies NavigationLink[],
  },
} as const;

export type SiteConfig = typeof siteConfig;
