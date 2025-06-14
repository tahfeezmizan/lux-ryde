"use client"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Navigation } from "swiper/modules"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 5,
    name: "Marcus L.",
    role: "Student & Weekend Explorer",
    text: "I’ve been following Your Ryde from the start, and I’m genuinely impressed. The focus on rider safety and driver fairness is unmatched. I’m ready to switch the moment it goes live!",
  },
  {
    id: 6,
    name: "Angela R.",
    role: "Frequent Traveler",
    text: "Your Ryde’s bonus and referral features are a game-changer. I love that I can earn while I ride. Can’t wait for launch day!",
  },
  {
    id: 7,
    name: "David M.",
    role: "Tech Consultant",
    text: "From security to savings, Your Ryde is bringing exactly what this industry needs. I’ve got my eyes on the app launch — it’s going to be worth the wait.",
  },
  {
    id: 8,
    name: "Serena T.",
    role: "Busy Professional",
    text: "I’m excited about Your Ryde’s innovative approach! The subscription perks and loyalty rewards show they truly care about riders. I’m counting down the days until I can book my first trip!",
  }
];

export function TestimonialSlider() {
  return (
    <div className="md:py-[80px] py-12 bg-black font-roboto uvsr">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="md:text-3xl text-2xl text-white font-bold mb-4">Real Solutions, Real Rewards!</h2>
          <p className="text-slate-400 md:text-lg text-sm w-full mx-auto max-w-2xl">
            Experience the Ride of a Lifetime with Us. Experience the thrill of exclusive perks and exceptional service!
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active",
              bulletClass: "swiper-pagination-bullet",
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonial-swiper pb-14"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white bg-opacity-10 backdrop-blur-[2px] text-white rounded-xl p-8 h-full flex flex-col border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-opacity-15">
                  <div className="mb-6 text-white/40">
                    <Quote className="h-10 w-10 rotate-180" />
                  </div>

                  <p className="text-white/90 mb-6 flex-grow text-lg leading-relaxed">{testimonial.text}</p>

                  <div className="mt-auto">
                    <div className="w-12 h-1 bg-white/20 mb-4"></div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          <div className="swiper-button-prev !hidden md:!flex text-white after:!text-lg after:!content-['prev'] after:!font-bold"></div>
          <div className="swiper-button-next !hidden md:!flex text-white after:!text-lg after:!content-['next'] after:!font-bold"></div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
          width: 10px;
          height: 10px;
        }
        
        .swiper-pagination-bullet-active {
          background: white;
          transform: scale(1.2);
        }
        
        .swiper-button-prev,
        .swiper-button-next {
          color: white;
          background: rgba(255, 255, 255, 0.1);
          width: 40px !important;
          height: 40px !important;
          border-radius: 50%;
          top: 50%;
        }
        
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 16px !important;
        }
      `}</style>
    </div>
  )
}
