export interface Product {
  id: string;
  title: string;
  artist: string;
  price: number;
  image: string;
  genre: string;
  year: number;
  condition: 'new' | 'used';
  description: string;
  stock: number;
  isNew?: boolean;
  category: 'vinyl' | 'cd' | 'player';
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ShippingInfo {
  fullName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface PaymentInfo {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}
