
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-neet-primary to-neet-secondary text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold font-heading">Ready to Ace Your NEET Journey?</h2>
          <p className="text-lg max-w-2xl">
            Join hundreds of successful medical students who transformed their NEET preparation with expert mentorship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-neet-primary hover:bg-gray-100 font-medium">
                Get Started Today
              </Button>
            </Link>
            <Link to="/mentorship">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-medium">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
