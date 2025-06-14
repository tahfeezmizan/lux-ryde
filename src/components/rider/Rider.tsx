/* eslint-disable @typescript-eslint/no-explicit-any */
// app/components/YourRydeInfo.tsx
'use client';

import {
  Car,
  CreditCard,
  ShieldCheck,
  Gift,
  Star,
  Users,
  Wallet,
  BadgeCheck,
  PhoneCall,
  Mail,
  MessageCircleMore,
} from 'lucide-react';

export default function YourRydeInfo() {
  const Card = ({ icon: Icon, title, children }: any) => (
    <div className="bg-[#111] p-6 rounded-2xl font-roboto shadow-md border border-slate-700 container mx-auto">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Icon className="w-5 h-5 text-white" /> {title}
      </h2>
      <div className="text-gray-200">{children}</div>
    </div>
  );

  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-20 py-10 space-y-10">
      {/* Intro Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold flex justify-center items-center gap-2">
          <Car className="w-6 h-6 text-white" />
          Welcome to Your Ryde
        </h1>
        <p className="text-lg text-gray-300">Smarter. Safer. More Rewarding.</p>
      </div>

      {/* Getting Started */}
      <Card icon={CreditCard} title="Getting Started with Your Ryde">
        <ol className="space-y-4 list-decimal list-inside">
          <li>
            <strong>Step 1: Create Your Account</strong>
            <ul className="ml-5 list-disc mt-1">
              <li>Sign up with your details and profile picture</li>
              <li>Upload a valid ID for verification</li>
            </ul>
          </li>
          <li>
            <strong>Step 2: Set Your Payment Method</strong>
            <ul className="ml-5 list-disc mt-1">
              <li>Add card, connect PayPal, or apply Ryde Credits</li>
              <li>Save preferred methods and enter promo codes</li>
            </ul>
          </li>
          <li>
            <strong>Step 3: Book a Ride</strong>
            <ul className="ml-5 list-disc mt-1">
              <li>Choose pickup & drop-off</li>
              <li>Select vehicle: 🚙 Compact | 🚐 SUV | 🏎️ Sports | 🚘 Luxury</li>
              <li>Enter 4-digit PIN with driver to start</li>
            </ul>
          </li>
        </ol>
      </Card>

      {/* Safety */}
      <Card icon={ShieldCheck} title="Ride Safety Features">
        <ul className="list-disc ml-5 space-y-1">
          <li>PIN Verification System</li>
          <li>Live Trip Sharing with loved ones</li>
          <li>Driver & Vehicle preview info</li>
          <li>Emergency Button with 911 + GPS alert</li>
        </ul>
      </Card>

      {/* Earn Rewards */}
      <Card icon={Gift} title="Earn While You Ride">
        <ul className="space-y-3">
          <li>
            <strong className="flex items-center gap-2">
              <Star className="w-4 h-4" /> Ryde Loyalty Points:
            </strong>
            Earn 20 points per ride for cash or discounts.
          </li>
          <li>
            <strong className="flex items-center gap-2">
              <Users className="w-4 h-4" /> Referral Rewards:
            </strong>
            Invite & earn every time they ride.
          </li>
          <li>
            <strong className="flex items-center gap-2">
              <Wallet className="w-4 h-4" /> Ryde Credits:
            </strong>
            <ul className="list-disc ml-5 mt-1">
              <li>Spend $20 → Get $22.50</li>
              <li>Spend $30 → Get $33.75</li>
              <li>Spend $40 → Get $45.00</li>
              <li>Use credits for rides, gifts, or promo stacks</li>
            </ul>
          </li>
        </ul>
      </Card>

      {/* Subscriptions */}
      <Card icon={BadgeCheck} title="Subscription Plans">
        <p className="mb-2">Upgrade with our flexible plans:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>🚘 <strong>Bronze:</strong> Basic savings</li>
          <li>🚘 <strong>Silver:</strong> Priority booking + perks</li>
          <li>🚘 <strong>Gold:</strong> Deep discounts + rewards</li>
          <li>🚘 <strong>Platinum:</strong> VIP luxury access + support</li>
        </ul>
        <p className="mt-4">🎁 All plans include:</p>
        <ul className="ml-5 list-disc">
          <li>Discounts on every ride</li>
          <li>Free ride credits monthly</li>
          <li>Priority matching during peak hours</li>
          <li>Loyalty points multiplier</li>
          <li>Luxury/sports cars at standard rates (by tier)</li>
        </ul>
        <p className="mt-2 text-sm text-gray-400">🔍 Manage your plan in the app’s &quot;Subscriptions&quot; section.</p>
      </Card>

      {/* Ride History */}
      <Card icon={Car} title="Your Ride, Your Records">
        <ul className="list-disc ml-5 space-y-1">
          <li>Review past rides, payments, rewards</li>
          <li>Track loyalty points, badges, and milestones</li>
        </ul>
      </Card>

      {/* Help Section */}
      <Card icon={MessageCircleMore} title="Need Help?">
        <ul className="space-y-2 ml-2">
          <li><MessageCircleMore className="inline w-4 h-4" /> <strong>Live Chat:</strong> 24/7 support</li>
          <li><Mail className="inline w-4 h-4" /> <strong>Email:</strong> support@yourryde.com</li>
          <li><PhoneCall className="inline w-4 h-4" /> <strong>Call:</strong> 1-844-YUR-RYDE</li>
        </ul>
      </Card>

      {/* Footer */}
      <div className="text-center pt-10 border-t border-gray-700">
        <p className="text-lg font-semibold">💬 Your Ryde – A Better Way to Ride.</p>
        <p className="text-sm text-gray-400">Safe. Affordable. Rewarding.</p>
        <p className="text-sm text-gray-400">Join the movement. Book your ride today.</p>
      </div>
    </div>
  );
}
