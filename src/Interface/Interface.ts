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
