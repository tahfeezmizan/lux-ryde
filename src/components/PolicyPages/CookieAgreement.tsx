export default function CookieAgreement() {
  return (
    <div className="min-h-screen bg-black text-white font-roboto">
      <div className="container mx-auto py-12 px-4 max-w-5xl">
        {/* Cookie Policy Section */}
        <section className="mb-16">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-normal mb-4">
            <span className="mb-1">1. </span>What Are Cookies?
          </h2>
          <p className="text-sm sm:text-base text-white text-opacity-80 mb-4">
            Cookies are small text files that websites and apps store on your device when you browse. These files store information about your preferences, device, and session, helping us provide a better and more secure user experience.
          </p>
        </section>

        {/* Why We Use Cookies Section */}
        <section className="mb-16">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-normal mb-4">
            <span className="mb-1">2. </span>Why We Use Cookies
          </h2>
          <p className="text-sm sm:text-base text-white text-opacity-80 mb-4">We use cookies to:</p>
          <ul className="list-disc list-outside ml-5 sm:text-base text-sm space-y-2">
            <li>Understand how users interact with our app and website to improve performance.</li>
            <li>Save your preferences (e.g., language, saved locations).</li>
            <li>Provide personalized content, features, and advertisements (only with your consent).</li>
            <li>Secure your experience by detecting fraud, preventing misuse, and protecting your account.</li>
          </ul>
        </section>

        {/* Types of Cookies We Use Section */}
        <section className="mb-16">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-normal mb-4">
            <span className="mb-1">3. </span>Types of Cookies We Use
          </h2>
          <ul className="list-disc list-outside ml-5 sm:text-base text-sm space-y-2">
            <li><span className="font-semibold">Essential Cookies:</span> Required for the operation of the platform (e.g., logging in, ride booking).</li>
            <li><span className="font-semibold">Functional Cookies:</span> Help remember user preferences and improve personalized features.</li>
            <li><span className="font-semibold">Analytics Cookies:</span> Collect anonymous usage data to enhance performance and user experience.</li>
            <li><span className="font-semibold">Advertising Cookies:</span> Deliver targeted ads based on your browsing habits (used only with your permission).</li>
          </ul>
        </section>

        {/* Your Cookie Choices Section */}
        <section className="mb-16">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-normal mb-4">
            <span className="mb-1">4. </span>Your Cookie Choices
          </h2>
          <p className="text-sm sm:text-base text-white text-opacity-80 mb-4">You can choose to accept or reject certain types of cookies:</p>
          <ul className="list-disc list-outside ml-5 sm:text-base text-sm space-y-2">
            <li>On your first visit, you will see a cookie consent banner where you can accept or manage cookies.</li>
            <li>You can change your cookie settings at any time via your browser or device preferences.</li>
          </ul>
        </section>

        {/* Third-Party Cookies Section */}
        <section className="mb-16">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-normal mb-4">
            <span className="mb-1">5. </span>Third-Party Cookies
          </h2>
          <p className="text-sm sm:text-base text-white text-opacity-80 mb-4">Some cookies may be placed by trusted third-party services such as:</p>
          <ul className="list-disc list-outside ml-5 sm:text-base text-sm space-y-2">
            <li>Google Analytics</li>
            <li>Advertising networks</li>
            <li>Social media platforms</li>
          </ul>
          <p className="text-sm sm:text-base text-white text-opacity-80 mt-4 mb-4">
            These partners have their own privacy and cookie policies.
          </p>
        </section>

        {/* Updates to This Policy Section */}
        <section className="mb-16">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-normal mb-4">
            <span className="mb-1">6. </span>Updates to This Policy
          </h2>
          <p className="text-sm sm:text-base text-white text-opacity-80 mb-4">
            We may update our Cookie Policy to reflect changes in technology, law, or the services we provide. All updates will be posted on this page and take effect immediately upon posting.
          </p>
        </section>

        {/* Contact Us Section */}
        <section className="mb-16">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-normal mb-4">
            <span className="mb-1">7. </span>Contact Us
          </h2>
          <p className="text-sm sm:text-base text-white text-opacity-80 mb-4">
            If you have any questions or concerns about our use of cookies or your privacy rights, reach out to:
          </p>
          <ul className="list-disc list-inside ml-5 text-sm sm:text-base text-white text-opacity-80 space-y-2">
            <li>📧 Email: <a href="mailto:support@yourryde.com" className="underline">support@yourryde.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
