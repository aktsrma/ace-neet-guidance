
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="NEET Ace Mentor" className="h-10" />
          <span className="font-heading font-bold text-neet-primary text-xl hidden md:inline">NEET Ace Mentor</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-neet-text font-medium hover:text-neet-primary transition-colors">
            Home
          </Link>
          <Link to="/mentorship" className="text-neet-text font-medium hover:text-neet-primary transition-colors">
            Mentorship
          </Link>
          <Link to="/counseling" className="text-neet-text font-medium hover:text-neet-primary transition-colors">
            College Counseling
          </Link>
          <Link to="/about" className="text-neet-text font-medium hover:text-neet-primary transition-colors">
            About Us
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="font-medium">Login</Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-neet-primary hover:bg-neet-secondary font-medium">Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
