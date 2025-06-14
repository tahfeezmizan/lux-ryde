export default function SecuritySafety() {
  return (
    <div className="min-h-screen font-roboto bg-black text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-2xl md:text-5xl font-bold text-white mb-10 text-center pb-4">
          Security & Safety
        </h1>

        <p className="text-sm md:text-base text-white text-opacity-80 mb-8">
          Your safety is not a feature — it&lsquo;s our foundation.
        </p>

        <section className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-sm md:text-base text-white text-opacity-80 mb-8">
            At Your Ryde, we understand that stepping into a car with someone you don&lsquo;t know requires trust.
            Whether you&lsquo;re a rider heading home after work or a driver picking up passengers late at night,
            your security is our top priority. That&lsquo;s why we&lsquo;ve built our entire platform around proactive
            protection, real-time monitoring, and a zero-compromise approach to safety.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-[28px] font-normal mb-3">🔒 What We Do to Keep You Safe</h2>
          
          <div className="p-4 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-normal mb-3">✅ Verified User Onboarding</h3>
            <p className="text-sm md:text-base text-white text-opacity-80">
              Before anyone — driver or rider — can access the Your Ryde platform, they must go through a
              multi-step identity verification process:
            </p>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
              <li>Government-issued ID Upload: Validated against name and profile information.</li>
              <li>Selfie Verification: Users must take a live photo that is matched to their ID.</li>
              <li>Driver&lsquo;s License & Vehicle Registration: Drivers must upload current, valid documents during sign-up.</li>
              <li>Background Checks: All drivers undergo extensive criminal and motor vehicle background checks.</li>
            </ul>
          </div>

          <h2 className="text-xl md:text-[28px] font-normal mb-3 mt-6">🚗 Pre-Ride Safety Measures</h2>
          <div className="p-4 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-normal mb-3">🛡️ Driver & Vehicle Verification</h3>
            <p className="text-sm md:text-base text-white text-opacity-80">
              Before your ride arrives, the app shows you the following details:
            </p>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
              <li>Driver&lsquo;s name and profile photo</li>
              <li>Driver&lsquo;s rating and past reviews</li>
              <li>Make, model, and color of the vehicle</li>
              <li>Verified license plate number</li>
            </ul>
            <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
              You should never enter a car that doesn’t match this exact information.
            </p>
          </div>

          <h2 className="text-xl md:text-[28px] font-normal mb-3 mt-6">🔐 4-Digit PIN Security</h2>
          <div className="p-4 rounded-lg shadow-md">
            <p className="text-sm md:text-base text-white text-opacity-80">
              Before any trip can begin, the rider must enter a 4-digit PIN provided by the app. This confirms the
              identity of the driver and prevents vehicle impersonation. If the PIN doesn’t match, the app alerts
              both parties and blocks the trip from starting.
            </p>
          </div>

          <h2 className="text-xl md:text-[28px] font-normal mb-3 mt-6">🗣️ In-App Messaging</h2>
          <div className="p-4 rounded-lg shadow-md">
            <p className="text-sm md:text-base text-white text-opacity-80">
              All communication between riders and drivers is anonymized using in-app text and call features. No
              personal phone numbers are ever shared, and all conversations are encrypted.
            </p>
          </div>

          <h2 className="text-xl md:text-[28px] font-normal mb-3 mt-6">📍 During the Ride</h2>
          <div className="p-4 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-normal mb-3">🌐 Live GPS Tracking</h3>
            <p className="text-sm md:text-base text-white text-opacity-80">
              From pickup to drop-off, every ride is tracked in real-time:
            </p>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
              <li>Riders can share their live trip location with friends and family.</li>
              <li>The Your Ryde Safety Team can access the trip if an alert is triggered.</li>
              <li>GPS routes are logged for 30+ days in case of dispute or investigation.</li>
            </ul>
          </div>

          <h2 className="text-xl md:text-[28px] font-normal mb-3 mt-6">🚨 Emergency Button</h2>
          <div className="p-4 rounded-lg shadow-md">
            <p className="text-sm md:text-base text-white text-opacity-80">
              Both riders and drivers have access to the in-app emergency button, located in a fixed position at
              all times. Tapping this feature will:
            </p>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
              <li>Immediately notify up to 4 emergency contacts</li>
              <li>Send your real-time location to those contacts</li>
              <li>Automatically initiate a call to 911 (or local emergency services)</li>
              <li>Send a distress signal to the Your Ryde 24/7 Safety Team</li>
            </ul>
            <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
              This tool is designed to be instant, discreet, and life-saving.
            </p>
          </div>

          <h2 className="text-xl md:text-[28px] font-normal mb-3 mt-6">📋 Post-Ride Safety Monitoring</h2>
          <div className="p-4 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-normal mb-3">⭐ Ratings & Reviews</h3>
            <p className="text-sm md:text-base text-white text-opacity-80">
              After every ride, riders and drivers rate each other. This system helps us maintain a safe,
              respectful, and reliable community.
            </p>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
              <li>Users with consistently poor ratings may be suspended or removed.</li>
              <li>Comments and flags are reviewed by our safety team for further investigation.</li>
            </ul>
          </div>

          <h2 className="text-xl md:text-[28px] font-normal mb-3 mt-6">🚩 Incident Reporting System</h2>
          <div className="p-4 rounded-lg shadow-md">
            <p className="text-sm md:text-base text-white text-opacity-80">
              If something goes wrong, report it directly from your ride history:
            </p>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
              <li>Select the ride</li>
              <li>Tap “Report an Issue”</li>
              <li>Submit your concern (e.g., unsafe driving, harassment, incorrect fare, etc.)</li>
            </ul>
            <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
              We guarantee a 48-hour maximum response time, and emergencies are prioritized.
            </p>
          </div>

          <h2 className="text-xl md:text-[28px] font-normal mb-3 mt-6">🛡️ Advanced Security Protocols</h2>
          <div className="p-4 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-normal mb-3">🔄 Continuous Monitoring</h3>
            <p className="text-sm md:text-base text-white text-opacity-80">
              We use machine learning and real-time analytics to detect unusual behavior, such as:
            </p>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
              <li>Abnormal route deviations</li>
              <li>Repeated last-minute cancellations</li>
              <li>Aggressive driving speeds (when opted-in to telematics)</li>
              <li>Repeated low ratings</li>
            </ul>
            <p className="text-sm md:text-base text-white text-opacity-80 mt-4">
              When something seems off, our system alerts our internal Rider and Driver Safety Teams for immediate action.
            </p>
          </div>

          <h2 className="text-xl md:text-[28px] font-normal mb-3 mt-6">🧠 Safety AI & Pattern Detection</h2>
          <div className="p-4 rounded-lg shadow-md">
            <p className="text-sm md:text-base text-white text-opacity-80">
              Our platform uses smart algorithms to identify:
            </p>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
              <li>Fraudulent activity (e.g., fake rides, spam accounts)</li>
              <li>Abuse of rewards systems</li>
              <li>Repeat offenders or high-risk behavior</li>
            </ul>
            <p className="text-sm md:text-base text-white text-opacity-80 mt-4">
              These systems help us stay ahead of threats and prevent problems before they escalate.
            </p>
          </div>

          <h2 className="text-xl md:text-[28px] font-normal mb-3 mt-6">🏛️ Privacy & Data Security</h2>
          <div className="p-4 rounded-lg shadow-md">
            <p className="text-sm md:text-base text-white text-opacity-80">
              We don’t just protect your ride — we protect your identity, data, and personal information.
            </p>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
              <li>Encrypted Data Transmission: All personal and payment data is encrypted using SSL.</li>
              <li>SOC 2 Compliance: Our backend systems are architected to meet SOC 2 security principles.</li>
              <li>GDPR & CCPA Aligned: We respect your privacy rights and offer opt-outs and data deletion on request.</li>
            </ul>
            <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
              We believe privacy and security go hand in hand — and we never compromise on either.
            </p>
          </div>

          <h2 className="text-xl md:text-[28px] font-normal mb-3 mt-6">💬 Safety Support — Always On</h2>
          <div className="p-4 rounded-lg shadow-md">
            <p className="text-sm md:text-base text-white text-opacity-80">
              Whether it’s a quick question, an urgent alert, or a follow-up on a report, our dedicated Safety Team is available 24/7 through:
            </p>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2 mt-4">
              <li>In-app live chat</li>
              <li>Email: support@yourryde.com</li>
              <li>Phone support (in select cities)</li>
              <li>Emergency escalation team</li>
            </ul>
          </div>

          <h2 className="text-xl md:text-[28px] font-normal mb-3 mt-6">🤝 Our Promise</h2>
          <div className="p-4 rounded-lg shadow-md">
            <p className="text-sm md:text-base text-white text-opacity-80">
              We’re not here just to give you a ride. We’re here to give you peace of mind. From the technology we build to the people we hire and the policies we enforce, everything is designed to make sure you arrive safely — every time.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
