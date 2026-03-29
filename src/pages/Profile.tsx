import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Package, MapPin, Settings, LogOut, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Update Profile", icon: User },
    { id: "orders", label: "Order History", icon: Package },
    { id: "addresses", label: "Saved Addresses", icon: MapPin },
    { id: "payment", label: "Payment Methods", icon: CreditCard },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">My Account</h1>
        <p className="text-muted-foreground">Manage your profile, orders, and preferences.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <nav className="flex flex-col space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
            <Separator className="my-4" />
            <Button variant="ghost" className="justify-start text-destructive hover:text-destructive hover:bg-destructive/10" render={<Link to="/" />}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {activeTab === "profile" && <ProfileDetails />}
          {activeTab === "orders" && <OrderHistory />}
          {activeTab === "addresses" && <SavedAddresses />}
          {activeTab === "payment" && <PaymentMethods />}
          {activeTab === "settings" && <AccountSettings />}
        </main>
      </div>
    </div>
  );
}

function ProfileDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Details</CardTitle>
        <CardDescription>Update your personal information and contact details.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" defaultValue="John" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" defaultValue="Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" defaultValue="john.doe@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" defaultValue="+1 (555) 000-0000" />
          </div>
        </div>
        <Button>Save Changes</Button>
      </CardContent>
    </Card>
  );
}

function OrderHistory() {
  const orders = [
    { id: "ORD-7392", date: "Oct 24, 2025", total: "$124.00", status: "Delivered", items: 3 },
    { id: "ORD-6821", date: "Sep 12, 2025", total: "$89.50", status: "Processing", items: 1 },
    { id: "ORD-5439", date: "Aug 05, 2025", total: "$210.00", status: "Delivered", items: 5 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order History</CardTitle>
        <CardDescription>View and track your recent orders.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-4">
              <div>
                <p className="font-semibold">{order.id}</p>
                <p className="text-sm text-muted-foreground">{order.date} • {order.items} items</p>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                <div className="text-right">
                  <p className="font-semibold">{order.total}</p>
                  <p className={`text-sm ${order.status === 'Delivered' ? 'text-green-600' : 'text-amber-600'}`}>
                    {order.status}
                  </p>
                </div>
                <Button variant="outline" size="sm">View</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function SavedAddresses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved Addresses</CardTitle>
        <CardDescription>Manage your shipping and billing addresses.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg relative">
            <Badge className="absolute top-4 right-4 bg-primary/10 text-primary hover:bg-primary/20">Default</Badge>
            <h3 className="font-semibold mb-1">Home</h3>
            <p className="text-sm text-muted-foreground mb-4">
              John Doe<br />
              123 Main St, Apt 4B<br />
              New York, NY 10001<br />
              United States
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Edit</Button>
              <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
            </div>
          </div>
          <div className="p-4 border rounded-lg border-dashed flex flex-col items-center justify-center text-center text-muted-foreground hover:bg-muted/50 transition-colors cursor-pointer min-h-[200px]">
            <MapPin className="h-8 w-8 mb-2 opacity-50" />
            <p className="font-medium">Add New Address</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function PaymentMethods() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>Manage your saved credit cards and payment options.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-slate-100 rounded flex items-center justify-center border">
                <CreditCard className="h-5 w-5 text-slate-600" />
              </div>
              <div>
                <p className="font-semibold">Visa ending in 4242</p>
                <p className="text-sm text-muted-foreground">Expires 12/28</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">Remove</Button>
          </div>
          <Button variant="outline" className="w-full border-dashed">
            + Add New Payment Method
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function AccountSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>Manage your account preferences and security.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Change Password</h3>
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
          <Button>Update Password</Button>
        </div>
        
        <Separator />
        
        <div className="space-y-4">
          <h3 className="font-medium text-destructive">Danger Zone</h3>
          <p className="text-sm text-muted-foreground">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <Button variant="destructive">Delete Account</Button>
        </div>
      </CardContent>
    </Card>
  );
}
