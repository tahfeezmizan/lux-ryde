import Image from "next/image";

export default function CompanyInfo() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white font-roboto">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:py-16 py-8 items-center">
          <div className="">
            <h2 className="text-2xl md:text-3xl font-normal mb-4">Our Mission</h2>
            <p className="text-[#BDBDBD] md:text-base text-sm leading-relaxed">
              To deliver a safer, smarter, and more rewarding rideshare experience
              through cutting-edge technology, driver-first benefits, and a rider-focused
              loyalty system that truly gives back.
            </p>
          </div>
          <div className="relative h-[340px] w-full rounded-lg overflow-hidden">
            <Image
              src="/assets/a2.png"
              alt="Business meeting with presentation"
              width={548}
              height={340}
              className="object-cover"
            />
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 md:py-8 items-center">
          <div className="relative h-[340px] w-full rounded-lg overflow-hidden md:order-1 order-2">
            <Image
              src="/assets/a3.png"
              alt="Business meeting with presentation"
              width={548}
              height={340}
              className="object-cover"
            />
          </div>
          <div className="md:order-2 order-1">
            <h2 className="text-2xl md:text-3xl font-normal mb-4">Our Vision</h2>
            <p className="text-[#BDBDBD] md:text-base text-sm leading-relaxed">
              To become the most trusted and rewarding rideshare platform in the
              world — built on loyalty, integrity, and real community connection.
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 md:py-8 items-center">
          <div className="md:order-1 order-2">
            <h2 className="text-2xl md:text-3xl font-normal mb-4">Our Story</h2>
            <p className="text-[#BDBDBD] md:text-base text-sm leading-relaxed mb-4">
              Your Ryde was founded by <span className="text-[#F1E1A3] font-semibold">
              Curtis Freeman,
              </span>  a driven entrepreneur and
              community leader. After years of witnessing gaps in safety, fairness, and
              opportunity in the rideshare industry, Curtis built Your Ryde from the
              ground up to fill those gaps.
            </p>
            <p className="text-[#BDBDBD] md:text-base text-sm leading-relaxed">
              What started as a vision is now a company ready to launch in <span className="text-[#F1E1A3] font-semibold">
              Boston,
              Massachusetts
              </span>  — with plans to expand across the U.S. and into
              international markets.
            </p>
          </div>
          <div className="relative h-[340px] w-full rounded-lg overflow-hidden md:order-2 order-1">
            <Image
              src="/assets/a2.png"
              alt="Business meeting with presentation"
              width={548}
              height={340}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
