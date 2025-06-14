export default function RefundAndCancellationPolicy() {
  return (
    <div className="min-h-screen font-roboto bg-black text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-2xl md:text-5xl font-bold text-white mb-10 text-center">
          Refund Policy
        </h1>

        <p className="text-sm md:text-base text-white text-opacity-80 mb-8">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <p className="text-sm md:text-base text-white text-opacity-80 mb-8">
            Welcome to <span className="font-bold text-white"> Our Ryde</span> . we are
            committed to providing fair, transparent, and high-quality service
            for every ride. We understand that occasionally things don’t go as
            planned, and we want to make sure our users feel secure in the event
            of an issue. This Refund Policy outlines how refunds are handled and
            what to expect if you encounter a problem with your ride.
          </p>
          <p className="text-sm md:text-base text-white text-opacity-80 mb-8">
            By using our Services, you agree to the practices outlined in this
            Privacy Policy. If you do not agree with the terms, please refrain
            from using our Services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-[28px] font-normal mb-3">
            1. Eligible Refund Situations
          </h2>
          <p className="text-sm md:text-base text-white text-opacity-80">
            Refunds may be issued under the following conditions:
          </p>

          <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2">
            <li>You were charged for a ride that did not occur.</li>
            <li>
              Your driver did not show up, and the system failed to cancel the
              trip properly.
            </li>
            <li>
              You were picked up by the wrong driver despite following
              verification protocols.
            </li>
            <li>
              You were overcharged due to a technical issue or fare
              miscalculation.
            </li>
            <li>
              Your trip was canceled due to safety concerns and you were still
              charged.
            </li>
            <li>
              You experienced verified misconduct or a safety-related issue that
              disrupted your ride.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-[28px] font-normal mb-3">
            2. Non-Refundable Situations
          </h2>
          <p className="text-sm md:text-base text-white text-opacity-80 mb-4  mt-4">
            Refunds will not be granted in these scenarios:
          </p>
          <ul className="list-disc list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2">
            <li>
              Rides that were successfully completed without technical errors or
              safety violations.
            </li>
            <li>
              Cancellations made too late (less than 3 minutes before scheduled
              arrival).
            </li>
            <li>
              Disputes raised more than 7 days after the ride has occurred.
            </li>
            <li>
              Rider dissatisfaction based on driver rating alone, when no
              incident occurred.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-[28px] font-normal mb-3">
            3. How to Request a Refund
          </h2>
          <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
            To file a refund request, follow these steps:
          </p>

          <ul className="list-decimal list-inside ml-5 text-sm md:text-base text-white text-opacity-80 space-y-2">
            <li>
              Log into the{" "}
              <span className="font-semibold text-white">Your Ryde</span> app or
              website.
            </li>
            <li>
              Navigate to the{" "}
              <span className="font-semibold text-white">“Ride History”</span>{" "}
              app or website.
            </li>
            <li>
              Select the specific ride and click{" "}
              <span className="font-semibold text-white">
                “Report an Issue.”
              </span>{" "}
              app or website.
            </li>
            <li>Complete the form with clear details regarding the issue.</li>
          </ul>

          <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
            Once submitted, our support team will review the request and respond
            within <span className="text-white font-semibold">48 hours</span>{" "}
            with a resolution or request for more information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-[28px] font-normal mb-3">
            4. Refund Processing
          </h2>
          <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
            We use industry-standard security practices to protect your data,
            including:
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-[28px] font-normal mb-3">
            5. Your Rights and Choices
          </h2>
          <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
            If approved, refunds are typically processed within{" "}
            <span className="text-white font-semibold">5–7 business days,</span>{" "}
            though this may vary depending on your bank or financial provider.
          </p>

          <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
            To exercise any of these rights, contact{" "}
            <span className="font-semibold text-white">
              support@yourryde.com.{" "}
            </span>{" "}
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
            5. Questions or Concerns?
          </h2>
          <p className="text-sm md:text-base text-white text-opacity-80 mt-4 mb-4">
            If you need help with a refund or have concerns about your account:
          </p>
        
        
              📧 Email:{" "}
              <a href="mailto:support@yourryde.com" className="underline">
                support@yourryde.com
              </a>
        
      
        </section>
      </div>
    </div>
  );
}
