
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="w-full bg-white border-b border-indigo-100 sticky top-0 z-50 shadow-sm backdrop-blur-lg bg-white/90">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src="/lovable-uploads/1af3b00d-a4f3-4f18-906d-1bb68f1ad3f6.png" alt="NEET Ace Mentor" className="h-8 md:h-10 w-auto transition-transform hover:scale-105" />
          <div className="hidden md:flex flex-col">
            <span className="font-heading text-xl font-bold bg-gradient-to-r from-[#5048E5] to-[#818CF8] bg-clip-text text-transparent">
              NEET Ace Mentor
            </span>
            <span className="text-xs text-slate-600 font-medium">
              Your Path to Medical Success
            </span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-slate-900 font-medium hover:text-neet-primary transition-colors">
            Home
          </Link>
          <Link to="/mentorship" className="text-slate-900 font-medium hover:text-neet-primary transition-colors">
            Mentorship
          </Link>
          <Link to="/counseling" className="text-slate-900 font-medium hover:text-neet-primary transition-colors">
            Counseling
          </Link>
          <Link to="/blog" className="text-slate-900 font-medium hover:text-neet-primary transition-colors">
            Blog
          </Link>
          <Link to="/about" className="text-slate-900 font-medium hover:text-neet-primary transition-colors">
            About Us
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          {user ? (
            <Button 
              onClick={signOut} 
              className="bg-neet-primary hover:bg-neet-secondary text-white font-medium shadow-sm rounded-full"
            >
              Sign Out
            </Button>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" className="font-medium text-slate-900 hover:text-neet-primary hover:bg-indigo-50">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-neet-primary hover:bg-neet-secondary text-white font-medium shadow-sm rounded-full">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
