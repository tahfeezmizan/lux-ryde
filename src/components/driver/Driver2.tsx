"use client"

import {
  Award,
  Car,
  CreditCard,
  DollarSign,
  FileText,
  Fuel,
  HelpCircle,
  Mail,
  MessageSquare,
  Phone,
  Settings,
  Shield,
  Star,
  PenToolIcon as Tool,
  UserCheck,
  Zap,
} from "lucide-react"
              
export default function DriverInfoCard() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-roboto">
      <div className="bg-black text-white rounded-xl shadow-lg shadow-slate-800/50 container mx-auto w-full overflow-hidden border border-slate-800">
        {/* Header */}
        <div className="bg-slate-950 p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">Welcome to Your Ryde – Driver Information Page</h1>
          <p className="text-lg opacity-90">
            Drive with Your Ryde and unlock a platform built for your success, safety, and earnings. We&apos;re not just
            another rideshare company — we&apos;re built to empower drivers from the ground up.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Getting Started Section */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Tool className="h-6 w-6 text-blue-400" />
              <h2 className="text-2xl font-bold">Getting Started as a Driver</h2>
            </div>

            <div className="pl-8 space-y-4">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <span className="bg-green-900 text-green-100 px-2 py-1 rounded-md text-sm">Step 1</span>
                  Sign Up
                </h3>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-300">
                  <li>Create your driver account with your name, phone number, email, and a profile photo</li>
                  <li>
                    Upload the required documents:
                    <ul className="list-circle pl-6 mt-1 space-y-1">
                      <li>Valid Driver&apos;s License</li>
                      <li>Vehicle Registration & Insurance</li>
                      <li>Recent Vehicle Inspection Report</li>
                      <li>Clear Photo of Your Vehicle</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <span className="bg-green-900 text-green-100 px-2 py-1 rounded-md text-sm">Step 2</span>
                  Set Up Your Driver Profile
                </h3>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-300">
                  <li>Add your vehicle info: Make, model, year, color, license plate</li>
                  <li>Set your availability, preferred driving times, and preferred service zones</li>
                  <li>Choose your payout method for weekly or daily deposits</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <span className="bg-green-900 text-green-100 px-2 py-1 rounded-md text-sm">Step 3</span>
                  Go Online & Accept Rides
                </h3>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-300">
                  <li>Log into the app and switch to &quot;Online&quot;</li>
                  <li>Review ride requests and tap to accept</li>
                  <li>Drive safely, complete the ride, and get paid</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Earnings Section */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-green-400" />
              <h2 className="text-2xl font-bold">Earn More with Your Ryde</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 pl-8">
              <div className="bg-[#111] p-4 rounded-lg border border-slate-800">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-400" />
                  Base Earnings + Tips
                </h3>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-300">
                  <li>Keep more of what you earn with a flat 20% commission rate</li>
                  <li>Accept tips directly through the app — 100% yours</li>
                </ul>
              </div>

              <div className="bg-[#111]p-4 rounded-lg border border-slate-800">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  Driver Bonuses & Incentives
                </h3>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-300">
                  <li>Weekend Bonus: $30 for 60 rides completed Sat–Sun</li>
                  <li>Weekday Bonus: $60 for 120 rides Mon–Thurs</li>
                  <li>First 100 Rides Bonus & Achievement Trophies</li>
                </ul>
              </div>

              <div className="bg-[#111] p-4 rounded-lg border border-slate-800">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Tool className="h-5 w-5 text-slate-400" />
                  Wear & Tear Package
                </h3>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-300">
                  <li>Drive 3,000 miles = Get a $250 gift card to any auto shop (tires, repairs, tune-ups)</li>
                </ul>
              </div>

              <div className="bg-[#111] p-4 rounded-lg border border-slate-800">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Fuel className="h-5 w-5 text-red-400" />
                  Gas Rewards
                </h3>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-300">
                  <li>Complete 120 rides/week = Earn a $25 Gas Gift Card</li>
                </ul>
              </div>

              <div className="bg-[#111] p-4 rounded-lg border border-slate-800">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-400" />
                  Tax Tools
                </h3>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-300">
                  <li>Access earning summaries for tax reporting</li>
                  <li>Download 1099 forms and trip receipts directly from the app</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Safety Section */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-red-400" />
              <h2 className="text-2xl font-bold">Driver Safety & Security</h2>
            </div>

            <div className="pl-8 bg-[#111] p-4 rounded-lg border border-slate-800">
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-2">
                  <UserCheck className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">4-Digit Rider PIN System:</strong> Riders must enter a PIN before the
                    ride starts
                  </span>
                </li>
                <li className="flex gap-2">
                  <Phone className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Emergency Button:</strong> Contact 911 + notify emergency contacts
                    with live GPS
                  </span>
                </li>
                <li className="flex gap-2">
                  <Car className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Real-Time Trip Sharing:</strong> Let someone track your trip if
                    needed
                  </span>
                </li>
                <li className="flex gap-2">
                  <Star className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Rider Ratings & Behavior Logs:</strong> Block or report problematic
                    riders
                  </span>
                </li>
                <li className="flex gap-2">
                  <MessageSquare className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">In-App Chat & Call Feature:</strong> Text or call your rider securely
                    without exposing your personal number
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Driver Tools Section */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Settings className="h-6 w-6 text-slate-400" />
              <h2 className="text-2xl font-bold">Driver Tools & Features</h2>
            </div>

            <div className="pl-8 bg-[#111] p-4 rounded-lg border border-slate-800">
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-2">
                  <CreditCard className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Driver Dashboard:</strong> View earnings, ride history, and bonuses
                  </span>
                </li>
                <li className="flex gap-2">
                  <Car className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Live Navigation Integration:</strong> Use your preferred maps app
                    (Waze, Google Maps, Apple Maps)
                  </span>
                </li>
                <li className="flex gap-2">
                  <Settings className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Settings Control:</strong> Adjust availability, notification
                    preferences, and driving zones
                  </span>
                </li>
                <li className="flex gap-2">
                  <Award className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Awards & Loyalty Section:</strong> Track your badges, rewards, and
                    milestones
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Subscription Plans Section */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Star className="h-6 w-6 text-purple-400" />
              <h2 className="text-2xl font-bold">Subscription Plans for Riders (What to Know as a Driver)</h2>
            </div>

            <div className="pl-8 text-slate-300">
              <p className="mb-2">Know what perks your riders may have — it helps you deliver top service!</p>
              <p className="mb-2">Riders with Bronze, Silver, Gold, or Platinum Ryde Passes may receive:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Priority driver matching</li>
                <li>Access to luxury rides</li>
                <li>Free ride credits or discounts</li>
              </ul>
            </div>
          </section>

          {/* Support Section */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="h-6 w-6 text-blue-400" />
              <h2 className="text-2xl font-bold">Driver Support</h2>
            </div>

            <div className="pl-8">
              <p className="mb-4 text-slate-300">We&apos;re here to support you every mile of the way.</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 bg-slate-800 p-3 rounded-lg border border-slate-700">
                  <MessageSquare className="h-5 w-5 text-blue-400" />
                  <div>
                    <div className="text-sm text-slate-400">Live Chat</div>
                    <div className="font-medium">Available 24/7</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-slate-800 p-3 rounded-lg border border-slate-700">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <div>
                    <div className="text-sm text-slate-400">Email</div>
                    <div className="font-medium">driversupport@yourryde.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-slate-800 p-3 rounded-lg border border-slate-700">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <div>
                    <div className="text-sm text-slate-400">Call</div>
                    <div className="font-medium">1-844-YUR-RYDE</div>
                    <div className="text-xs text-slate-500">(1-844-987-7933)</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-slate-800 pt-6 mt-8 text-center">
            <h2 className="text-xl font-bold mb-2">Your Ryde – Drive the Difference.</h2>
            <p className="text-slate-300">Earn more. Drive smart. Stay protected.</p>
            <p className="text-blue-400 font-medium mt-2">Welcome to the future of ride-sharing</p>
          </div>
        </div>
      </div>
    </div>
  )
}