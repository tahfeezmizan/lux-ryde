"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"

export default function Faq() {
  const [openItem, setOpenItem] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const handleToggle = (value: any) => {
    setOpenItem(openItem === value ? null : value)
  }

  return (
    <div className="relative w-full flex items-center justify-center faq text-white overflow-hidden" id="faq">
      <div className="relative z-10 w-full container px-4 py-16 mx-auto">
        <div className="flex justify-center items-center">
          <h1 className="md:text-3xl text-2xl font-bold text-center mb-3 border-b-2 border-secondery pb-4 w-[300px]">
            FAQ
          </h1>
        </div>
        <p className="md:text-xl text-sm text-white text-opacity-70 text-center mb-10 max-w-xl mx-auto">
          Here are some frequently asked questions about Your Ryde. Get to know more about the features, services, and
          how we prioritize your safety and convenience.
        </p>

        <div className={`${showAll ? "h-auto" : ""} pr-2`}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                value: "item-1",
                question: "What is Your Ryde?",
                answer:
                  "Your Ryde is a next-gen rideshare platform offering luxury, safety, and rewards. Whether you're commuting to work or enjoying a night out, Your Ryde delivers premium service with everyday convenience.",
              },
              {
                value: "item-2",
                question: "What makes Your Ryde better than Uber or Lyft?",
                answer: (
                  <ul className="list-disc pl-5">
                    <li>4-Digit PIN Verification System</li>
                    <li>Loyalty & Rewards Program</li>
                    <li>Emergency Alert Button (911 + Contacts)</li>
                    <li>Multi-Level Referral System (MLM)</li>
                    <li>Luxury & Sport Car Options at Standard Rates</li>
                    <li>Ride Credit System & Discount Offers</li>
                    <li>Driver Incentives, Bonuses, and Repair Packages</li>
                  </ul>
                ),
              },
              {
                value: "item-3",
                question: "Is Your Ryde available in my city?",
                answer:
                  "We are currently launching in Boston, Massachusetts, with expansion plans across the U.S. and internationally.",
              },
              {
                value: "item-4",
                question: "What kind of vehicles can I choose from?",
                answer: (
                  <ul className="list-disc pl-5">
                    <li>Compact SUVs</li>
                    <li>Full-Size SUVs</li>
                    <li>Sports Cars</li>
                    <li>Luxury Cars</li>
                  </ul>
                ),
              },
              {
                value: "item-5",
                question: "How do I book a ride?",
                answer: (
                  <ol className="list-decimal pl-5">
                    <li>Open the Your Ryde app</li>
                    <li>Enter pickup/drop-off locations</li>
                    <li>Choose a vehicle type</li>
                    <li>Confirm your ride and verify the driver with your 4-digit PIN</li>
                  </ol>
                ),
              },
              // Only show the first 5 items if showAll is false
              ...(showAll
                ? [
                    {
                      value: "item-6",
                      question: "What is the 4-digit PIN system?",
                      answer:
                        "Before entering your ride, the app gives you a 4-digit PIN. The driver must recite this PIN. Correct PIN: Green Light – Safe to enter. Incorrect PIN: Red Light – Do not enter.",
                    },
                    {
                      value: "item-7",
                      question: "What happens if I feel unsafe?",
                      answer: (
                        <ul className="list-disc pl-5">
                          <li>Tap the Panic Button in the app to alert 911 with your GPS location</li>
                          <li>Notify up to 4 emergency contacts</li>
                        </ul>
                      ),
                    },
                    {
                      value: "item-8",
                      question: "How do I earn Ryde Credits?",
                      answer: (
                        <ul className="list-disc pl-5">
                          <li>$0.25 in credits per ride</li>
                          <li>$0.15 per ride for every referred user</li>
                          <li>Credits can be used toward future rides or gifted to others</li>
                        </ul>
                      ),
                    },
                    {
                      value: "item-9",
                      question: "What is the MLM referral system?",
                      answer:
                        "Earn rewards from up to 10 or 50 levels deep. Receive $0.15 for every ride completed by someone in your network.",
                    },
                    {
                      value: "item-10",
                      question: "What subscription plans are available?",
                      answer: (
                        <ul className="list-disc pl-5">
                          <li>Basic Ryde Pass – $9.99/month</li>
                          <li>Premium Ryde Pass – $19.99/month</li>
                          <li>Elite Ryde Pass – $49.99/month</li>
                          <li>Family Ryde Pass – $99.99/month</li>
                        </ul>
                      ),
                    },
                    {
                      value: "item-11",
                      question: "Can I send Ryde Credits to others?",
                      answer: "Yes! You can gift Ryde Credits to friends or family from within the app.",
                    },
                    {
                      value: "item-12",
                      question: "How do I sign up as a driver?",
                      answer: "Visit www.yourryde.com/driver-signup or sign up through the app.",
                    },
                    {
                      value: "item-13",
                      question: "What documents are required for drivers?",
                      answer: (
                        <ul className="list-disc pl-5">
                          <li>Driver&lsquo;s License</li>
                          <li>Vehicle Registration</li>
                          <li>Insurance Proof</li>
                          <li>Profile Photo</li>
                          <li>Background Check Authorization</li>
                        </ul>
                      ),
                    },
                    {
                      value: "item-14",
                      question: "What driver incentives are available?",
                      answer: (
                        <ul className="list-disc pl-5">
                          <li>$20–$60 Ride Bonuses</li>
                          <li>$250 Wear & Tear Gift Card</li>
                          <li>$25 Gas Gift Card for 120 weekly rides</li>
                          <li>Ratings & Loyalty Perks</li>
                        </ul>
                      ),
                    },
                    {
                      value: "item-15",
                      question: "Can drivers choose their own schedule?",
                      answer: "Yes! Drive full-time, part-time, or only weekends—Your Ryde is fully flexible.",
                    },
                    {
                      value: "item-16",
                      question: "What payment methods are accepted?",
                      answer: (
                        <ul className="list-disc pl-5">
                          <li>Credit/Debit Cards</li>
                          <li>PayPal</li>
                          <li>Stripe</li>
                          <li>(No cash payments currently supported.)</li>
                        </ul>
                      ),
                    },
                    {
                      value: "item-17",
                      question: "Is tipping required?",
                      answer: "No, tipping is optional—but always appreciated!",
                    },
                    {
                      value: "item-18",
                      question: "What’s the cancellation policy?",
                      answer:
                        "Non-subscribers may be charged for last-minute cancellations. Subscribers receive free cancellations up to their plan limit.",
                    },
                    {
                      value: "item-19",
                      question: "How do I get customer support?",
                      answer:
                        "Use the in-app Help section or email: support@yourryde.com. We offer 24/7 customer support.",
                    },
                    {
                      value: "item-20",
                      question: "Can I use Your Ryde for airport pickups?",
                      answer:
                        "Yes! Enter your terminal and flight info when booking. Elite and Family subscribers receive priority airport pickup upgrades.",
                    },
                  ]
                : []),
            ].map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className={`border-b ${
                  openItem === item.value ? "bg-white bg-opacity-10 border-none backdrop-blur-[6px] p-2" : ""
                }`}
              >
                <AccordionTrigger
                  className={`text-left py-4 hover:no-underline text-base md:text-[20px] ${
                    openItem === item.value ? "text-white" : ""
                  }`}
                  onClick={() => handleToggle(item.value)}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-white text-opacity-70 text-sm md:text-[18px] leading-[200%] pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {!showAll && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowAll(true)}
                className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white py-2 px-6 rounded-full transition-all duration-300"
              >
                See More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
