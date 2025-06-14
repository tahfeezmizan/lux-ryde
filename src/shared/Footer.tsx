import Link from "next/link";
import Image from "next/image";

import Call from "@/components/icon/Call";
import Email from "@/components/icon/Email";
import logo from "@/assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTiktok} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


// Footer Section data
const footerSections = [
  {
    title: "Navigation",
    items: [
     // { label: "Book a Ride", link: "/book-ride" },

      { label: "Rider Sign Up", link: "/rider-sign-up" },
      { label: "Driver Sign Up", link: "/driver-sign-up" },
      { label: "About Us", link: "/about-us" },
    ],
  },
  {
    title: "Links",
    items: [
      { label: "Terms & Conditions", link: "/terms-and-conditions" },
      { label: "Privacy Policy", link: "/privacy-policy" },
      // { label: "Driver Agreement", link: "/driver-agreement" },
      // { label: "Cookie Agreement", link: "/cookie-agreement" },
      { label: "Refund Policy", link: "/refund-and-cancellation-policy" },
      { label: "Security & Safety Measures", link: "/security-and-safety-measures" },
    ],
  },
  {
    title: "Support & Assistance",
    items: [
      { label: "Contact Us", link: "/contact" },
      { label: "Customer Support", link: "/customer-support" },
      { label: "Driver Support", link: "/driver-support" },
      { label: "Rider Support", link: "/rider-support" },
      { label: "Emergency Safety Features", link: "/emergency-features" },
    ],
  },
  {
    title: "Rewards & Incentives",
    items: [
      {
        label: "Loyalty & Referral Program",
        link: "/loyalty-and-referral-program",
      },
      { label: "Driver Bonuses & Incentives", link: "/driver-bonus" },
      { label: "Your Ryde Business Plan", link: "/your-ryde-business-plan" },
      { label: "MLM Earnings", link: "/mlm" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-10 px-4 lg:px-8 font-roboto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <Image
              src={logo}
              alt="RYDE Logo"
              width={120}
              height={60}
              className="mb-4"
            />
            <p className="md:text-sm text-xs font-roboto font-normal">
              Your Ryde isn&apos;t just a ride, it&apos;s a movement. A safe,
              private, and secure way to travel. Enter your details to find your
              next ride with us.
            </p>
          </div>

          {/* Dynamically Render Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-medium mb-4 md:text-base text-sm">
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.link}
                      className="hover:text-white md:text-sm text-xs font-normal transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Social Links */}
          <div>
            <h3 className="text-white font-medium mb-4 md:text-base text-sm">
              Contact
            </h3>
            <p className="md:text-sm text-xs font-normal mb-2 flex items-center justify-start text-center gap-2">
              <Call /> 1-844-987-7933
            </p>
            <p className="md:text-sm text-xs font-normal mb-4 flex items-center justify-start text-center gap-2">
              <Email /> support@ryde.com
            </p>

            <h3 className="text-white font-medium mb-2 md:text-base text-sm">
              Follow Us
            </h3>
       
<div className="flex space-x-3">
  <Link
    href="https://www.facebook.com/61575101454959/posts/pfbid037f3tmBgMzBxuxi4k8cpURykpUfdyeebwWNaHZe8YiWoE6txZprDBQ7ErrBxURiAMl/?app=fbl"
    className="text-zinc-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-110"
  >
    <FaFacebook />
  </Link>
  <Link
    href="https://www.instagram.com/p/DIHInseM9mD/?igsh=NW0xZ2QzbWc0bXJ0"
    className="text-zinc-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-110"
  >
    <FaInstagram  />
  </Link>
  <Link
    href="#"
    className="text-zinc-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-110"
  >
<FaXTwitter />
  </Link>
  <Link
    href="https://vm.tiktok.com/ZMBQ12vrp/"
    className="text-zinc-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-110"
  >
    <FaTiktok />
  </Link>
  <Link
    href="https://pin.it/1XIboewvh"
    className="text-zinc-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-110"
  >
    <FaPinterest  />
  </Link>
  <Link
    href="https://www.linkedin.com/in/your-ryde-inc-20424235a"
    className="text-zinc-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-110"
  >
    <FaLinkedin  />
  </Link>
</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
