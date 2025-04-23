
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      
      <div className="py-12 md:py-16 flex flex-col items-center justify-center">
        <div className="w-full max-w-md px-4 md:px-0">
          <Card className="border-gray-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-heading text-neet-text">Create Your Account</CardTitle>
              <CardDescription>Join NEET Ace Mentor to get expert guidance</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="youremail@example.com" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 9876543210" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                    <p className="text-xs text-neet-lightText">Password must be at least 8 characters long</p>
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm font-normal">
                      I agree to the{" "}
                      <Link to="/terms" className="text-neet-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-neet-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                  <Button type="submit" className="w-full bg-neet-primary hover:bg-neet-secondary">
                    Create Account
                  </Button>
                </div>
              </form>
              <div className="mt-6 text-center text-sm">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="text-neet-primary hover:underline font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
              
              {/* Note: This message will be visible until Supabase integration */}
              <div className="mt-6 p-3 bg-neet-background rounded-md">
                <p className="text-neet-lightText text-sm text-center">
                  Note: Authentication requires Supabase integration. Please connect your project to Supabase to enable signup functionality.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SignUp;
