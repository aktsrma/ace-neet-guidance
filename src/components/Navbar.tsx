
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="w-full bg-neet-card/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50 shadow-lg">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="NEET Ace Mentor" className="h-10" />
          <span className="font-heading font-bold text-neet-primary text-xl hidden md:inline">NEET Ace Mentor</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white font-medium hover:text-neet-primary transition-colors">
            Home
          </Link>
          <Link to="/mentorship" className="text-white font-medium hover:text-neet-primary transition-colors">
            Mentorship
          </Link>
          <Link to="/counseling" className="text-white font-medium hover:text-neet-primary transition-colors">
            College Counseling
          </Link>
          <Link to="/about" className="text-white font-medium hover:text-neet-primary transition-colors">
            About Us
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="font-medium text-white hover:bg-white/10">Login</Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-neet-primary hover:bg-neet-accent text-neet-background font-medium shadow-lg shadow-neet-primary/20">Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
