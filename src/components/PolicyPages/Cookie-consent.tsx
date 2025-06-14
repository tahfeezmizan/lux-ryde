/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

export function CookieConsent() {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [preferences, setPreferences] = useState({
    essential: true,
    functional: false,
    analytics: false,
    advertising: false,
  })

  useEffect(() => {
    const consentGiven = localStorage.getItem("cookieConsent")
    if (!consentGiven) {
      setOpen(true)
    }
  }, [])

  const acceptAll = () => {
    setPreferences({
      essential: true,
      functional: true,
      analytics: true,
      advertising: true,
    })
    localStorage.setItem("cookieConsent", "all")
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify({
        essential: true,
        functional: true,
        analytics: true,
        advertising: true,
      }),
    )
    setOpen(false)
  }

  const declineAll = () => {
    setPreferences({
      essential: true,
      functional: false,
      analytics: false,
      advertising: false,
    })
    localStorage.setItem("cookieConsent", "essential")
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify({
        essential: true,
        functional: false,
        analytics: false,
        advertising: false,
      }),
    )
    setOpen(false)
  }

  const effectiveDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (open && !value) {
          return
        }
        setOpen(value)
      }}
    >
      <DialogContent className="bg-opacity-10 backdrop-blur-md sm:max-w-[650px] max-h-[90vh] z-[999] font-roboto text-white text-opacity-90">
        <DialogHeader>
          <DialogTitle className="text-[#F1E1A3] text-2xl font-semibold">Cookie Agreement</DialogTitle>
          <DialogDescription className="text-white text-opacity-80 text-sm">Effective Date: {effectiveDate}</DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 text-xs sm:text-sm">
            <TabsTrigger
              value="overview"
              className={activeTab === "QA!" ? " text-white" : ""}
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="types"
              className={activeTab === "types" ? "bg-red-500 text-white" : ""}
            >
              Types
            </TabsTrigger>
            <TabsTrigger
              value="choices"
              className={activeTab === "choices" ? "bg-red-500 text-white" :" "}
            >
              Choices
            </TabsTrigger>
            <TabsTrigger
              value="third-party"
              className={activeTab === "third-party" ? "bg-red-500 text-white" : ""}
            >
              Third-Party
            </TabsTrigger>
            <TabsTrigger
              value="updates"
              className={activeTab === "updates" ? "bg-red-500 text-white" : ""}
            >
              Updates
            </TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[350px] w-full pr-4">
            <TabsContent value="overview" className="py-4 text-sm space-y-4">
              <div>
                <p>
                  This Cookie Policy explains how Your Ryde uses cookies and similar tracking technologies when you visit our website, mobile applications, or use our online services. We are committed to transparency and protecting your privacy online.
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-white text-opacity-90 mb-2">1. What Are Cookies?</h3>
                  <p>
                    Cookies are small text files that websites and apps store on your device when you browse. These files store information about your preferences, device, and session, helping us provide a better and more secure user experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white text-opacity-90 mb-2">2. Why We Use Cookies</h3>
                  <p>We use cookies to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Understand how users interact with our app and website to improve performance.</li>
                    <li>Save your preferences (e.g., language, saved locations).</li>
                    <li>Provide personalized content, features, and advertisements (only with your consent).</li>
                    <li>Secure your experience by detecting fraud, preventing misuse, and protecting your account.</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="types" className="py-4 text-sm space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">3. Types of Cookies We Use</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Essential Cookies:</p>
                    <p>Required for the operation of the platform (e.g., logging in, ride booking).</p>
                  </div>
                  <div>
                    <p className="font-medium">Functional Cookies:</p>
                    <p>Help remember user preferences and improve personalized features.</p>
                  </div>
                  <div>
                    <p className="font-medium">Analytics Cookies:</p>
                    <p>Collect anonymous usage data to enhance performance and user experience.</p>
                  </div>
                  <div>
                    <p className="font-medium">Advertising Cookies:</p>
                    <p>Deliver targeted ads based on your browsing habits (used only with your permission).</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="choices" className="py-4 text-sm space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">4. Your Cookie Choices</h3>
                <p>You can choose to accept or reject certain types of cookies:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    On your first visit, you will see a cookie consent banner where you can accept or manage cookies.
                  </li>
                  <li>You can change your cookie settings at any time via your browser or device preferences.</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="third-party" className="py-4 text-sm space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">5. Third-Party Cookies</h3>
                <p>Some cookies may be placed by trusted third-party services such as:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Google Analytics</li>
                  <li>Advertising networks</li>
                  <li>Social media platforms</li>
                </ul>
                <p className="mt-2">These partners have their own privacy and cookie policies.</p>
              </div>
            </TabsContent>

            <TabsContent value="updates" className="py-4 text-sm space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">6. Updates to This Policy</h3>
                <p>
                  We may update our Cookie Policy to reflect changes in technology, law, or the services we provide.
                  All updates will be posted on this page and take effect immediately upon posting.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">7. Contact Us</h3>
                <p>
                  If you have any questions or concerns about our use of cookies or your privacy rights, reach out to:
                </p>
                <p className="mt-2">📧 Email: support@yourryde.com</p>
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>

        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={declineAll} className="sm:flex-1 text-black">
            Decline Optional
          </Button>

          <Button onClick={acceptAll} className="sm:flex-1">
            Accept All
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
