// import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="container mx-auto px-4 py-16 font-roboto bg-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Meet Our Founder</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Founder Image Column */}
        <div className="lg:col-span-4 flex flex-col items-center">
          <div className="relative h-72 w-full max-w-md mb-4 overflow-hidden rounded-lg">
            {/* <Image src="/assets/tasdfasdfs.png" alt="Curtis Freeman" layout="fill" className="object-cover" /> */}
          </div>
          <h3 className="text-2xl font-bold">Curtis Freeman</h3>
          <p className="text-gray-400">Founder & CEO</p>
        </div>

        {/* Founder Bio Column */}
        <div className="lg:col-span-8 space-y-6">
          <p className="text-lg md:text-xl leading-relaxed">
            Curtis Freeman is more than just the founder of Your Ryde — he&apos;s a leader forged through real-life
            experience, resilience, and an unshakable belief in the power of community.
          </p>

          <p className="leading-relaxed">
            Born and raised in a working-class household, Curtis was brought up by his mother, Regina, a strong,
            determined woman who worked tirelessly to provide for him and his brother. From a young age, Curtis learned
            what it meant to hustle, to overcome adversity, and to take care of others — values that would go on to
            shape the foundation of Your Ryde.
          </p>

          <p className="leading-relaxed">
            Before starting Your Ryde, Curtis spent years in high-pressure environments where safety, judgment, and
            responsibility were not optional — they were a way of life. These experiences taught him the importance of
            trust, transparency, and accountability.
          </p>

          <p className="leading-relaxed">
            When Curtis saw the gaps in the rideshare industry — especially how drivers were undervalued and riders were
            often left without real protections — he knew it was time for change.
          </p>

          <p className="font-medium text-lg">That change is Your Ryde.</p>

          <p className="leading-relaxed">
            Curtis built Your Ryde not just as a business, but as a mission: to create a platform where drivers earn
            more, riders feel safer, and both communities are genuinely rewarded for their loyalty and trust. His
            hands-on approach, people-first mindset, and commitment to long-term impact have fueled Your Ryde&apos;s bold
            vision for the future.
          </p>

          <p className="leading-relaxed">
            From the streets of Boston to cities across the country and eventually the globe, Curtis&apos;s vision is clear:
          </p>

          <blockquote className="border-l-4 border-gray-500 pl-4 py-2 my-6 italic">
            A rideshare experience built on respect, innovation, and opportunity for everyone.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
