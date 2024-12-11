import type { Promo } from '../types';

export const promos: Promo[] = [
  {
    id: 1,
    title: "Morning Bundle",
    description: "Get a free croissant with any coffee purchase between 7-10 AM",
    discount: 20,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
    validUntil: "2024-12-31"
  },
  {
    id: 2,
    title: "Weekend Special",
    description: "Buy 2 coffees, get 1 free every Saturday and Sunday",
    discount: 33,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500",
    validUntil: "2024-12-31"
  },
  {
    id: 3,
    title: "Student Discount",
    description: "Show your student ID and get 15% off on all drinks",
    discount: 15,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500",
    validUntil: "2024-12-31"
  }
];