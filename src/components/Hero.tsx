
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LogoGlow from "./LogoGlow";

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-neet-background via-neet-background/95 to-neet-background/90 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-neet-primary/20 via-transparent to-transparent"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="flex justify-start mb-8">
              <LogoGlow />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-heading bg-gradient-to-r from-neet-primary via-neet-secondary to-neet-primary bg-clip-text text-transparent animate-gradient leading-tight">
              Transform Your NEET Preparation with Expert Mentorship
            </h1>
            <p className="md:text-xl text-neet-lightText/90 font-body">
              Personalized guidance from top MBBS students who have conquered the NEET exam. Your success, our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/mentorship">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-neet-primary to-neet-secondary hover:from-neet-secondary hover:to-neet-primary transition-all duration-300 font-medium shadow-lg shadow-neet-primary/25"
                >
                  Explore Mentorship
                </Button>
              </Link>
              <Link to="/counseling">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-neet-primary text-neet-primary hover:bg-neet-primary/10 font-medium backdrop-blur-sm"
                >
                  College Counseling
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative bg-gradient-to-br from-neet-background/50 to-neet-background/30 rounded-xl flex items-center justify-center p-8 backdrop-blur-sm border border-neet-primary/20">
            <div className="text-center space-y-4 text-neet-text relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neet-primary/20 via-transparent to-neet-primary/20 blur-3xl"></div>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-24 w-24 mx-auto text-neet-primary relative"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1} 
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <p className="text-lg font-medium relative">Designed for NEET Success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
