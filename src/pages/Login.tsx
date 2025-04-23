
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Login = () => {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      
      <div className="py-12 md:py-16 flex flex-col items-center justify-center">
        <div className="w-full max-w-md px-4 md:px-0">
          <Card className="border-gray-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-heading text-neet-text">Welcome Back</CardTitle>
              <CardDescription>Log in to your NEET Ace Mentor account</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="youremail@example.com" required />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-neet-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full bg-neet-primary hover:bg-neet-secondary">
                    Sign In
                  </Button>
                </div>
              </form>
              <div className="mt-6 text-center text-sm">
                <p>
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-neet-primary hover:underline font-medium">
                    Sign up now
                  </Link>
                </p>
              </div>
              
              {/* Note: This message will be visible until Supabase integration */}
              <div className="mt-6 p-3 bg-neet-background rounded-md">
                <p className="text-neet-lightText text-sm text-center">
                  Note: Authentication requires Supabase integration. Please connect your project to Supabase to enable login functionality.
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

export default Login;
