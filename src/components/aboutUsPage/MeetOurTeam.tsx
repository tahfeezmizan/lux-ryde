"use client" // This directive ensures the component is client-side only

import { useEffect, useState } from "react"
// import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

type TeamMember = {
  name: string
  role: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Jackson",
    role: "Customer Success Lead",
    image: "/assets/team1.png",
  },
  {
    name: "Orlando Diggs",
    role: "Customer Success Lead",
    image: "/assets/team2.png",
  },
  {
    name: "Lana Steiner",
    role: "Customer Success Lead",
    image: "/assets/team3.png",
  },
  {
    name: "Jameson",
    role: "Customer Success Lead",
    image: "/assets/team4.png",
  },
  {
    name: "Temperance",
    role: "Customer Success Lead",
    image: "/assets/team1.png",
  },
  {
    name: "Temperance",
    role: "Customer Success Lead",
    image: "/assets/team2.png",
  },
]

export default function MeetOurTeam() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true) 
  }, [])

  return (
    <main className="bg-[#181617] text-white font-roboto">
      <section className="mx-auto md:py-12">
        <div className="text-center mb-16">
          <h2 className="md:text-4xl text-2xl font-bold mb-2 pt-12">Meet Our Team</h2>
          <p className="md:text-base text-sm font-normal">Get to know the people who are dedicated to your success</p>
        </div>

        {mounted && (
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4.5,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 5.5,
                spaceBetween: 30,
              },
            }}
            className="team-swiper"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col mb-12">
                  <div className="relative h-64 w-full mb-2 overflow-hidden rounded-lg bg-white">
                    {/* <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`Photo of ${member.name}`}
                      layout="fill"
                      objectFit="cover"
                      className="object-cover"
                      priority={index < 3} // Prioritize the first few images
                    /> */}
                    <div className="absolute bottom-0 flex flex-col items-start gap-1 w-full p-2 rounded-b-md bg-white bg-opacity-60 backdrop-blur-[12px]">
                      <h3 className="font-medium text-[#1B1D20] font-inter md:text-xl text-base">{member.name}</h3>
                      <p className="font-medium text-[#1B1D20] font-inter md:text-base text-sm">{member.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>
    </main>
  )
}
