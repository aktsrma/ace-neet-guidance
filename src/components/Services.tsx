
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "One-Time Call",
      description: "Get your doubts cleared in a 30-minute one-on-one session with a top medical student.",
      price: "₹199",
      features: ["30-minute video call", "Personalized guidance", "Study strategy discussion", "Immediate slot booking"],
      path: "/mentorship"
    },
    {
      title: "One-Year Mentorship",
      description: "Comprehensive year-long guidance to help you ace your NEET with dedicated mentorship.",
      price: "₹1999",
      features: ["Monthly one-on-one sessions", "Study plan creation", "Performance tracking", "Mock test analysis", "24/7 doubt solving"],
      path: "/mentorship",
      highlight: true
    },
    {
      title: "College Counseling",
      description: "Expert guidance on college selection and admission process after NEET results.",
      price: "₹1999",
      features: ["Analysis of options based on rank", "College comparison guidance", "Document verification support", "Admission process assistance"],
      path: "/counseling"
    }
  ];

  return (
    <section className="py-16 bg-white" id="services">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-bold font-heading text-neet-text mb-4">Our Mentorship Services</h2>
          <p className="text-neet-lightText font-body">Choose the perfect mentorship plan for your NEET preparation journey</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className={`flex flex-col h-full ${service.highlight ? 'border-neet-primary shadow-lg' : 'border-gray-200'}`}>
              <CardHeader>
                <CardTitle className="text-xl font-heading text-neet-text">{service.title}</CardTitle>
                <CardDescription className="text-neet-lightText font-body">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-3xl font-bold text-neet-primary mb-4">{service.price}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-neet-secondary mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-neet-lightText">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link to={service.path} className="w-full">
                  <Button 
                    className={`w-full ${
                      service.highlight 
                        ? 'bg-neet-primary hover:bg-neet-secondary' 
                        : 'bg-white text-neet-primary border border-neet-primary hover:bg-neet-background'
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
