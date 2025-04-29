
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";
import { usePayment } from "@/hooks/usePayment";
import { useAuth } from "@/hooks/useAuth";
import { useMentorshipPrograms } from "@/hooks/useMentorshipPrograms";
import { MessageSquare } from "lucide-react";

const Mentorship = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const { handlePayment, loading } = usePayment();
  const { user } = useAuth();
  const { data: programs, isLoading: programsLoading } = useMentorshipPrograms();

  const handlePaymentClick = async (amount: number, plan: string) => {
    try {
      await handlePayment(plan, amount);
    } catch (error) {
      toast.error("WhatsApp redirect failed. Please try again.");
    }
  };

  const mentors = [
    {
      name: "Ankit Sharma",
      college: "3rd Year MBBS Student",
      specialization: "NEET Preparation Strategy",
      rank: "Rising Talent",
      description: "Excelled in NEET with AIR under 500. Specializes in helping students master Biology and Chemistry concepts through innovative learning techniques."
    },
    {
      name: "Dr. Rohit Bajar",
      college: "Intern at KG Medical University",
      specialization: "NEET Clinical Insights",
      rank: "Emerging Medical Professional",
      description: "Former NEET top performer with extensive experience in guiding students through complex medical concepts and exam strategies."
    },
    {
      name: "Dr. Sunil Sharma",
      college: "Intern at AIIMS Raebareli",
      specialization: "Comprehensive NEET Guidance",
      rank: "Promising Young Physician",
      description: "AIIMS graduate with deep understanding of NEET curriculum. Expert in providing structured study plans and time management strategies."
    },
    {
      name: "Dishant Jain",
      college: "4th Year MBBS Student",
      specialization: "NEET Exam Strategies",
      rank: "Aspiring Medical Professional",
      description: "Achieved exceptional NEET score and passionate about helping students overcome exam challenges through proven study methodologies."
    }
  ];

  const faqs = [
    {
      question: "How does the one-time call mentorship work?",
      answer: "The one-time call is a 30-minute focused video session with one of our expert mentors. You can discuss your specific doubts, get guidance on study strategies, or receive advice on particular topics you're struggling with. After contacting us via WhatsApp, we'll arrange a convenient time slot for your session."
    },
    {
      question: "What's included in the one-year mentorship program?",
      answer: "Our comprehensive one-year program includes monthly one-on-one sessions with your assigned mentor, a customized study plan, regular performance tracking, mock test analysis, and 24/7 doubt solving through our dedicated communication channels. You'll have continuous support throughout your NEET preparation journey."
    },
    {
      question: "Can I choose my mentor?",
      answer: "Yes, you can select your preferred mentor based on their specialization and availability. However, for the one-year program, we also pair students with mentors based on learning styles and subject requirements for optimal results."
    },
    {
      question: "What if I'm not satisfied with my mentorship session?",
      answer: "We strive for excellence in all our mentorship programs. If you're not satisfied with your session, please contact our support team within 24 hours, and we'll arrange another session with a different mentor at no additional cost."
    },
    {
      question: "How do I get started with a mentorship program?",
      answer: "Simply click on the 'Contact on WhatsApp' button for your preferred program. You'll be redirected to WhatsApp where you can chat directly with our team. We'll guide you through the enrollment process and answer any questions you might have."
    },
    {
      question: "Can I upgrade from a one-time call to the yearly program?",
      answer: "Absolutely! If you decide to upgrade after your one-time call, just let us know via WhatsApp and we'll assist you with the transition to the yearly program."
    }
  ];

  return (
    <div className="min-h-screen bg-neet-background font-body">
      <Navbar />
      
      <div className="py-12 bg-gradient-to-r from-neet-background via-neet-accent to-neet-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-neet-primary mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neet-primary via-neet-secondary to-neet-primary">
              Expert NEET Mentorship
            </h1>
            <p className="text-lg text-neet-lightText">
              Personalized guidance to help you achieve your medical college dreams
            </p>
          </div>
        </div>
      </div>
      
      <div className="container px-4 md:px-6 py-12">
        <Tabs defaultValue="plans" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="plans">Mentorship Plans</TabsTrigger>
            <TabsTrigger value="mentors">Our Mentors</TabsTrigger>
            <TabsTrigger value="faq">FAQs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="plans">
            {programsLoading ? (
              <div className="text-center py-8">Loading plans...</div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {programs?.map((program) => (
                  <Card key={program.id} className={`border ${program.title === 'One-Year Mentorship' ? 'border-2 border-neet-primary shadow-lg bg-gradient-to-b from-transparent to-neet-accent/10' : 'border-neet-primary/20 bg-gradient-to-b from-transparent to-neet-accent/5'} backdrop-blur-sm`}>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle className="text-xl font-heading text-neet-text">{program.title}</CardTitle>
                          <CardDescription>{program.description}</CardDescription>
                        </div>
                        {program.title === 'One-Year Mentorship' && (
                          <span className="inline-block bg-gradient-to-r from-neet-primary to-neet-secondary text-white text-xs px-2 py-1 rounded-full font-medium">
                            Most Popular
                          </span>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-2xl font-bold text-neet-primary">₹{program.price}</p>
                        <p className="text-neet-lightText">Duration: {program.duration}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full bg-gradient-to-r from-neet-primary to-neet-secondary hover:opacity-90 transition-opacity"
                        onClick={() => handlePaymentClick(program.price, program.title)}
                        disabled={loading}
                      >
                        <MessageSquare className="mr-2" />
                        {loading ? "Redirecting..." : `Contact on WhatsApp - ₹${program.price}`}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="mentors">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mentors.map((mentor) => (
                <Card key={mentor.name} className="border border-gray-200">
                  <CardContent className="pt-6">
                    <h3 className="font-heading font-semibold text-lg text-neet-text">{mentor.name}</h3>
                    <p className="text-neet-secondary font-medium text-sm">{mentor.college}</p>
                    <p className="text-neet-primary text-sm mt-2">{mentor.specialization}</p>
                    <p className="text-neet-text text-sm mt-2">{mentor.description}</p>
                    <p className="text-neet-primary text-sm font-medium mt-3">{mentor.rank}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="faq">
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-heading text-neet-text">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-neet-lightText">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <section className="py-12 bg-gradient-to-r from-neet-background via-neet-accent to-neet-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-4 md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-neet-text">Still have questions?</h2>
              <p className="text-neet-lightText">
                Our team is here to help you find the perfect mentorship solution for your NEET preparation journey.
              </p>
            </div>
            <div className="md:w-1/2 flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-neet-primary to-neet-secondary hover:opacity-90 transition-opacity"
                onClick={() => handlePaymentClick(0, "General Inquiry")}
              >
                <MessageSquare className="mr-2" />
                Contact Support
              </Button>
              <Button 
                variant="outline" 
                className="border-neet-primary text-neet-primary hover:bg-neet-accent/10"
                onClick={() => handlePaymentClick(0, "Demo Call Request")}
              >
                <MessageSquare className="mr-2" />
                Schedule a Demo Call
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Mentorship;
