import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="w-full bg-white border-b border-blue-100 sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src="/lovable-uploads/1af3b00d-a4f3-4f18-906d-1bb68f1ad3f6.png" alt="NEET Ace Mentor" className="h-8 md:h-10 w-auto transition-transform hover:scale-105" />
          <div className="hidden md:flex flex-col">
            <span className="font-heading text-xl font-bold bg-gradient-to-r from-[#0066cc] to-[#1a75ff] bg-clip-text text-transparent">
              NEET Ace Mentor
            </span>
            <span className="text-xs text-slate-600 font-medium">
              Your Path to Medical Success
            </span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-slate-900 font-medium hover:text-[#0066cc] transition-colors">
            Home
          </Link>
          <Link to="/mentorship" className="text-slate-900 font-medium hover:text-[#0066cc] transition-colors">
            Mentorship
          </Link>
          <Link to="/counseling" className="text-slate-900 font-medium hover:text-[#0066cc] transition-colors">
            Counseling
          </Link>
          <Link to="/about" className="text-slate-900 font-medium hover:text-[#0066cc] transition-colors">
            About Us
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          {user ? (
            <Button 
              onClick={signOut} 
              className="bg-[#0066cc] hover:bg-[#0052a3] text-white font-medium shadow-sm"
            >
              Sign Out
            </Button>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" className="font-medium text-slate-900 hover:text-[#0066cc] hover:bg-blue-50">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#0066cc] hover:bg-[#0052a3] text-white font-medium shadow-sm">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
