/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { Lock, Car, User, Calendar, Wallet } from "lucide-react";

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAvailable, setIsAvailable] = useState<boolean>(true);

  // Vehicle state
  const [vehicleData, setVehicleData] = useState({
    carMake: "",
    licensePlate: "",
    vehicleRegistration: "",
    inspectionDate: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setVehicleData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Vehicle Information Updated",
        description: "Your vehicle details have been updated successfully.",
      });
    }, 1000);
  };

  const handleCancel = () => {
    setVehicleData({
      carMake: "",
      licensePlate: "",
      vehicleRegistration: "",
      inspectionDate: "",
    });
  };

  return (
    <div className="container mx-auto py-10 font-roboto text-white">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Account</h1>
          <p className="text-muted-foreground text-white">
            Manage your account settings.
          </p>
        </div>
        <Separator />
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="w-full grid grid-cols-4">
            <TabsTrigger value="account" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Account</span>
            </TabsTrigger>
            <TabsTrigger value="vehicle" className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              <span>Vehicle</span>
            </TabsTrigger>
            <TabsTrigger value="availability" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Availability</span>
            </TabsTrigger>
            <TabsTrigger value="wallet" className="flex items-center gap-2">
              <Wallet className="h-4 w-4" />
              <span>Wallet</span>
            </TabsTrigger>
          </TabsList>

          {/* Account Section */}
          <TabsContent value="account" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Update your profile and security settings.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Profile Information</h3>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" />
                    </div>
                  </div>
                </div>
                <Separator />
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button
                  onClick={() => {
                    setIsLoading(true);
                    setTimeout(() => {
                      setIsLoading(false);
                      toast({
                        title: "Settings updated",
                        description:
                          "Your settings have been updated successfully.",
                      });
                    }, 1000);
                  }}
                >
                  {isLoading ? "Saving..." : "Save changes"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Vehicle Section */}
          <TabsContent value="vehicle" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Vehicle Information</CardTitle>
                <CardDescription>Update your vehicle details.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Vehicle Details</h3>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="car-make">Car Make/Model</Label>
                      <Input
                        id="car-make"
                        value={vehicleData.carMake}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="license-plate">License Plate</Label>
                      <Input
                        id="license-plate"
                        value={vehicleData.licensePlate}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="vehicle-registration">Vehicle Registration</Label>
                      <Input
                        id="vehicle-registration"
                        value={vehicleData.vehicleRegistration}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="inspection-date">Inspection Expiry Date</Label>
                      <Input
                        id="inspection-date"
                        type="date"
                        value={vehicleData.inspectionDate}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button onClick={handleSave}>
                  {isLoading ? "Saving..." : "Save changes"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Availability Section */}
          <TabsContent value="availability" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Availability Settings</CardTitle>
                <CardDescription>
                  Set your availability and preferred driving zones.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Active Status</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="active-status">Accepting Rides</Label>
                      <p className="text-sm text-muted-foreground">
                        Set your status to accept or reject rides.
                      </p>
                    </div>
                    <Switch
                      id="active-status"
                      checked={isAvailable}
                      onCheckedChange={(checked) => setIsAvailable(checked)}
                    />
                  </div>
                </div>
                <Separator />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Wallet Section */}
          <TabsContent value="wallet" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Wallet</CardTitle>
                <CardDescription>
                  Manage your payment methods and view transaction history.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Balance</h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="text-3xl font-bold">$2,450.00</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Available balance
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button>Add funds</Button>
                    <Button variant="outline">Withdraw</Button>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Payment Methods</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border p-4 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-2 rounded">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                          >
                            <rect width="20" height="14" x="2" y="5" rx="2" />
                            <line x1="2" x2="22" y1="10" y2="10" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">•••• •••• •••• 4242</p>
                          <p className="text-sm text-muted-foreground">
                            Expires 12/24
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Remove
                      </Button>
                    </div>
                    <Button variant="outline" className="w-full">
                      Add payment method
                    </Button>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Recent Transactions</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-[1fr_auto] items-center gap-4 border-b pb-4">
                      <div>
                        <p className="font-medium">Subscription payment</p>
                        <p className="text-sm text-muted-foreground">
                          Apr 12, 2023
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-red-500">-$29.99</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center gap-4 border-b pb-4">
                      <div>
                        <p className="font-medium">Deposit</p>
                        <p className="text-sm text-muted-foreground">
                          Apr 5, 2023
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-500">+$500.00</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                      <div>
                        <p className="font-medium">Withdrawal</p>
                        <p className="text-sm text-muted-foreground">
                          Mar 28, 2023
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-red-500">-$250.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">View all transactions</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
