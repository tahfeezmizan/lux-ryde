import Image from "next/image";
import { Award, Gift, Shield, ShoppingBag, Users } from "lucide-react";

export default function WhoWeAre() {
  return (
  <div className="min-h-screen policy-bg text-white font-roboto backdrop-blur-md">
      <div className=" py-12 container mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-16">
          About Us
        </h1>

        {/* Why We're Different Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-[588px]">
            <Image
              src="/assets/a1.png"
              alt="Two people looking at a phone"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-normal mb-4">
              Why We&lsquo;re Different
            </h2>

            <p className="text-white md:text-base text-sm mb-6">
              Your Ryde is a bold, innovative rideshare company born out of the
              desire to transform the transportation experience. We’re more than
              just a rideshare app — we’re a movement that values{" "}
              <span className="text-[#F1E1A3] font-semibold">
                security, rewards, and community
              </span>{" "}
              . Built by real people, for real people, Your Ryde is here to
              empower riders and drivers alike. We don’t just move people. We
              move opportunities.
            </p>

            <div className="space-y-4 text-white md:text-base text-sm">
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-gray-300 mt-0.5" />
                <div>
                  <h3 className="font-medium">MLM Referral Rewards System</h3>
                  <p className="text-sm text-gray-300">
                    Earn money when others ride. Build a network and get extra
                    income up to 10 levels deep.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Gift className="h-5 w-5 text-gray-300 mt-0.5" />
                <div>
                  <h3 className="font-medium">Driver Benefits & Support</h3>
                  <p className="text-sm text-gray-300">
                    Weekend and weekday ride bonuses, gas rewards, rider and
                    high gift cards, and more.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-gray-300 mt-0.5" />
                <div>
                  <h3 className="font-medium">Rider Loyalty & Discounts</h3>
                  <p className="text-sm text-gray-300">
                    Riders earn credits and points, access to subscription
                    plans, and discounts on their next Ryde.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-gray-300 mt-0.5" />
                <div>
                  <h3 className="font-medium">Advanced Safety Features</h3>
                  <p className="text-sm text-gray-300">
                    In-app PIN verification, emergency contact alerts, real-time
                    GPS tracking, and in-vehicle driver verification.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShoppingBag className="h-5 w-5 text-gray-300 mt-0.5" />
                <div>
                  <h3 className="font-medium">Your Ryde Store</h3>
                  <p className="text-sm text-gray-300">
                    Use rewards and credits to shop for exclusive items and
                    service discounts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-normal mb-4">
              Who We Are
            </h2>

            <p className="text-white md:text-base text-sm ">
              Your Ryde is a safe, innovative rideshare company born out of the
              desire to transform the transportation experience. We&lsquo;re
              more than just a rideshare app – we&lsquo;re a movement that
              values{" "}
              <span className="text-[#F1E1A3] font-semibold pt-3">
                security, travelers, the community
              </span>{" "}
              . Built by real people, for real people. Your Ryde is here to
              empower riders and drivers alike. <br />
              <p
                className="
mt-4"
              >
                {" "}
                <span className="text-[#F1E1A3] font-semibold pt-3">
                  {" "}
                  We don&lsquo;t just move people. We move opportunities.
                </span>
              </p>
            </p>
          </div>

          <div className="relative h-[300px]">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="About our company"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
