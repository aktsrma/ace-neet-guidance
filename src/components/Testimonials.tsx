
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      college: "AIIMS Delhi, 1st Year",
      content: "The mentorship program helped me clarify my concepts and organize my study schedule. My mentor from AIIMS guided me throughout my preparation journey.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop"
    },
    {
      name: "Rahul Singh",
      college: "Maulana Azad Medical College, 2nd Year",
      content: "I was struggling with Physics and Chemistry until I joined NEET Ace Mentor. The one-year mentorship transformed my approach to these subjects.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=687&auto=format&fit=crop"
    },
    {
      name: "Aditya Patel",
      college: "Christian Medical College, Vellore",
      content: "The college counseling service helped me make the right choice based on my rank. I'm thankful for the detailed analysis and guidance.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-neet-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-bold font-heading text-neet-text mb-4">Success Stories</h2>
          <p className="text-neet-lightText font-body">Hear from students who achieved their medical dreams with our mentorship</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-neet-lightText font-body italic mb-4">"{testimonial.content}"</p>
                    <h4 className="font-heading font-semibold text-neet-text">{testimonial.name}</h4>
                    <p className="text-sm text-neet-secondary">{testimonial.college}</p>
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
