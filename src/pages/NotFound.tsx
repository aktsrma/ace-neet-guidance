
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-md max-w-md">
        <h1 className="text-6xl font-bold text-[#0066cc] mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-4">Oops! Page not found</p>
        <p className="text-gray-600 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="bg-[#0066cc] hover:bg-[#0052a3] text-white font-medium shadow-sm">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
