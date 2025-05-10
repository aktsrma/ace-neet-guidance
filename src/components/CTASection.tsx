
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-neet-primary to-neet-accent text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCAzLjk4LTEuNzggMy45OC0zLjk4bC4wMi0uMDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold font-heading">Ready to Ace Your NEET Journey?</h2>
          <p className="text-lg max-w-2xl text-white/90">
            Join hundreds of successful medical students who transformed their NEET preparation with expert mentorship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-neet-primary hover:bg-gray-100 font-medium rounded-full px-8">
                Get Started Today
              </Button>
            </Link>
            <Link to="/mentorship">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-medium rounded-full px-8 border-2">
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
