export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
  };
}

export interface User {
  id?: number;
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
}
export interface FavouriteState {
  items: Product[];
}

export interface Country {
  name: {
    common: string;
    official: string;
  };
  capital?: string[];
  region: string;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  population: number;
  cca3: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  paymentMethod: "creditCard" | "cashOnDelivery";
  cardNumber: string;
  cardExpiry: string;
  cardCVC: string;
  specialInstructions: string;
}
