export default function DriverBonus() {
    return (
      <div className="min-h-screen font-roboto bg-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-10 text-center">
            Driver Bonus Program
          </h1>
  
          <p className="text-sm md:text-base text-white text-opacity-80 mb-8">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
  
          <section className="mb-8">
            <p className="text-sm md:text-base text-white text-opacity-80 mb-8">
              At Your Ryde, we believe our drivers deserve more. That’s why we’ve
              built one of the most rewarding bonus systems in the rideshare industry.
              Every mile you drive brings you closer to bigger rewards.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl md:text-[28px] font-normal mb-3">
              1. Weekend Bonus
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-80">
              Complete 60 rides on Saturday and Sunday and receive a $30 bonus
              automatically in your weekly payout.
            </p>
  
            <h2 className="text-xl md:text-[28px] font-normal mb-3 mt-6">
              2. Weekday Bonus
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-80">
              Drive Monday through Thursday and complete 120 rides to receive a $60
              bonus.
            </p>
  
            <h2 className="text-xl md:text-[28px] font-normal mb-3 mt-6">
              3. Gas Rewards
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-80">
              Complete 120 rides in just 4 days (Monday–Thursday) and receive a $25
              gas card — stacking with your weekday bonus.
            </p>
  
            <h2 className="text-xl md:text-[28px] font-normal mb-3 mt-6">
              4. Wear & Tear Assistance
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-80">
              After 3,000 miles with Your Ryde, you qualify for a $250 gift card
              toward maintenance like tires, brakes, and oil changes.
            </p>
  
            <h2 className="text-xl md:text-[28px] font-normal mb-3 mt-6">
              5. Multi-Level Referral Earnings
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-80">
              Refer new drivers or riders to Your Ryde and earn $0.15 per ride they
              complete — up to 10 levels deep in your referral network. Even when
              someone you referred refers others, you continue to earn.
            </p>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2">
              <li>Earn $0.15 for every ride completed by your referrals</li>
              <li>Build a team and earn across 10 levels of your network</li>
              <li>Track it all in your Driver Dashboard under &quot;Referral Network&quot;</li>
            </ul>
  
            <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
              Example: If 10 drivers you referred each complete 200 rides in a month,
              you’ll earn $300 in passive income — automatically.
            </p>
  
            <h2 className="text-xl md:text-[28px] font-normal mb-3 mt-6">
              6. Monthly Sweepstakes & Giveaways
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-80">
              Complete 100+ rides/month and enter to win: cash bonuses, car
              maintenance rewards, gas vouchers, and more.
            </p>
  
            <h2 className="text-xl md:text-[28px] font-normal mb-3 mt-6">
              7. Milestone Awards
            </h2>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2">
              <li>250 Rides: Bronze Badge + T-shirt</li>
              <li>750 Rides: Silver Badge + $50 + T-shirt</li>
              <li>5,000 Rides: Gold Badge + $750 + T-shirt + Coffee Mug</li>
              <li>10,000 Rides: Elite Certificate + Hall of Fame Status + $2,500 + T-shirt + Coffee Mug</li>
            </ul>
  
            <h2 className="text-xl md:text-[28px] font-normal mb-3 mt-6">
              8. How to Track Your Progress
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-80">
              Monitor ride totals and bonus trackers in your dashboard.
            </p>
            <p className="text-sm md:text-base text-white text-opacity-80">
              Check referral earnings and maintenance mileage anytime.
            </p>
  
            <h2 className="text-xl md:text-[28px] font-normal mb-3 mt-6">
              9. Bonus Tips
            </h2>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2">
              <li>Drive during peak hours for faster rewards</li>
              <li>Use heat maps to find high-demand zones</li>
              <li>Watch for limited-time app promotions</li>
            </ul>
  
            <h2 className="text-xl md:text-[28px] font-normal mb-3 mt-6">
              10. Need Help?
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-80">
              Contact Driver Support 24/7 via the app or email{" "}
              <a href="mailto:support@yourryde.com" className="underline">
                support@yourryde.com
              </a>
            </p>
          </section>
        </div>
      </div>
    );
  }
  