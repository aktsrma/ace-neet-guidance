
import { Link } from "react-router-dom";
import { Mail, Instagram, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neet-text text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="NEET Ace Mentor" className="h-8" />
              <span className="font-heading font-bold text-lg">NEET Ace Mentor</span>
            </div>
            <p className="text-gray-300 font-body text-sm">
              Premier mentorship platform for NEET aspirants, connecting students with experienced medical professionals.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/mentorship" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link to="/counseling" className="text-gray-300 hover:text-white transition-colors text-sm">
                  College Counseling
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/mentorship" className="text-gray-300 hover:text-white transition-colors text-sm">
                  One-Time Call (₹199)
                </Link>
              </li>
              <li>
                <Link to="/mentorship" className="text-gray-300 hover:text-white transition-colors text-sm">
                  One-Year Mentorship (₹1999)
                </Link>
              </li>
              <li>
                <Link to="/counseling" className="text-gray-300 hover:text-white transition-colors text-sm">
                  College Counseling (₹1999)
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>support@neetacementor.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 9306381632</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="mailto:neetacementor@gmail.com" aria-label="Email" className="text-gray-300 hover:text-white" title="Email us">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/neetacementor" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-white" title="Follow us on Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://t.me/neetacementor" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-gray-300 hover:text-white" title="Join our Telegram">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2025 NEET Ace Mentor. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
