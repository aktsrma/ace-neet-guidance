
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      achievement: "NEET Top 100 Rank",
      content: "The mentorship program helped me clarify my concepts and organize my study schedule. My mentor's guidance was instrumental in my success.",
    },
    {
      name: "Rahul Singh",
      achievement: "Achieved Target Score",
      content: "I was struggling with Physics and Chemistry until I joined NEET Ace Mentor. The one-year mentorship transformed my approach to these subjects.",
    },
    {
      name: "Aditya Patel",
      achievement: "Secured Medical Seat",
      content: "The college counseling service helped me make the right choice based on my rank. I'm thankful for the detailed analysis and guidance.",
    }
  ];

  return (
    <section className="py-16 bg-neet-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-bold font-heading text-neet-primary mb-4">Success Stories</h2>
          <p className="text-neet-lightText font-body">Hear from students who achieved their medical dreams with our mentorship</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-neet-text/10 border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div>
                    <p className="text-neet-lightText font-body italic mb-4">"{testimonial.content}"</p>
                    <h4 className="font-heading font-semibold text-neet-primary">{testimonial.name}</h4>
                    <p className="text-sm text-neet-secondary font-medium">{testimonial.achievement}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
