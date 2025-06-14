"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,

  DollarSign,
  History,

  TrendingUp,
  Users,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BarChart,
  LineChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const CreditPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [referrals, setReferrals] = useState<
    {
      id: string;
      name: string;
      email: string;
      avatar: string;
      joinedDate: string;
      creditsEarned: number;
      status: string;
      activity: string;
    }[] 
  >([]);

  const [withdrawals, setWithdrawals] = useState<
    {
      id: string;
      date: string;
      amount: number;
      method: string;
      status: string;
      transactionId: string;
    }[] 
  >([]);

  const [creditHistory, setCreditHistory] = useState<
    {
      month: string;
      credits: number;
      withdrawals: number;
    }[] 
  >([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [withdrawAmount, setWithdrawAmount] = useState(10);
  const [withdrawMethod, setWithdrawMethod] = useState("PayPal");
  const [openModal, setOpenModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const creditSummary = {
    totalCredits: 1200,
    availableToWithdraw: 900,
    pendingCredits: 300,
    conversionRate: 0.1,
    totalReferrals: 15,
    activeReferrals: 8,
    monthlyGrowth: 12.5,
    nextTier: 2000,
    currentTier: "Silver",
    referralLink: "https://example.com/ref/user123",
    nextWithdrawalDate: "2025-05-01",
  };

  useEffect(() => {
    setReferrals([
      {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
        joinedDate: "2025-01-12",
        creditsEarned: 200,
        status: "Completed",
        activity: "Active",
      },
      {
        id: "2",
        name: "Lisa Smith",
        email: "lisa@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
        joinedDate: "2025-02-03",
        creditsEarned: 100,
        status: "Pending",
        activity: "Active",
      },
    ]);

    setWithdrawals([
      {
        id: "1",
        date: "2025-04-01",
        amount: 50,
        method: "PayPal",
        status: "Completed",
        transactionId: "TRX123456",
      },
      {
        id: "2",
        date: "2025-03-01",
        amount: 30,
        method: "Stripe",
        status: "Completed",
        transactionId: "TRX789012",
      },
    ]);

    setCreditHistory([
      { month: "Jan", credits: 150, withdrawals: 0 },
      { month: "Feb", credits: 220, withdrawals: 25 },
      { month: "Mar", credits: 300, withdrawals: 30 },
      { month: "Apr", credits: 280, withdrawals: 50 },
    ]);
  }, []);

  const filteredReferrals = referrals.filter((r) => {
    const matchFilter =
      filter === "all" || r.status.toLowerCase() === filter.toLowerCase();
    const matchSearch =
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.email.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const handleWithdraw = () => {
    const newWithdrawal = {
      id: Date.now().toString(),
      date: new Date().toISOString().split("T")[0],
      amount: withdrawAmount,
      method: withdrawMethod,
      status: "Processing",
      transactionId: `TRX${Math.floor(Math.random() * 1000000)}`,
    };

    setWithdrawals([newWithdrawal, ...withdrawals]);
    setOpenModal(false);

    displayNotification(
      `Withdrawal of $${withdrawAmount} initiated successfully!`
    );
  };

  // const copyReferralLink = () => {
  //   navigator.clipboard.writeText(creditSummary.referralLink);
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 2000);

  //   displayNotification("Referral link copied to clipboard!");
  // };

  const displayNotification = (message: string) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const formatDate = (date: string) => new Date(date).toLocaleDateString();

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const calculateProgress = () => {
    return (creditSummary.totalCredits / creditSummary.nextTier) * 100;
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-6 font-roboto">
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 right-4 z-50"
          >
            <Alert className="bg-green-50 border-green-200">
              <AlertDescription>{notificationMessage}</AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Referral Credits Dashboard
        </h1>
        <p className="text-muted-foreground mt-2 text-white">
          Manage your referrals, track earnings, and withdraw credits
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-purple-50 to-white">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Credits
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  {creditSummary.totalCredits}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  ${creditSummary.totalCredits * creditSummary.conversionRate}
                </p>
              </div>
              <div className="bg-purple-100 p-2 rounded-full">
                <DollarSign className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-white">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Available Credits
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  {creditSummary.availableToWithdraw}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  $
                  {creditSummary.availableToWithdraw *
                    creditSummary.conversionRate}
                </p>
              </div>
              <div className="bg-blue-100 p-2 rounded-full">
                <ArrowUpRight className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-white">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Referrals
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  {creditSummary.totalReferrals}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {creditSummary.activeReferrals} active
                </p>
              </div>
              <div className="bg-green-100 p-2 rounded-full">
                <Users className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-white">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Monthly Growth
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  +{creditSummary.monthlyGrowth}%
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  vs last month
                </p>
              </div>
              <div className="bg-amber-100 p-2 rounded-full">
                <TrendingUp className="h-5 w-5 text-amber-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs
        defaultValue="overview"
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList className="grid grid-cols-4 max-w-md mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="referrals">Referrals</TabsTrigger>
          <TabsTrigger value="withdrawals">Withdrawals</TabsTrigger>
          {/* <TabsTrigger value="settings">Settings</TabsTrigger> */}
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Referral Tier Progress</CardTitle>
              <CardDescription>
                You are currently at the {creditSummary.currentTier} tier. Earn{" "}
                {creditSummary.nextTier - creditSummary.totalCredits} more
                credits to reach the next tier.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{creditSummary.totalCredits} credits</span>
                  <span>{creditSummary.nextTier} credits</span>
                </div>
                <Progress value={calculateProgress()} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{creditSummary.currentTier} Tier</span>
                  <span>Gold Tier</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Credit History Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Credit History</CardTitle>
              <CardDescription>
                Your credits and withdrawals over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={creditHistory}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <RechartsTooltip />
                    <Legend />
                    <Bar
                      dataKey="credits"
                      name="Credits Earned"
                      fill="#8884d8"
                    />
                    <Bar
                      dataKey="withdrawals"
                      name="Withdrawals"
                      fill="#82ca9d"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Referrals Tab */}
        <TabsContent value="referrals" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Your Referrals</span>
                <Badge variant="outline" className="ml-2">
                  {filteredReferrals.length} total
                </Badge>
              </CardTitle>
              <CardDescription>Track and manage your referrals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <Input
                  placeholder="Search by name or email..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="md:max-w-sm"
                />
                <Tabs
                  defaultValue="all"
                  value={filter}
                  onValueChange={setFilter}
                  className="w-full md:w-auto"
                >
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="pending">Pending</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Credits</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Activity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredReferrals.length > 0 ? (
                    filteredReferrals.map((r) => (
                      <TableRow key={r.id}>
                        <TableCell className="flex items-center gap-2">
                          <Avatar>
                            <AvatarImage
                              src={r.avatar || "/placeholder.svg"}
                              alt={r.name}
                            />
                            <AvatarFallback>{r.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{r.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {r.email}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{formatDate(r.joinedDate)}</TableCell>
                        <TableCell>{r.creditsEarned}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={getStatusColor(r.status)}
                          >
                            {r.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              r.activity === "Active" ? "default" : "secondary"
                            }
                          >
                            {r.activity}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className="text-center py-8 text-muted-foreground"
                      >
                        No referrals found matching your criteria
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>

        {/* Withdrawals Tab */}
        <TabsContent value="withdrawals" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <CardTitle>Withdrawals</CardTitle>
                  <CardDescription>
                    Manage your credit withdrawals
                  </CardDescription>
                </div>
                <Dialog open={openModal} onOpenChange={setOpenModal}>
                  <DialogTrigger asChild>
                    <Button>
                      <ArrowUpRight className="mr-2 h-4 w-4" />
                      Withdraw Credits
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
  <DialogHeader>
    <DialogTitle>Withdraw Credits</DialogTitle>
    <DialogDescription>
      Available: ${creditSummary.availableToWithdraw * creditSummary.conversionRate}
    </DialogDescription>
  </DialogHeader>
  <div className="space-y-4 py-4">
    <div className="space-y-2">
      <Label htmlFor="amount">Amount ($)</Label>
      <Input
        id="amount"
        type="number"
        value={withdrawAmount}
        onChange={(e) =>
          setWithdrawAmount(Number(e.target.value))
        }
        min={10}
        max={
          creditSummary.availableToWithdraw *
          creditSummary.conversionRate
        }
      />
      <p className="text-sm text-muted-foreground">
        Min: $10, Max: ${creditSummary.availableToWithdraw * creditSummary.conversionRate}
      </p>
    </div>
    <div className="space-y-2">
      <Label>Withdrawal Method</Label>
      <RadioGroup
        value={withdrawMethod}
        onValueChange={setWithdrawMethod}
        className="grid grid-cols-1 gap-2"
      >
        <div className="flex items-center space-x-2 rounded-md border p-3">
          <RadioGroupItem value="PayPal" id="paypal" />
          <Label htmlFor="paypal" className="flex-1">
            PayPal
          </Label>
        </div>
        <div className="flex items-center space-x-2 rounded-md border p-3">
          <RadioGroupItem value="Credit Card" id="credit-card" />
          <Label htmlFor="credit-card" className="flex-1">
            Bank Credit Card
          </Label>
        </div>
        <div className="flex items-center space-x-2 rounded-md border p-3">
          <RadioGroupItem value="Stripe" id="stripe" />
          <Label htmlFor="stripe" className="flex-1">
            Stripe
          </Label>
        </div>
      </RadioGroup>
    </div>

    {/* PayPal Form with Dropdown Transition */}
    {withdrawMethod === "PayPal" && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-2"
      >
        <Label htmlFor="paypal-email">PayPal Email</Label>
        <Input
          id="paypal-email"
          type="email"
          value="fakeemail@paypal.com"
          disabled
        />
      </motion.div>
    )}

    {/* Credit Card Form with Dropdown Transition */}
    {withdrawMethod === "Credit Card" && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-2"
      >
        <Label htmlFor="card-number">Card Number</Label>
        <Input
          id="card-number"
          type="text"
          value="4111 1111 1111 1111"
          disabled
        />
        <Label htmlFor="card-expiry">Expiry Date</Label>
        <Input
          id="card-expiry"
          type="text"
          value="12/25"
          disabled
        />
        <Label htmlFor="card-cvc">CVC</Label>
        <Input
          id="card-cvc"
          type="text"
          value="123"
          disabled
        />
      </motion.div>
    )}

    {/* Stripe Form with Dropdown Transition */}
    {withdrawMethod === "Stripe" && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-2"
      >
        <Label htmlFor="stripe-account">Stripe Account ID</Label>
        <Input
          id="stripe-account"
          type="text"
          value="acct_1F1L9mJk5TzOb0h5"
          disabled
        />
      </motion.div>
    )}
  </div>
  <DialogFooter>
    <Button
      className="w-[50%]"
      variant="outline"
      onClick={() => setOpenModal(false)}
    >
      Cancel
    </Button>
    <Button
      className="w-[50%]"
      onClick={handleWithdraw}
    >
      Confirm Withdrawal
    </Button>
  </DialogFooter>
</DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-start">
                  <div className="mr-3 mt-0.5">
                    <History className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-blue-800">
                      Next scheduled payout
                    </h4>
                    <p className="text-sm text-blue-600 mt-1">
                      Your next automatic payout is scheduled for{" "}
                      {formatDate(creditSummary.nextWithdrawalDate)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-64 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={withdrawals.slice().reverse()}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <RechartsTooltip />
                    <Line
                      type="monotone"
                      dataKey="amount"
                      name="Amount ($)"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {withdrawals.map((w) => (
                    <TableRow key={w.id}>
                      <TableCell>{formatDate(w.date)}</TableCell>
                      <TableCell>${w.amount.toFixed(2)}</TableCell>
                      <TableCell>{w.method}</TableCell>
                      <TableCell>
                        <code className="text-xs bg-gray-100 p-1 rounded">
                          {w.transactionId}
                        </code>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={getStatusColor(w.status)}
                        >
                          {w.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CreditPage;
