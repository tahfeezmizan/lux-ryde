/* eslint-disable @typescript-eslint/no-explicit-any */

export interface FeatureType {
  icon: any; // Should be a component, not JSX
  title: string;
  description: string;
}


export interface Ride {
  id: string
  type: string
  description: string
  price: number
  image: string
  rating: number
  reviews: number
}

export interface Driver {
  id: string
  name: string
  email: string
  phone: string
  address: string
  avatar: string
  rating: number
  reviews: number
  location: {
    lat: number
    lng: number
  }
  car: {
    name: string
    model: string
    type: string
    color: string
    image: string
  }
}

