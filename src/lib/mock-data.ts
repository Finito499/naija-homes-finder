import { Property } from '../types';

export const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Luxury 3 Bedroom Apartment',
    description: 'A beautiful luxury apartment located in the heart of Victoria Island. Features modern amenities, 24/7 security, and a stunning view of the Atlantic Ocean.',
    price: 4500000,
    location: 'Victoria Island, Lagos',
    city: 'Lagos',
    state: 'Lagos',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 1800,
    images: [
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/82e6a5e4-78e7-411a-9726-afaee531ceda/hero-apartment-39601842-1778790789635.webp',
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/82e6a5e4-78e7-411a-9726-afaee531ceda/apartment-interior-1-9308b1f9-1778790790805.webp'
    ],
    type: 'Apartment',
    landlord: {
      name: 'Chidi Okafor',
      verified: true,
      avatar: 'https://i.pravatar.cc/150?u=chidi'
    },
    coordinates: { lat: 6.4281, lng: 3.4219 }
  },
  {
    id: '2',
    title: 'Modern 2 Bedroom Duplex',
    description: 'Newly built duplex in a serene environment. High-speed internet, solar backup, and ample parking space.',
    price: 3200000,
    location: 'Lekki Phase 1, Lagos',
    city: 'Lagos',
    state: 'Lagos',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    images: [
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/82e6a5e4-78e7-411a-9726-afaee531ceda/apartment-exterior-1-d5d3eb15-1778790789266.webp',
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/82e6a5e4-78e7-411a-9726-afaee531ceda/apartment-interior-2-8bcc80d6-1778790790398.webp'
    ],
    type: 'House',
    landlord: {
      name: 'Amaka Adeleke',
      verified: true,
      avatar: 'https://i.pravatar.cc/150?u=amaka'
    },
    coordinates: { lat: 6.4474, lng: 3.4733 }
  },
  {
    id: '3',
    title: 'Minimalist Studio Apartment',
    description: 'Perfect for young professionals. Located in Gwarinpa with easy access to the central business district.',
    price: 1500000,
    location: 'Gwarinpa, Abuja',
    city: 'Abuja',
    state: 'FCT',
    bedrooms: 1,
    bathrooms: 1,
    sqft: 600,
    images: [
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/82e6a5e4-78e7-411a-9726-afaee531ceda/apartment-interior-2-8bcc80d6-1778790790398.webp'
    ],
    type: 'Studio',
    landlord: {
      name: 'Tunde Bakare',
      verified: false,
      avatar: 'https://i.pravatar.cc/150?u=tunde'
    },
    coordinates: { lat: 9.0765, lng: 7.3986 }
  }
];