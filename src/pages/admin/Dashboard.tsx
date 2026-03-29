import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, ShoppingBag, Activity } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Revenue", value: "$45,231.89", icon: DollarSign, trend: "+20.1% from last month" },
    { title: "Active Users", value: "+2350", icon: Users, trend: "+180.1% from last month" },
    { title: "Sales", value: "+12,234", icon: ShoppingBag, trend: "+19% from last month" },
    { title: "Active Now", value: "+573", icon: Activity, trend: "+201 since last hour" },
  ];

  const recentOrders = [
    { id: "ORD-7392", customer: "John Doe", email: "john@example.com", amount: "$124.00", status: "Delivered", date: "Oct 24, 2025" },
    { id: "ORD-6821", customer: "Jane Smith", email: "jane@example.com", amount: "$89.50", status: "Processing", date: "Sep 12, 2025" },
    { id: "ORD-5439", customer: "Alice Johnson", email: "alice@example.com", amount: "$210.00", status: "Delivered", date: "Aug 05, 2025" },
    { id: "ORD-4921", customer: "Bob Brown", email: "bob@example.com", amount: "$45.00", status: "Cancelled", date: "Jul 18, 2025" },
    { id: "ORD-3812", customer: "Charlie Davis", email: "charlie@example.com", amount: "$150.00", status: "Processing", date: "Jun 30, 2025" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px] flex items-center justify-center text-muted-foreground border-2 border-dashed rounded-lg">
              Chart Placeholder (e.g., Recharts)
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {recentOrders.slice(0, 5).map((order) => (
                <div key={order.id} className="flex items-center">
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{order.customer}</p>
                    <p className="text-sm text-muted-foreground">
                      {order.email}
                    </p>
                  </div>
                  <div className="ml-auto font-medium">+{order.amount}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <Badge variant={order.status === "Delivered" ? "default" : order.status === "Processing" ? "secondary" : "destructive"}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{order.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
