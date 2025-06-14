import { Driver, Ride } from "@/types/interface"

export const demoRides: Ride[] = [
  {
    id: "ride-1",
    type: "XL Intercity",
    description: "Comfortable rides, top-quality drivers",
    price: 450.5,
    image: "/placeholder.svg?height=80&width=120",
    rating: 4,
    reviews: 120,
  },
  {
    id: "ride-2",
    type: "XL Intercity",
    description: "Comfortable rides, top-quality drivers",
    price: 450.5,
    image: "/placeholder.svg?height=80&width=120",
    rating: 5,
    reviews: 89,
  },
  {
    id: "ride-3",
    type: "XL Intercity",
    description: "Comfortable rides, top-quality drivers",
    price: 450.5,
    image: "/placeholder.svg?height=80&width=120",
    rating: 3,
    reviews: 238,
  },
  {
    id: "ride-4",
    type: "XL Intercity",
    description: "Comfortable rides, top-quality drivers",
    price: 450.5,
    image: "/placeholder.svg?height=80&width=120",
    rating: 4,
    reviews: 152,
  },
]

export const demoDrivers: Driver[] = [
  {
    id: "driver-1",
    name: "John Doe",
    email: "john@example.com",
    phone: "(917)-521-3801",
    address: "Boston",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4.5,
    reviews: 120,
    location: {
      lat: 23.8103,
      lng: 90.4225,
    },
    car: {
      name: "Mercedes Benz",
      model: "AMG G 63",
      type: "SUV",
      color: "Black",
      image: "/placeholder.svg?height=80&width=120",
    },
  },
  {
    id: "driver-2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "(917)-521-4502",
    address: "New York",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
    reviews: 95,
    location: {
      lat: 23.8203,
      lng: 90.4025,
    },
    car: {
      name: "BMW",
      model: "X5",
      type: "SUV",
      color: "White",
      image: "/placeholder.svg?height=80&width=120",
    },
  },
  {
    id: "driver-3",
    name: "Robert Johnson",
    email: "robert@example.com",
    phone: "(917)-521-6703",
    address: "Chicago",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4.2,
    reviews: 78,
    location: {
      lat: 23.7903,
      lng: 90.4125,
    },
    car: {
      name: "Audi",
      model: "Q7",
      type: "SUV",
      color: "Silver",
      image: "/placeholder.svg?height=80&width=120",
    },
  },
]

