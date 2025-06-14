export default function LoyaltyBonuses() {
  return (
    <div className="min-h-screen w-full night-car-bg text-white overflow-hidden font-roboto">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side: Bonus Opportunities and How to Track Your Points */}
          <div className="space-y-14">
            <section>
              <h2 className="md:text-4xl text-3xl font-semibold mb-6">
                Bonus Opportunities
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start md:text-base font-normal text-sm">
                  <span className="text-white mr-2">•</span>
                  <span>
                    Birthday Bonus:{" "}
                    <span className="font-medium">200 points</span> added on your
                    birthday
                  </span>
                </li>
                <li className="flex items-start md:text-base font-normal text-sm">
                  <span className="text-white mr-2">•</span>
                  <span>
                    Top Rider of the Month: Special trophy +{" "}
                    <span className="font-medium">1,000 points</span>
                  </span>
                </li>
                <li className="flex items-start md:text-base font-normal text-sm">
                  <span className="text-white mr-2">•</span>
                  <span>Milestone Bonuses:</span>
                </li>
                <ul className="pl-8 space-y-2 mt-2">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>
                      25 rides ={" "}
                      <span className="font-medium">250 bonus points</span>
                    </span>
                  </li>
                  <li className="flex items-start md:text-base font-normal text-sm">
                    <span className="text-white mr-2">•</span>
                    <span>
                      50 rides ={" "}
                      <span className="font-medium">500 bonus points</span>
                    </span>
                  </li>
                  <li className="flex items-start md:text-base font-normal text-sm">
                    <span className="text-white mr-2">•</span>
                    <span>
                      100 rides ={" "}
                      <span className="font-medium">1,000 bonus points</span> +
                      exclusive badge
                    </span>
                  </li>
                </ul>
              </ul>
            </section>

            <section>
              <h2 className="md:text-4xl text-3xl font-semibold mb-6">
                How to Track Your Points
              </h2>
              <p className="leading-relaxed text-sm md:text-base">
                You can view your Loyalty Points and tier status inside the
                Rewards & Loyalty section of the Your Ride app. There, you&apos;ll
                also find your badges, history of earned and redeemed points, and
                your available rewards.
              </p>
            </section>
          </div>

          {/* Right side: Terms & Conditions and Have a Question? */}
          <div className="space-y-14">
            <section>
              <h2 className="md:text-4xl text-3xl font-semibold mb-6">
                Terms & Conditions
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start md:text-base font-normal text-sm">
                  <span className="text-white mr-2">•</span>
                  <span>Loyalty Points cannot be transferred or sold.</span>
                </li>
                <li className="flex items-start md:text-base font-normal text-sm">
                  <span className="text-white mr-2">•</span>
                  <span>
                    Points expire 12 months after they are earned if not redeemed
                  </span>
                </li>
                <li className="flex items-start md:text-base font-normal text-sm">
                  <span className="text-white mr-2">•</span>
                  <span>
                    Abuse or fraud will activity will result in forfeiture of
                    points
                  </span>
                </li>
                <li className="flex items-start md:text-base font-normal text-sm">
                  <span className="text-white mr-2">•</span>
                  <span>
                    Your Ride reserves the right to adjust the program at any time
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="md:text-4xl text-3xl font-semibold mb-6">
                Have a Question?
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start md:text-base font-normal text-sm">
                  <span className="text-white mr-2">•</span>
                  <span>📧 Email us at: support@yourryde.com</span>
                </li>
                <li className="flex items-start md:text-base font-normal text-sm">
                  <span className="text-white mr-2">•</span>
                  <span>
                    Visit the app’s Help Center for FAQs and your full rewards history.
                  </span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
