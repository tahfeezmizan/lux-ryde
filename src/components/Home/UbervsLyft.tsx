"use client";

const comparisonData = {
  title: "Your Ryde vs. Uber & Lyft",
  description:
    "Your Ryde offers competitive pricing, better driver earnings, and a seamless booking experience. With a focus on luxury and affordability, it stands out by providing personalized service and a transparent fare system.",
  features: [
    {
      name: "Pricing",
      yourRyde: "Competitive rates",
      uber: "Varies by demand",
      lyft: "Varies by demand",
    },
    {
      name: "Driver Earnings",
      yourRyde: "Higher percentage",
      uber: "Lower percentage",
      lyft: "Lower percentage",
    },
    {
      name: "Vehicle Options",
      yourRyde: "SUV, Full-Size SUV, Sport Car, Luxury Car",
      uber: "Standard, XL, Black, Comfort, etc.",
      lyft: "Standard, XL, Lux, etc.",
    },
    {
      name: "Referral Program",
      yourRyde: "MLM-based rewards",
      uber: "Standard referral bonuses",
      lyft: "Standard referral bonuses",
    },
    {
      name: "Booking System",
      yourRyde: "Easy & quick booking",
      uber: "App-based booking",
      lyft: "App-based booking",
    },
    {
      name: "Customer Support",
      yourRyde: "24/7 live support",
      uber: "App-based support",
      lyft: "App-based support",
    },
    {
      name: "Ride Safety",
      yourRyde: "Verified drivers & live tracking",
      uber: "Background checks & tracking",
      lyft: "Background checks & tracking",
    },
    {
      name: "Availability",
      yourRyde: "Growing network",
      uber: "Global",
      lyft: "North America",
    },
    {
      name: "Payment Options",
      yourRyde: "Multiple options, including crypto",
      uber: "Card, cash (in some areas), digital wallets",
      lyft: "Card, digital wallets",
    },
  ],
};

export default function UbervsLyft() {
  const filteredFeatures = comparisonData.features.filter(
    (feature) =>
      feature.yourRyde !== feature.uber || feature.yourRyde !== feature.lyft
  );

  return (
    <div className="bg-black text-white p-4 md:p-8 font-roboto">
      <div className="container mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
          {comparisonData.title}
        </h1>
        <p className="text-sm md:text-base mb-6 text-gray-300 max-w-3xl">
          {comparisonData.description}
        </p>

        <div className="uvsr backdrop-blur-[8px]">
          <div className="rounded-lg overflow-x-auto">
            <div className="min-w-[768px]">
              <div className="grid grid-cols-4 bg-[#F1E1A380] rounded-t-2xl text-white">
                <div className="p-4 font-medium md:text-2xl font-roboto">Feature</div>
                <div className="p-4 font-medium md:text-2xl flex items-center font-roboto">
                  Your Ryde
                </div>
                <div className="p-4 font-medium md:text-2xl font-roboto">Uber</div>
                <div className="p-4 font-medium md:text-2xl font-roboto">Lyft</div>
              </div>
              {filteredFeatures.map((feature, index) => (
                <div
                  key={feature.name}
                  className={`grid grid-cols-4 border-t border-[#4A4A4A] ${
                    index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
                  } hover:bg-gray-700 hover:bg-[#7A7254] transition-all duration-300`}
                >
                  <div className="p-4 font-normal md:text-base text-white font-roboto whitespace-nowrap">
                    {feature.name}
                  </div>
                  <div className="p-4 font-normal md:text-base text-white font-roboto relative">
                    {feature.yourRyde}
                  </div>
                  <div className="p-4 font-normal md:text-base text-white font-roboto">
                    {feature.uber}
                  </div>
                  <div className="p-4 font-normal md:text-base text-white font-roboto">
                    {feature.lyft}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
