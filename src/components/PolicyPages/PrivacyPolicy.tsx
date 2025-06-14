export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen font-roboto bg-black text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-2xl md:text-5xl font-bold text-white mb-10 text-center">
          Privacy Policy
        </h1>

        <p className="text-sm md:text-base text-white text-opacity-80 mb-8">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <p className="text-sm md:text-base text-white text-opacity-80 mb-8">
            Welcome to <span className="font-bold"> Our Ryde</span> . Your
            privacy matters to us. This Privacy Policy describes how we collect,
            use, store, protect, and share your personal information when you
            use the Your Ryde mobile app, website, platform, and related
            services .
          </p>
          <p className="text-sm md:text-base text-white text-opacity-80 mb-8">
            By using our Services, you agree to the practices outlined in this
            Privacy Policy. If you do not agree with the terms, please refrain
            from using our Services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-[28px] font-normal mb-3">
            1. Information We Collect
          </h2>
          <p className="text-sm md:text-base text-white text-opacity-80">
            We collect various types of information to provide you with a safe,
            efficient, and personalized experience:
          </p>

          <h2 className="text-base md:text-xl font-normal mb-3 mt-3">
            A. Personal Information
          </h2>

          <p className="text-sm md:text-base text-white text-opacity-80 mb-4">
            This includes any information that can identify you directly or
            indirectly, such as:
          </p>
          <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Profile photo</li>
            <li>Government-issued ID (e.g., driver’s license or passport)</li>
            <li>Date of birth</li>
            <li>Emergency contact details</li>
            <li>
              Payment details (processed securely through third-party providers)
            </li>
            <li>Vehicle and insurance information (for drivers)</li>
            <li>Driver&lsquo;s license number and expiration</li>
            <li>
              Social Security Number (for background checks, where legally
              required)
            </li>
            <li>Ratings and reviews given or received</li>
          </ul>

          <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
            We may also store documents you upload during registration or
            verification.
          </p>

          <h2 className="text-base md:text-xl font-normal mb-3 mt-3">
            B. Location Information
          </h2>

          <p className="text-sm md:text-base text-white text-opacity-80 mb-3">
            We collect real-time and historical location data, including GPS
            coordinates, to:
          </p>

          <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2">
            <li>Match riders with nearby drivers</li>
            <li>Provide real-time route navigation</li>
            <li>Track trips for safety and trip history</li>
            <li>
              Monitor driver behavior for safety and performance optimization
            </li>
            <li>Offer location-based promotions or support services</li>
            <li>Date of birth</li>
            <li>Emergency contact details</li>
            <li>
              Payment details (processed securely through third-party providers)
            </li>
            <li>Vehicle and insurance information (for drivers)</li>
            <li>Driver&lsquo;s license number and expiration</li>
            <li>
              Social Security Number (for background checks, where legally
              required)
            </li>
            <li>Ratings and reviews given or received</li>
          </ul>

          <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
            You may control location access through your device settings, but
            certain features may not work properly without it.
          </p>
          <h2 className="text-base md:text-xl font-normal mb-3 mt-3">
            C. Device and Technical Data
          </h2>

          <p className="text-sm md:text-base text-white text-opacity-80 mb-3">
            When you use the Services, we automatically collect technical data
            such as:
          </p>

          <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2">
            <li>IP address</li>
            <li>Device type (iOS, Android, etc.)</li>
            <li>Operating system and version</li>
            <li>Browser type (for web users)</li>
            <li>App version</li>
            <li>Mobile carrier</li>
            <li>Unique device identifiers</li>
            <li>App usage statistics</li>
            <li>Vehicle and insurance information (for drivers)</li>
            <li>Crash logs and diagnostic data</li>
          </ul>
          <h2 className="text-base md:text-xl font-normal mb-3 mt-3">
            D. Communication Data
          </h2>

          <p className="text-sm md:text-base text-white text-opacity-80 mb-3">
            All in-app communication (calls, messages, support chats) may be
            logged or monitored for:
          </p>

          <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2">
            <li>Safety monitoring</li>
            <li>Customer support improvement</li>
            <li>Dispute resolution</li>
            <li>Quality assurance</li>

            <li>Crash logs and diagnostic data</li>
          </ul>

          <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
            Voice calls initiated within the app may be recorded with user
            consent where legally allowed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-[28px] font-normal mb-3">
            2. How We Use Your Information
          </h2>
          <p className="text-sm md:text-base text-white text-opacity-80 mb-4  mt-4">
            We use your data for the following purposes:
          </p>
          <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2">
            <li>
              {" "}
              <span className="font-semibold text-white">
                Service Delivery:
              </span>{" "}
              To provide, personalize, and manage your rideshare experience.
            </li>
            <li>
              {" "}
              <span className="font-semibold text-white">
                User Verification:{" "}
              </span>{" "}
              To verify your identity, documents, and eligibility to use our
              platform.
            </li>
            <li>
              {" "}
              <span className="font-semibold text-white">
                Payment Processing:{" "}
              </span>{" "}
              To facilitate secure fare transactions, bonuses, and referral
              payouts.
            </li>
            <li>
              {" "}
              <span className="font-semibold text-white">
                Trip Coordination:{" "}
              </span>{" "}
              To match riders and drivers and provide real-time trip updates.
            </li>
            <li>
              {" "}
              <span className="font-semibold text-white">
                Customer Support:{" "}
              </span>{" "}
              To match riders and drivers and provide real-time trip updates.
            </li>
            <li>
              {" "}
              <span className="font-semibold text-white">
                Safety and Security:{" "}
              </span>{" "}
              To monitor behavior, detect fraud, and enhance security for all
              users.
            </li>
            <li>
              {" "}
              <span className="font-semibold text-white">
                User Verification:{" "}
              </span>{" "}
              To verify your identity, documents, and eligibility to use our
              platform.
            </li>
            <li>
              {" "}
              <span className="font-semibold text-white">
                Payment Processing:{" "}
              </span>{" "}
              To facilitate secure fare transactions, bonuses, and referral
              payouts.
            </li>
            <li>
              {" "}
              <span className="font-semibold text-white">
                Trip Coordination:{" "}
              </span>{" "}
              To match riders and drivers and provide real-time trip updates.
            </li>
            <li>
              {" "}
              <span className="font-semibold text-white">
                Customer Support:{" "}
              </span>{" "}
              To match riders and drivers and provide real-time trip updates.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-[28px] font-normal mb-3">
            3. Sharing Your Information
          </h2>
          <p className="text-sm md:text-base text-white text-opacity-80">
            We do not sell or rent your personal data. However, we may share it
            in the following scenarios:
          </p>
          <h2 className="text-base md:text-xl font-normal mb-3 mt-3">
            A. With Drivers or Riders
          </h2>

          <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2">
            <li>
              Riders receive driver details (name, photo, rating, car
              make/model, license plate, ETA).
            </li>
            <li>
              Drivers receive rider details (name, rating, pickup/drop-off
              info).
            </li>
          </ul>

          <h3 className="text-lg md:text-[20px] font-normal mt-4 mb-2">
            B. Third-Party Service Providers
          </h3>
          <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
            We partner with trusted vendors to help operate the platform. These
            may include:
          </p>
          <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2">
            <li>Payment processors (e.g., Stripe, PayPal)</li>
            <li>Background check services</li>
            <li>Cloud storage and hosting providers</li>
            <li>Customer support platforms</li>
            <li>Mapping and navigation tools (e.g., Google Maps)</li>
          </ul>

          <h3 className="text-lg md:text-[20px] font-normal mt-4 mb-2">
            C. Emergency Contacts
          </h3>
          <p className="text-sm md:text-base text-white text-opacity-80 mb-4 mt-4">
            If you activate the Emergency Safety Button, we may share your
            location and trip details with up to four emergency contacts.
          </p>

          <h2 className="text-base md:text-xl font-normal mb-3 mt-3">
            <h2 className="text-base md:text-xl font-normal mb-3 mt-3">
              D. For Legal, Safety, or Regulatory Reasons
            </h2>

            <p className="text-sm md:text-base text-white text-opacity-80 mb-4 mt-4">
              If you activate the Emergency Safety Button, we may share your
              location and trip details with up to four emergency contacts.
            </p>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2">
              <li>
                With law enforcement or government agencies when legally
                required
              </li>
              <li>
                To investigate fraud, safety concerns, or violations of our
                Terms
              </li>
              <li>
                To protect the rights, safety, or property of users or the
                public
              </li>
            </ul>
          </h2>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-[28px] font-normal mb-3">
            4. Data Security
          </h2>
          <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
            We use industry-standard security practices to protect your data,
            including:
          </p>
          <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2">
            <li>End-to-end encryption for sensitive information.</li>
            <li>
              Secure server infrastructure with firewalls and DDoS protection.
            </li>
            <li>Encrypted storage for documents and identification.</li>
            <li>Two-factor authentication for administrative access.</li>
          </ul>
          <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
            Despite these safeguards, no system is completely secure. We
            encourage you to:
          </p>
          <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2">
            <li>Use a strong password.</li>
            <li>Log out when using public or shared devices.</li>
            <li>Contact us immediately if you suspect account misuse.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-[28px] font-normal mb-3">
            5. Your Rights and Choices
          </h2>
          <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
            You have control over your personal data:
          </p>
          <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2">
            <li>
              {" "}
              <span className="font-semibold text-white">
                Access and Update:{" "}
              </span>{" "}
              You can view and update your profile, payment methods, and
              documents anytime.
            </li>
            <li>
              {" "}
              <span className="font-semibold text-white">
                Marketing Preferences{" "}
              </span>{" "}
              You can opt out of promotional messages in your account settings.
            </li>
            <li>
              {" "}
              <span className="font-semibold text-white">
                Data Portability:{" "}
              </span>{" "}
              Request a copy of the data we hold about you.
            </li>
            <li>
              {" "}
              <span className="font-semibold text-white">
                Account Deletion:{" "}
              </span>{" "}
              You may request to delete your account and personal data permanently.
            </li>
            <li>
              {" "}
              <span className="font-semibold text-white">
              Location Settings: {" "}
              </span>{" "}
              Disable or limit location sharing through your device settings.
            </li>
          </ul>

          <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
          To exercise any of these rights, contact  <span className="font-semibold text-white">
          support@yourryde.com.{" "}
              </span>{" "}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-[28px] font-normal mb-3">
            6. Data Retention
          </h2>
          <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
            We retain your data only as long as necessary:
          </p>
          <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2">
            <li>
              Trip data, receipts, and ratings may be stored for audit and legal
              compliance.
            </li>
            <li>
              Profile and verification documents are retained while your account
              is active.
            </li>
            <li>
              Referral and financial transaction history is stored for tax and
              accounting purposes.
            </li>
          </ul>
          <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
            When data is no longer required, we securely delete or anonymize it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-[28px] font-normal mb-3">
            7. Children’s Privacy
          </h2>
          <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
            Your Ryde is not intended for children under the age of 18. We do
            not knowingly collect or solicit data from minors. If we become
            aware that a child has provided personal information, we will delete
            it immediately. If you believe a child is using the platform,
            contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-[28px] font-normal mb-3">
            8. Changes to This Privacy Policy
          </h2>
          <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
            We may update this Privacy Policy periodically. When we do:
          </p>
          <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2">
            <li>The “Effective Date” will be revised.</li>
            <li>
              Users will be notified via email, app alert, or website banner
              (depending on the nature of the change).
            </li>
          </ul>
          <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
            We encourage you to review this policy regularly to stay informed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-[28px] font-normal mb-3">
            9. Contact Us
          </h2>
          <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
            If you have questions or concerns about your privacy, data handling,
            or this policy, please reach out:
          </p>
          <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2">
            <li>
              📧 Email:{" "}
              <a href="mailto:support@yourryde.com" className="underline">
                support@yourryde.com
              </a>
            </li>
            <li>
              🌐 Website:{" "}
              <a href="https://www.yourryde.com" className="underline">
                www.yourryde.com
              </a>
            </li>
          </ul>

          <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
          We are here to protect your rights and ensure that your data is handled with integrity and care.
          </p>
        </section>
      </div>
    </div>
  );
}
