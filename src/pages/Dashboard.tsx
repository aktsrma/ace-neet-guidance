
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      
      <div className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold tracking-tight text-neet-text">Dashboard</h1>
              <Button onClick={signOut} variant="outline">Sign Out</Button>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Welcome to NEET Ace Mentor</CardTitle>
                <CardDescription>
                  Your personalized dashboard for tracking your NEET preparation journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Hello, {user?.user_metadata?.full_name || 'Student'}!</p>
                <p className="mt-2 text-gray-600">
                  Your learning journey is now being tracked. Access your personalized resources 
                  and track your progress using this dashboard.
                </p>
              </CardContent>
            </Card>
            
            {/* Additional dashboard sections can be added here as the application grows */}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
