export interface NavItem {
  label: string;
  href: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  capacity: string;
  dimensions: string;
  steamGenerator: string;
  finishOptions: string[];
  highlights: string[];
}

export interface FeatureHighlight {
  title: string;
  description: string;
  icon: string;
}

export interface ExperiencePillar {
  title: string;
  description: string;
  points: string[];
}

export interface ConfiguratorStep {
  title: string;
  description: string;
  action: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
