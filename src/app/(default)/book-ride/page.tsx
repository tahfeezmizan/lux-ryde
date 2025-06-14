import BookRideHero from '@/components/bookride/BookRideHero'
import ChooseRide from '@/components/bookride/ChooseRide'
import React from 'react'

export default function page() {
  const rides = [
    {
      id: 1,
      type: "XL Intercity",
      time: "10 min away",
      rating: 4.8,
      reviews: 120,
      description: "Comfortable sedans, top quality drivers",
      price: 450.5,
      driver: {
        id: 101,
        name: "James Joe",
        rating: 4.9,
        reviews: 132,
        email: "james@mail.com",
        phone: "9876543210",
        address: "Boston",
        image: "/assets/avatar1.png",
      },
      car: {
        name: "Mercedes Benz",
        model: "AMG CLS",
        type: "SUV",
        color: "Black",
        image: "/assets/avatar2.png",
      },
    },
    {
      id: 2,
      type: "XL Intercity",
      time: "12 min away",
      rating: 4.7,
      reviews: 105,
      description: "Comfortable sedans, top quality drivers",
      price: 450.5,
      driver: {
        id: 102,
        name: "Robert Smith",
        rating: 4.8,
        reviews: 98,
        email: "robert@mail.com",
        phone: "9876543211",
        address: "Chicago",
        image: "/assets/avatar1.png",
      },
      car: {
        name: "Mercedes Benz",
        model: "AMG CLS",
        type: "SUV",
        color: "Black",
        image: "/assets/avatar2.png",
      },
    },
    {
      id: 3,
      type: "XL Intercity",
      time: "15 min away",
      rating: 4.9,
      reviews: 178,
      description: "Comfortable sedans, top quality drivers",
      price: 450.5,
      driver: {
        id: 103,
        name: "Michael Brown",
        rating: 4.9,
        reviews: 145,
        email: "michael@mail.com",
        phone: "9876543212",
        address: "New York",
        image: "/assets/avatar1.png",
      },
      car: {
        name: "Mercedes Benz",
        model: "AMG CLS",
        type: "SUV",
        color: "Black",
        image: "/assets/avatar2.png",
      },
    },
    {
      id: 4,
      type: "XL Intercity",
      time: "18 min away",
      rating: 4.7,
      reviews: 93,
      description: "Comfortable sedans, top quality drivers",
      price: 450.5,
      driver: {
        id: 104,
        name: "David Wilson",
        rating: 4.7,
        reviews: 87,
        email: "david@mail.com",
        phone: "9876543213",
        address: "Seattle",
        image: "/assets/avatar1.png",
      },
      car: {
        name: "Mercedes Benz",
        model: "AMG CLS",
        type: "SUV",
        color: "Black",
        image: "/assets/avatar2.png",
      },
    },
  ];
  
  // Driver positions on the static map (percentage values)
  const driverPositions = [
    { top: "25%", left: "30%" }, // Driver 1
    { top: "40%", left: "60%" }, // Driver 2
    { top: "65%", left: "35%" },
    { top: "50%", left: "75%" },
  ];
  return (
    <div>
        <BookRideHero/>
        <ChooseRide rides={rides} driverPositions={driverPositions}/>
    </div>
  )
}
