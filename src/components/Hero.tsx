
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-neet-background to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-neet-text leading-tight">
              Ace Your NEET Exam with Expert Mentorship
            </h1>
            <p className="md:text-xl text-neet-lightText font-body">
              Get personalized guidance from top MBBS students from premier medical colleges across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/mentorship">
                <Button size="lg" className="bg-neet-primary hover:bg-neet-secondary font-medium">
                  Explore Mentorship
                </Button>
              </Link>
              <Link to="/counseling">
                <Button size="lg" variant="outline" className="border-neet-primary text-neet-primary hover:bg-neet-background font-medium">
                  College Counseling
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1032&auto=format&fit=crop"
              alt="Medical students studying" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
