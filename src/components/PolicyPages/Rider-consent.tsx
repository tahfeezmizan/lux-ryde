/* eslint-disable @typescript-eslint/no-unused-vars */
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

export function RiderAgreementConsent() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [preferences, setPreferences] = useState({
    essential: true,
    functional: false,
    analytics: false,
    advertising: false,
  });

  const router = useRouter();
  useEffect(() => {
    const consentGiven = localStorage.getItem("driverAgreement");
    if (!consentGiven) {
      setOpen(true);
    }
  }, []);

  const acceptAll = () => {
    setPreferences({
      essential: true,
      functional: true,
      analytics: true,
      advertising: true,
    });
    localStorage.setItem("driverAgreement", "all");
    localStorage.setItem(
      "driverPreferences",
      JSON.stringify({
        essential: true,
        functional: true,
        analytics: true,
        advertising: true,
      })
    );
    setOpen(false);
  };

  const declineAll = () => {
    setPreferences({
      essential: true,
      functional: false,
      analytics: false,
      advertising: false,
    });
    localStorage.setItem("driverAgreement", "essential");
    localStorage.setItem(
      "driverPreferences",
      JSON.stringify({
        essential: true,
        functional: false,
        analytics: false,
        advertising: false,
      })
    );
    router.push("/");
    setOpen(false);
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
        if (open && !value) {
          return;
        }
        setOpen(value);
      }}
    >
      <DialogContent className="bg-opacity-10 backdrop-blur-md sm:max-w-[650px] max-h-[90vh] z-[999] font-roboto text-white text-opacity-90">
        <DialogHeader>
          <DialogTitle className="text-[#F1E1A3] text-2xl font-semibold">
            Rider Agreement
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
                  This Rider Agreement outlines the terms and conditions under
                  which riders agree to use the platform. By accepting this
                  agreement, riders commit to adhering to all policies, safety
                  standards, and responsibilities required for a successful
                  partnership.
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-white text-opacity-90 mb-2">
                    1. What Is This Agreement?
                  </h3>
                  <p>
                    This agreement governs the relationship between riders and
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
                    <li>Ensure rider safety and platform compliance.</li>
                    <li>Clarify expectations regarding rider behavior.</li>
                    <li>Protect both the platform and riders in case of disputes.</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="terms" className="py-4 text-sm space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">3. Terms of Service</h3>
                <p>As a rider, you agree to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Adhere to all traffic laws and safety standards.</li>
                  <li>Ensure that your profile information is accurate and up to date.</li>
                  <li>Report any incidents or accidents immediately to the platform.</li>
                  <li>Maintain a respectful and courteous attitude while interacting with users.</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="responsibilities" className="py-4 text-sm space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">4. Rider Responsibilities</h3>
                <p>You are responsible for:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Maintaining a professional attitude.</li>
                  <li>Complying with all local and regional transportation regulations.</li>
                  <li>Ensuring your personal safety and following health protocols.</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="violations" className="py-4 text-sm space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">5. Violations and Penalties</h3>
                <p>Failure to comply with this agreement may result in:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Suspension or termination of your rider account.</li>
                  <li>Monetary penalties or fines for severe violations.</li>
                  <li>Legal action in case of significant breaches (e.g., criminal behavior).</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="updates" className="py-4 text-sm space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">6. Updates to This Agreement</h3>
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
                  If you have any questions or concerns about this Rider
                  Agreement, please contact us at:
                </p>
                <p className="mt-2">📧 Email: support@yourplatform.com</p>
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>

        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={declineAll} className="sm:flex-1 text-black">
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
