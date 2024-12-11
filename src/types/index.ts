export interface Coffee {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface CartItem {
  coffee: Coffee;
  quantity: number;
}

export interface Order {
  name: string;
  email: string;
  phone: string;
  address: string;
  items: CartItem[];
  total: number;
  discount: number;
  finalTotal: number;
}

export interface Promo {
  id: number;
  title: string;
  description: string;
  discount: number;
  image: string;
  validUntil: string;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  publishDate: string;
}

export interface HeroSlide {
  id: number;
  image: string;
  quote: string;
  author: string;
}

export interface Milestone {
  id: number;
  year: string;
  description: string;
}