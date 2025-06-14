import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";

export function DriverAgreementConsent() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const router = useRouter();

  useEffect(() => {
    const consentGiven = localStorage.getItem("driverAgreement");
    if (!consentGiven) {
      setOpen(true);
    }
  }, []);

  const clearNonEssentialCookies = () => {
    document.cookie = "ga=; Max-Age=0; path=/";
    document.cookie = "_ga=; Max-Age=0; path=/";
    document.cookie = "_gid=; Max-Age=0; path=/";
    document.cookie = "_fbp=; Max-Age=0; path=/";
    document.cookie = "ad_token=; Max-Age=0; path=/";
  };

  const acceptAll = () => {
    const allPrefs = {
      essential: true,
      functional: true,
      analytics: true,
      advertising: true,
    };
    localStorage.setItem("driverAgreement", "all");
    localStorage.setItem("driverPreferences", JSON.stringify(allPrefs));
    setOpen(false);
  };

  const declineAll = () => {
    // Do NOT save anything to localStorage
    clearNonEssentialCookies();
    setOpen(false);
    router.push("/");
  };

  const effectiveDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (open && !value) return;
        setOpen(value);
      }}
    >
      <DialogContent className="bg-opacity-10 backdrop-blur-md sm:max-w-[650px] max-h-[90vh] z-[999] font-roboto text-white text-opacity-90">
        <DialogHeader>
          <DialogTitle className="text-[#F1E1A3] text-2xl font-semibold">
            Driver Agreement
          </DialogTitle>
          <DialogDescription className="text-white text-opacity-80 text-sm">
            Effective Date: {effectiveDate}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 text-xs sm:text-sm">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="terms">Terms</TabsTrigger>
            <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
            <TabsTrigger value="violations">Violations</TabsTrigger>
            <TabsTrigger value="updates">Updates</TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[350px] w-full pr-4">
            <TabsContent value="overview" className="py-4 text-sm space-y-4">
              <div>
                <p>
                  This Driver Agreement outlines the terms and conditions under
                  which drivers agree to operate under our platform. By
                  accepting this agreement, drivers commit to adhering to all
                  policies, safety standards, and responsibilities required for
                  a successful partnership.
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-white text-opacity-90 mb-2">
                    1. What Is This Agreement?
                  </h3>
                  <p>
                    This agreement governs the relationship between drivers and
                    the platform. It ensures that both parties understand their
                    rights, obligations, and responsibilities while operating
                    within the service.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white text-opacity-90 mb-2">
                    2. Why We Have This Agreement
                  </h3>
                  <p>We use this agreement to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Ensure driver safety and platform compliance.</li>
                    <li>
                      Clarify expectations regarding driver behavior and vehicle
                      maintenance.
                    </li>
                    <li>
                      Protect both the platform and drivers in case of disputes.
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="terms" className="py-4 text-sm space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  3. Terms of Service
                </h3>
                <p>As a driver, you agree to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Adhere to all traffic laws and safety standards.</li>
                  <li>Ensure your vehicle is in good working condition.</li>
                  <li>
                    Report any incidents or accidents immediately to the
                    platform.
                  </li>
                  <li>
                    Maintain a professional and courteous attitude while
                    interacting with passengers.
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="responsibilities"
              className="py-4 text-sm space-y-4"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  4. Driver Responsibilities
                </h3>
                <p>You are responsible for:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    Maintaining a clean, safe, and well-maintained vehicle.
                  </li>
                  <li>
                    Providing timely and reliable transportation services.
                  </li>
                  <li>
                    Complying with all local and regional transportation
                    regulations.
                  </li>
                  <li>Respecting passenger privacy and confidentiality.</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="violations" className="py-4 text-sm space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  5. Violations and Penalties
                </h3>
                <p>Failure to comply with this agreement may result in:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Suspension or termination of your driver account.</li>
                  <li>Monetary penalties or fines for severe violations.</li>
                  <li>
                    Legal action in case of significant breaches (e.g.,
                    accidents, criminal behavior).
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="updates" className="py-4 text-sm space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  6. Updates to This Agreement
                </h3>
                <p>
                  We may update this agreement from time to time to reflect
                  changes in law, platform policies, or other factors. All
                  updates will be communicated to you, and the new terms will be
                  effective immediately upon posting.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">7. Contact Us</h3>
                <p>
                  If you have any questions or concerns about this Driver
                  Agreement, please contact us at:
                </p>
                <p className="mt-2">📧 Email: support@yourplatform.com</p>
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>

        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={declineAll}
            className="sm:flex-1 text-black"
          >
            Decline All
          </Button>

          <Button onClick={acceptAll} className="sm:flex-1">
            Accept All
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
