import Link from "next/link";

export default function RiderSupport() {
  return (
    <div className="min-h-screen font-roboto bg-black text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-2xl md:text-5xl font-bold text-white mb-10 text-center pb-4">
          Your Ryde – Rider Support
        </h1>

        <section className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-[28px] font-normal mb-3">Welcome to the Your Ryde Rider Support Center</h2>
          <p className="text-sm md:text-base text-white text-opacity-80 mb-8">
            Whether you have a question, an issue, or need assistance with your ryde, we’re here for you 24/7.
          </p>
        </section>

        <section className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-[28px] font-normal mb-3">Need Immediate Help?</h2>
          <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
            <li>📞 Call Us: 1-844-YUR-RYDE (1-844-987-7933)</li>
            <li>📧 Email Support: <a href="mailto:support@yourryde.com" className="text-blue-400">support@yourryde.com</a></li>
            <li>💬 Chat: Available in the app and website – tap the chat icon to begin.</li>
            <li>🚨 Emergency? Tap the red Emergency Button in the app to alert 911 and your emergency contacts with your real-time location.</li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-[28px] font-normal mb-3">Popular Topics</h2>

          {/* Ride Issues Section */}
          <div>
            <h3 className="font-semibold">1. Ride Issues</h3>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
              <li>My driver never showed up</li>
              <li>I was charged incorrectly</li>
              <li>I left something in the vehicle</li>
              <li>My ride was canceled without notice</li>
              <li>My driver was unsafe or rude</li>
            </ul>
            <p className="text-sm md:text-base text-white text-opacity-80 mt-4">
              What to do: Tap “Trip History” in the app, select the ride, and choose “Report an Issue” or “Request a Refund.” Our team will respond within 24 hours.
            </p>
          </div>

          {/* Payment Help Section */}
          <div className="mt-8">
            <h3 className="font-semibold">2. Payment Help</h3>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
              <li>Trouble adding a payment method</li>
              <li>I was double charged</li>
              <li>I have a promo code but it didn’t work</li>
              <li>Where is my Ryde Credit balance?</li>
            </ul>
            <p className="text-sm md:text-base text-white text-opacity-80 mt-4">
              Check it out in: App Settings {'>'} Payment & Wallet
            </p>
            <p className="text-sm md:text-base text-white text-opacity-80 mt-4">
              For detailed billing issues, email: <a href="mailto:payments@yourryde.com" className="text-blue-400">payments@yourryde.com</a>
            </p>
          </div>

          {/* Safety Concerns Section */}
          <div className="mt-8">
            <h3 className="font-semibold">3. Safety Concerns</h3>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
              <li>I felt unsafe during my ride</li>
              <li>Driver didn’t match the app photo</li>
              <li>Vehicle didn’t match the description</li>
              <li>Ryder Verification PIN was missing</li>
            </ul>
            <p className="text-sm md:text-base text-white text-opacity-80 mt-4">
              Next steps: Use the Emergency Button or contact us immediately. Your safety is our top priority.
            </p>
          </div>

          {/* Account & App Support Section */}
          <div className="mt-8">
            <h3 className="font-semibold">4. Account & App Support</h3>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
              <li>Can’t log into my account</li>
              <li>Need to update my phone or email</li>
              <li>Forgot my password</li>
              <li>App is crashing or freezing</li>
            </ul>
            <p className="text-sm md:text-base text-white text-opacity-80 mt-4">
              Visit: Settings {'>'} Account Info or email: <a href="mailto:technicalsupport@yourryde.com" className="text-blue-400">technicalsupport@yourryde.com</a>
            </p>
          </div>
        </section>

        {/* Your Ryde Features Section */}
        <section className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-[28px] font-normal mb-3">Your Ryde Features – Explained</h2>
          <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
            <li>Rider PIN Protection: Always ask your driver for the 4-digit PIN before entering the vehicle.</li>
            <li>Emergency Alerts: Tap the red shield icon to notify 911 and your contacts.</li>
            <li>Driver Matching: You’ll always see your driver’s photo, car model, and license plate in advance.</li>
            <li>Ryde Wallet & Loyalty: Earn credit for every ride and cash out when eligible.</li>
          </ul>
        </section>

        {/* FAQs Section */}
        <section className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-[28px] font-normal mb-3">FAQs</h2>
          <p className="text-sm md:text-base text-white text-opacity-80 mb-8">
            Tap here to visit our full FAQ Section: 
            <Link href="/#faq" className="text-blue-400">View FAQs</Link>
          </p>
        </section>

        {/* Still Need Help? Section */}
        <section className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-[28px] font-normal mb-3">Still Need Help?</h2>
          <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
            <li>📞 Call Support: 1-844-987-7933</li>
            <li>💬 Chat: In-App & Online</li>
            <li>📧 Email: <a href="mailto:support@yourryde.com" className="text-blue-400">support@yourryde.com</a></li>
          </ul>
          <p className="text-sm md:text-base text-white text-opacity-80 mt-4">
            We’re here to make your experience safe, smooth, and rewarding – every time you ride.
          </p>
        </section>
      </div>
    </div>
  );
}
