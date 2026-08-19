export type Category = {
  id: string;
  title: string;
  count: string;
  icon: "checkroom" | "devices" | "home" | "face";
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
};

export const categories: Category[] = [
  {
    id: "fashion",
    title: "Fashion",
    count: "124 items",
    icon: "checkroom",
  },
  {
    id: "electronics",
    title: "Electronics",
    count: "86 items",
    icon: "devices",
  },
  {
    id: "home",
    title: "Home",
    count: "98 items",
    icon: "home",
  },
  {
    id: "beauty",
    title: "Beauty",
    count: "72 items",
    icon: "face",
  },
];

export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Minimal Leather Backpack",
    category: "Fashion",
    price: 49,
    originalPrice: 69,
    rating: 4.8,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "2",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 79,
    originalPrice: 99,
    rating: 4.9,
    reviews: 214,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "3",
    name: "Modern Ceramic Vase",
    category: "Home",
    price: 32,
    originalPrice: 45,
    rating: 4.7,
    reviews: 86,
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "4",
    name: "Premium Skin Care Set",
    category: "Beauty",
    price: 59,
    originalPrice: 79,
    rating: 4.8,
    reviews: 164,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80",
  },
];
