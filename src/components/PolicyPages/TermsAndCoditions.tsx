export default function TermsAndConditions() {
    return (
      <div className="min-h-screen font-roboto bg-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-10 text-center">
            Terms and Conditions
          </h1>
  
          <p className="text-sm md:text-base text-white text-opacity-80 mb-8">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
  
          <section className="mb-8">
            <p className="text-sm md:text-base text-white text-opacity-80 mb-8">
              Welcome to <span className="font-bold">Your Ryde</span>. By accessing or using the
              Your Ryde app, website, or services, you agree to be bound by these Terms and
              Conditions. If you do not agree, please refrain from using our platform.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl md:text-[28px] font-normal mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-80">
              By registering for an account, booking a ride, or offering ride services through
              Your Ryde, you agree to abide by all terms outlined herein. If you do not agree,
              please refrain from using our platform.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl md:text-[28px] font-normal mb-3">
              2. Eligibility
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-80">
              You must be at least 18 years old to create a rider or driver account. Drivers must
              possess a valid driver&lsquo;s license, pass a background check, and meet all vehicle and
              insurance requirements.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl md:text-[28px] font-normal mb-3">
              3. Account Responsibilities
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-80">
              You are responsible for maintaining the confidentiality of your login credentials and
              for all activities under your account. Notify us immediately of any unauthorized use
              or breach.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl md:text-[28px] font-normal mb-3">
              4. Use of Services
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-80">
              You agree to use Your Ryde for lawful purposes only. Misuse, harassment, fraud,
              impersonation, or any behavior that puts others at risk is strictly prohibited.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl md:text-[28px] font-normal mb-3">
              5. Payment Terms
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-80">
              Riders agree to pay all applicable charges for completed rides, including base fare,
              distance/time rates, tolls, and surcharges. Drivers agree to a flat 20% commission on
              all ride earnings.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl md:text-[28px] font-normal mb-3">
              6. Cancellation and Refunds
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-80">
              Riders may cancel a ride before pickup. Cancellation fees may apply. Refunds are
              handled in accordance with the Your Ryde Refund Policy.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl md:text-[28px] font-normal mb-3">
              7. Ratings and Reviews
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-80">
              After each ride, riders and drivers may rate each other. Repeated low ratings or
              misconduct may result in account suspension or termination.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl md:text-[28px] font-normal mb-3">
              8. Privacy
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-80">
              Your use of our services is subject to our Privacy Policy. We are committed to
              protecting your data and only sharing information when necessary for operations or as
              required by law.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl md:text-[28px] font-normal mb-3">
              9. Safety Features
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-80">
              Users agree to participate in safety protocols, including 4-digit PIN verification,
              vehicle and driver matching, and the use of the in-app emergency button when necessary.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl md:text-[28px] font-normal mb-3">
              10. Suspension and Termination
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-80">
              Your Ryde reserves the right to suspend or terminate accounts at its sole discretion
              for violation of these Terms, misuse of the platform, or threats to user safety.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl md:text-[28px] font-normal mb-3">
              11. Dispute Resolution
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-80">
              Any disputes shall be resolved through binding arbitration in accordance with state
              and federal laws. By using the platform, you waive your right to participate in a
              class action.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl md:text-[28px] font-normal mb-3">
              12. Modifications
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-80">
              Your Ryde reserves the right to update or modify these Terms at any time. Continued
              use of the services after changes indicates acceptance of the updated terms.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl md:text-[28px] font-normal mb-3">
              13. Contact Information
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-80">
              If you have questions or need help regarding these Terms, please contact us:
            </p>
            <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2">
              <li>📧 Email: <a href="mailto:support@yourryde.com" className="underline">support@yourryde.com</a></li>
              <li>🌐 Website: <a href="https://www.yourryde.com" className="underline">www.yourryde.com</a></li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
  