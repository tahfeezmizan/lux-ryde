export default function CustomerSupport() {
    return (
      <div className="min-h-screen font-roboto bg-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-10 text-center pb-4">
            Customer Support
          </h1>
  
          {/* Contact Support Section */}
          <section className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl md:text-[28px] font-normal mb-3">📬 Contact Support</h2>
            <p className="text-sm md:text-base text-white text-opacity-80 mb-8">
              If you need help at any time, please use one of the following methods to reach us:
            </p>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
              <li>📧 Email Support: <a href="mailto:support@yourryde.com" className="text-blue-400">support@yourryde.com</a></li>
              <li>📞 Phone Support: 1-844-YUR-RYDE (1-844-987-7933)</li>
              <li>💬 Live Chat: Available in the Your Ryde app from 7:00 AM – 6:00 PM EST, Monday through Sunday</li>
              <li>🌐 Help Center: <a href="https://www.yourryde.com/support" className="text-blue-400">www.yourryde.com/support</a></li>
              <li>⏱ Response Time: We respond to all emails within 24 hours. For urgent matters, call or use the in-app chat.</li>
            </ul>
          </section>
  
          {/* Account & Billing Help Section */}
          <section className="mb-8">
            <h2 className="text-xl md:text-[28px] font-normal mb-3">🧾 Account & Billing Help</h2>
            <p className="text-sm md:text-base text-white text-opacity-80 mb-8">
              Managing your account is simple through the Your Ryde app. Here’s what you can do:
            </p>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
              <li>Update or remove payment methods in the “Wallet” section.</li>
              <li>View, download, and print receipts from your Trip History.</li>
              <li>Dispute ride charges by tapping “Help with this trip” under any completed ride.</li>
              <li>Change your email, phone number, or profile photo in your Account Settings.</li>
              <li>Cancel or change subscription plans anytime under “Manage Subscriptions.”</li>
              <li>If you were charged incorrectly or double-charged, our team will review your request and respond within 24 hours with a resolution.</li>
            </ul>
          </section>
  
          {/* Ride-Related Help Section */}
          <section className="mb-8">
            <h2 className="text-xl md:text-[28px] font-normal mb-3">🚘 Ride-Related Help</h2>
            <p className="text-sm md:text-base text-white text-opacity-80 mb-8">
              Whether you missed your ride or had a problem during the trip, we’re here to help:
            </p>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
              <li>Driver No-Show: Tap “Report a No-Show” on the trip screen.</li>
              <li>Vehicle Mismatch: Always check the driver’s car model, license plate, and photo before entering.</li>
              <li>Late Driver: Use “Call Driver” to check their status or cancel without penalty if they&#39;re more than 10 minutes late.</li>
              <li>Rider Safety Concerns: Use the in-app Emergency Button for immediate help.</li>
              <li>Missing Items: Go to Trip History → Select the Ride → “Report Lost Item”. You can also call/message the driver from that screen. If the driver can’t be reached, contact support and we’ll help track your item.</li>
            </ul>
          </section>
  
          {/* Loyalty, Rewards & Subscriptions Section */}
          <section className="mb-8">
            <h2 className="text-xl md:text-[28px] font-normal mb-3">🎁 Loyalty, Rewards & Subscriptions</h2>
            <p className="text-sm md:text-base text-white text-opacity-80 mb-8">
              Your Ryde is more than just transportation — it’s a rewarding experience:
            </p>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
              <li>Ryde Credits & Loyalty:</li>
              <ul className="list-inside ml-5">
                <li>Earn $0.25 in credits per ride</li>
                <li>Earn $0.15 per ride when someone you refer completes a ride</li>
                <li>Redeem credits for discounts or free rides</li>
              </ul>
              <li>Where can I see my points or status?</li>
              <ul className="list-inside ml-5">
                <li>Open the app → Go to “Rewards & Loyalty”</li>
                <li>Track your points, redemptions, milestones, and referral tree.</li>
              </ul>
            </ul>
          </section>
  
          {/* Subscriptions & Passes Section */}
          <section className="mb-8">
            <h2 className="text-xl md:text-[28px] font-normal mb-3">🧾 Subscriptions & Passes</h2>
            <p className="text-sm md:text-base text-white text-opacity-80 mb-8">
              Here are the available Ryde Passes:
            </p>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
              <li>Basic – $9.99/month: 5% off rides, priority bookings</li>
              <li>Premium – $19.99/month: 10% off rides, 1 free ride/month</li>
              <li>Elite – $49.99/month: 15% off rides, 3 free rides/month, airport upgrades</li>
              <li>Family – $79.99/month: Covers up to 4 riders, 5 free rides/month, VIP support</li>
              <li>Subscriptions are fully flexible — cancel or upgrade at any time inside the app.</li>
            </ul>
          </section>
  
          {/* Your Safety Matters Section */}
          <section className="mb-8">
            <h2 className="text-xl md:text-[28px] font-normal mb-3">🔐 Your Safety Matters</h2>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
              <li>4-Digit PIN Entry System: Riders must confirm a 4-digit code before entering the car. This ensures you&#39;re getting into the right vehicle.</li>
              <li>Driver & Rider Verification: All users are required to upload a government ID and a selfie photo for profile verification.</li>
              <li>In-App Emergency Button: Tap to instantly contact 911 and alert 4 emergency contacts with your location.</li>
              <li>Real-Time GPS Tracking: Every ride is monitored for safety. You can share your live location with friends and family during the trip.</li>
              <li>24/7 Incident Review Team: Report any inappropriate behavior or incidents — we take every report seriously and investigate promptly.</li>
            </ul>
          </section>
  
          {/* Feedback & Suggestions Section */}
          <section className="mb-8">
            <h2 className="text-xl md:text-[28px] font-normal mb-3">💬 Feedback & Suggestions</h2>
            <p className="text-sm md:text-base text-white text-opacity-80 mb-8">
              We love hearing from our community! If you have a suggestion, feature request, or just want to share your positive experience, email us at:
              <br />
              📧 <a href="mailto:feedback@yourryde.com" className="text-blue-400">feedback@yourryde.com</a>
            </p>
          </section>
  
          {/* Your Ryde Promise Section */}
          <section className="mb-8">
            <h2 className="text-xl md:text-[28px] font-normal mb-3">🛡️ Your Ryde Promise</h2>
            <p className="text-sm md:text-base text-white text-opacity-80 mb-8">
              Your Ryde is committed to:
            </p>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
              <li>🚘 Providing safe, reliable, and affordable rides</li>
              <li>🎖️ Rewarding loyalty and building a supportive community</li>
              <li>🧑‍💻 Offering accessible and professional customer service</li>
              <li>🔐 Maintaining the highest standards in rider and driver safety</li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
  