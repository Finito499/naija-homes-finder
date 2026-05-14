export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  city: string;
  state: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  images: string[];
  type: 'Apartment' | 'House' | 'Studio';
  landlord: {
    name: string;
    verified: boolean;
    avatar: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'tenant' | 'landlord';
  isVerified: boolean;
  phone?: string;
  nin?: string;
}