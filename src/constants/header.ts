import { Bug, Wheat, Factory, ShieldCheck } from 'lucide-react';

export const HEADER_CONSTANTS = {
  BRAND: {
    NAME: 'SuperAgro',
    TAGLINE: 'Premium Agricultural Solutions'
  },
  CONTACT: {
    HELPLINE: '+91 9510068068',
    EMAIL: 'abhibhimani007@gmail.com',
    ADDRESS: 'Unit-A, Nagarpalika Building, Char Chowk, Keshod, Gujarat 362220'
  },
  SEARCH: {
    DESKTOP_PLACEHOLDER: 'Search for products, crops, or pests...',
    MOBILE_PLACEHOLDER: 'Search products...'
  },
  NAVIGATION: {
    LINKS: [
      { name: 'Home', href: '#' },
      { name: 'Knowledge Center', href: '#' },
      { name: 'About Us', href: '#' },
      { name: 'Contact', href: '#' }
    ]
  },
  MEGA_MENU: {
    TITLE: 'Browse by Category',
    SUBTITLE: 'Find the perfect solution for your crops',
    WIDTH: 'w-[900px]'
  }
} as const;

export const PRODUCT_CATEGORIES = [
  {
    name: 'Categories',
    icon: ShieldCheck,
    description: 'Protect crops from harmful insects and weeds',
    products: [
      'Insecticides',
      'Fungicides',
      'Herbicides',
      'Plant Growth Regulators',
      'Fertilizers'
    ],
    color: 'text-green-600'
  },
  {
    name: 'Crops',
    icon: Wheat,
    description: 'View products suitable for specific crops',
    products: ['Groundnut', 'Wheat', 'Onion', 'Soybean', 'Mango'],
    color: 'text-blue-600'
  },
  {
    name: 'Pests',
    icon: Bug,
    description: 'Identify and control common agricultural pests',
    products: ['Aphids', 'Whiteflies', 'Fruit Borers', 'Stem Borers', 'Leaf Miners', 'Thrips'],
    color: 'text-yellow-600'
  },
  {
    name: 'Top Brands',
    icon: Factory,
    description: 'Trusted pesticide and agrochemical brands in India',
    products: [
      'Bayer CropScience Ltd.',
      'UPL Limited',
      'PI Industries Ltd.',
      'Rallis India Ltd.',
      'Bharat Rasayan Ltd.',
      'Coromandel International Ltd.'
    ],
    color: 'text-purple-600'
  }
] as const;

export const BADGES = [
  { text: '150+ Products', className: 'bg-green-100 text-green-700' },
  { text: 'Certified Quality', className: 'bg-blue-100 text-blue-700' },
  { text: 'Expert Support', className: 'bg-purple-100 text-purple-700' }
] as const;
