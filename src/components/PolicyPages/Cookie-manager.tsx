"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ScrollArea } from "@/components/ui/scroll-area"

export function CookieManager() {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [preferences, setPreferences] = useState({
    essential: true,
    functional: false,
    analytics: false,
    advertising: false,
  })

  useEffect(() => {
    // Load saved preferences
    const savedPreferences = localStorage.getItem("cookiePreferences")
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences))
    }
  }, [])

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const savePreferences = () => {
    localStorage.setItem("cookieConsent", "custom")
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences))
    setOpen(false)
  }

  const effectiveDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Cookie Settings
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px] max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Cookie Agreement</DialogTitle>
          <DialogDescription>Effective Date: {effectiveDate}</DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="types">Types</TabsTrigger>
            <TabsTrigger value="choices">Choices</TabsTrigger>
            <TabsTrigger value="third-party">Third-Party</TabsTrigger>
            <TabsTrigger value="updates">Updates</TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[350px] w-full pr-4">
            <TabsContent value="overview" className="py-4">
              <div className="space-y-4">
                <p className="text-sm">
                  This Cookie Policy explains how Your Ryde uses cookies and similar tracking technologies when you
                  visit our website, mobile applications, or use our online services. We are committed to transparency
                  and protecting your privacy online.
                </p>

                <div>
                  <h3 className="text-lg font-semibold mb-2">1. What Are Cookies?</h3>
                  <p className="text-sm">
                    Cookies are small text files that websites and apps store on your device when you browse. These
                    files store information about your preferences, device, and session, helping us provide a better and
                    more secure user experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">2. Why We Use Cookies</h3>
                  <p className="text-sm">We use cookies to:</p>
                  <ul className="list-disc pl-6 text-sm space-y-1 mt-2">
                    <li>Understand how users interact with our app and website to improve performance.</li>
                    <li>Save your preferences (e.g., language, saved locations).</li>
                    <li>Provide personalized content, features, and advertisements (only with your consent).</li>
                    <li>Secure your experience by detecting fraud, preventing misuse, and protecting your account.</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="types" className="py-4">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-2">3. Types of Cookies We Use</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Essential Cookies:</p>
                    <p className="text-sm">
                      Required for the operation of the platform (e.g., logging in, ride booking).
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Functional Cookies:</p>
                    <p className="text-sm">Help remember user preferences and improve personalized features.</p>
                  </div>
                  <div>
                    <p className="font-medium">Analytics Cookies:</p>
                    <p className="text-sm">Collect anonymous usage data to enhance performance and user experience.</p>
                  </div>
                  <div>
                    <p className="font-medium">Advertising Cookies:</p>
                    <p className="text-sm">
                      Deliver targeted ads based on your browsing habits (used only with your permission).
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="choices" className="py-4">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-2">4. Your Cookie Choices</h3>
                <p className="text-sm">You can choose to accept or reject certain types of cookies:</p>
                <ul className="list-disc pl-6 text-sm space-y-1 mt-2">
                  <li>
                    On your first visit, you will see a cookie consent banner where you can accept or manage cookies.
                  </li>
                  <li>You can change your cookie settings at any time via your browser or device preferences.</li>
                </ul>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="essential-manager">Essential Cookies</Label>
                      <p className="text-xs text-muted-foreground">Required for the website to function properly.</p>
                    </div>
                    <Switch id="essential-manager" checked={preferences.essential} disabled={true} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="functional-manager">Functional Cookies</Label>
                      <p className="text-xs text-muted-foreground">
                        Help remember user preferences and improve personalized features.
                      </p>
                    </div>
                    <Switch
                      id="functional-manager"
                      checked={preferences.functional}
                      onCheckedChange={() => handlePreferenceChange("functional")}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="analytics-manager">Analytics Cookies</Label>
                      <p className="text-xs text-muted-foreground">
                        Collect anonymous usage data to enhance performance and user experience.
                      </p>
                    </div>
                    <Switch
                      id="analytics-manager"
                      checked={preferences.analytics}
                      onCheckedChange={() => handlePreferenceChange("analytics")}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="advertising-manager">Advertising Cookies</Label>
                      <p className="text-xs text-muted-foreground">
                        Deliver targeted ads based on your browsing habits.
                      </p>
                    </div>
                    <Switch
                      id="advertising-manager"
                      checked={preferences.advertising}
                      onCheckedChange={() => handlePreferenceChange("advertising")}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="third-party" className="py-4">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-2">5. Third-Party Cookies</h3>
                <p className="text-sm">Some cookies may be placed by trusted third-party services such as:</p>
                <ul className="list-disc pl-6 text-sm space-y-1 mt-2">
                  <li>Google Analytics</li>
                  <li>Advertising networks</li>
                  <li>Social media platforms</li>
                </ul>
                <p className="text-sm mt-2">These partners have their own privacy and cookie policies.</p>
              </div>
            </TabsContent>

            <TabsContent value="updates" className="py-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">6. Updates to This Policy</h3>
                  <p className="text-sm">
                    We may update our Cookie Policy to reflect changes in technology, law, or the services we provide.
                    All updates will be posted on this page and take effect immediately upon posting.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">7. Contact Us</h3>
                  <p className="text-sm">
                    If you have any questions or concerns about our use of cookies or your privacy rights, reach out to:
                  </p>
                  <p className="text-sm mt-2">📧 Email: support@yourryde.com</p>
                </div>
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>

        <DialogFooter>
          <Button onClick={savePreferences}>Save Preferences</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
