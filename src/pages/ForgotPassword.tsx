import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function ForgotPassword() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12 flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Reset Password</CardTitle>
          <CardDescription className="text-center">
            Enter your email address and we'll send you a link to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <Button className="w-full" render={<Link to="/signin" />}>Send Reset Link</Button>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link to="/signin" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to sign in
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
