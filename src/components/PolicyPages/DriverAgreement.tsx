export default function DriverAgreement() {
    return (
      <div className="min-h-screen bg-black text-white font-roboto">
        <div className="container mx-auto py-12 max-w-5xl">
          {/* Cancellation Policy Section */}
          <section className="mb-10">
            <h2 className="text-xl md:text-[28px] font-normal mb-4">
              <span className=" mb-1">1. </span>
              Cancellation Policy
            </h2>
            <p className="text-sm md:text-base text-white text-opacity-80 mb-4">
              We understand that plans can change, so we allow cancellations on customer orders. Our cancellation policy is as follows:
            </p>
  
            <div className="ml-8 mb-6">
              <h3 className="text-lg font-normal md:text-xl mb-2">1.1 Order Cancellation</h3>
              <ul className="list-disc list-outside ml-5 md:text-base text-sm space-y-2">
                <li>Orders can be cancelled within 24 hours of placement if they are in transit.</li>
                <li>
                  If the order has already been processed or shipped, it cannot be cancelled, and you may have to use our return and refund policy.
                </li>
              </ul>
            </div>
  
            <div className="ml-8">
              <h3 className="text-lg font-normal md:text-xl mb-2">1.2 Subscription Cancellation</h3>
              <ul className="list-disc list-outside ml-5 md:text-base text-sm space-y-2">
                <li>
                  For monthly subscriptions, cancellation must be made at least 48 hours before the scheduled service to receive a full refund.
                </li>
                <li>Cancellations made within 48 hours of the scheduled service may incur a cancellation fee.</li>
                <li>Annual subscriptions can be cancelled with a prorated refund based on usage.</li>
              </ul>
            </div>
  
            <div className="ml-8 mt-6">
              <h3 className="text-lg font-normal md:text-xl mb-2">1.3 Subscription Cancellation Process</h3>
              <ul className="list-disc list-outside ml-5 md:text-base text-sm space-y-2">
                <li>
                  To cancel a subscription, log in to your account and select the cancellation option in the account settings page.
                </li>
                <li>
                  Alternatively, contact our support at{" "}
                  <a href="mailto:support@example.com" className="underline">
                    support@example.com
                  </a>{" "}
                  for assistance.
                </li>
              </ul>
            </div>
          </section>
  
          {/* Refund Policy Section */}
          <section className="mb-10">
            <h2 className="text-xl md:text-[28px] font-normal mb-4 ">
              <span className=" mb-1">2. </span>
              Refund Policy
            </h2>
  
            <div className="ml-8 mb-6">
              <h3 className="text-lg font-normal md:text-xl mb-2">2.1 Eligibility for Refunds</h3>
              <ul className="list-disc list-outside ml-5 md:text-base text-sm space-y-2">
                <li>Refunds are issued for eligible orders if the product is unused and unopened.</li>
                <li>Digital products and downloadable content are non-refundable once purchased.</li>
                <li>
                  Services that have already been rendered are not eligible for refunds except in exceptional circumstances.
                </li>
                <li>Customized or personalized items are generally non-refundable.</li>
              </ul>
            </div>
  
            <div className="ml-8 mb-6">
              <h3 className="text-lg font-normal md:text-xl mb-2">2.2 Refund Processing Time</h3>
              <ul className="list-disc list-outside ml-5 md:text-base text-sm space-y-2">
                <li>Refunds will be processed within 3-5 business days after approval.</li>
                <li>The refund will be issued to the payment method that was used at the time of purchase.</li>
              </ul>
            </div>
  
            <div className="ml-8">
              <h3 className="text-lg font-normal md:text-xl mb-2">2.3 Partial Refunds</h3>
              <ul className="list-disc list-outside ml-5 md:text-base text-sm space-y-2">
                <li>
                  Partial refunds may be considered in cases where a portion of the service or product has been used.
                </li>
                <li>The amount of the refund will be determined based on the value of the unused portion.</li>
              </ul>
            </div>
          </section>
  
          {/* Return & Exchange Policy Section */}
          <section className="mb-10">
            <h2 className="text-xl md:text-[28px] font-normal mb-4">
              <span className=" mb-1">3. </span>
              Return & Exchange Policy
            </h2>
  
            <div className="ml-8 mb-6">
              <h3 className="text-lg font-normal md:text-xl mb-2">3.1 Product Returns</h3>
              <ul className="list-disc list-outside ml-5 md:text-base text-sm space-y-2">
                <li>
                  Products must be returned in their original packaging, unused, and in resellable condition within 30 days of delivery.
                </li>
                <li>
                  Customer is responsible for return shipping costs unless the return is due to a defect or error on our part.
                </li>
                <li>Return authorization must be obtained before sending any items back.</li>
              </ul>
            </div>
  
            <div className="ml-8">
              <h3 className="text-lg font-medium mb-2">3.2 Damaged or Defective Items</h3>
              <ul className="list-disc list-outside ml-5 md:text-base text-sm space-y-2">
                <li>
                  If you receive a product that is defective or damaged upon delivery, please contact us within 7 days of delivery.
                </li>
                <li>Please provide photo documentation of the damage or defect so that we may process your return.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
  