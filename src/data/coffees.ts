import type { Coffee } from '../types';

export const coffees: Coffee[] = [
  {
    id: 1,
    name: 'Espresso',
    price: 35000,
    description: 'Strong and concentrated coffee shot',
    image: 'https://images.unsplash.com/photo-1520516472218-ed48f91f25c0?w=500',
    category: 'Hot Coffee'
  },
  {
    id: 2,
    name: 'Cappuccino',
    price: 45000,
    description: 'Espresso with steamed milk foam',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500',
    category: 'Hot Coffee'
  },
  {
    id: 3,
    name: 'Iced Latte',
    price: 42000,
    description: 'Espresso with cold milk and ice',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500',
    category: 'Cold Coffee'
  },
  {
    id: 4,
    name: 'Caramel Macchiato',
    price: 48000,
    description: 'Espresso with vanilla and caramel',
    image: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d?w=500',
    category: 'Hot Coffee'
  },
  {
    id: 5,
    name: 'Cold Brew',
    price: 38000,
    description: 'Smooth cold-brewed coffee',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500',
    category: 'Cold Coffee'
  }
];