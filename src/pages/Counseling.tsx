
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Counseling = () => {
  const topColleges = [
    {
      name: "All India Institute of Medical Sciences (AIIMS), New Delhi",
      image: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?q=80&w=1471&auto=format&fit=crop",
      seats: 107,
      cutoff: "Top 50 rank"
    },
    {
      name: "Christian Medical College (CMC), Vellore",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1374&auto=format&fit=crop",
      seats: 100,
      cutoff: "Top 500 rank"
    },
    {
      name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER), Puducherry",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1374&auto=format&fit=crop",
      seats: 150,
      cutoff: "Top 200 rank"
    },
    {
      name: "King George's Medical University (KGMU), Lucknow",
      image: "https://images.unsplash.com/photo-1579684288361-5c1a2454eb53?q=80&w=1374&auto=format&fit=crop",
      seats: 250,
      cutoff: "Top 1000 rank"
    }
  ];

  const faqs = [
    {
      question: "How does the college counseling process work?",
      answer: "Our college counseling service is designed to help you navigate the complex admission process after your NEET results. We analyze your rank, preferences, and other factors to recommend the best college options for you. The process includes a detailed discussion about various colleges, their specialties, campus life, and future career prospects. We also provide assistance with documentation and application procedures specific to each college."
    },
    {
      question: "When should I start the college counseling process?",
      answer: "Ideally, you should start the counseling process as soon as the NEET results are announced. However, you can also register for counseling earlier so we can prepare a preliminary list of potential colleges based on your expected performance. This proactive approach will give you more time to research and make an informed decision when the results are declared."
    },
    {
      question: "Will the counselors help with state-specific quotas and reservations?",
      answer: "Yes, our counselors are well-versed with both all-India quotas and state-specific quotas. They will guide you through the various reservation policies applicable to you and help you maximize your chances of getting into the best possible college based on your rank and category."
    },
    {
      question: "Do you guarantee admission to a specific college?",
      answer: "We cannot guarantee admission to any specific college as admissions are ultimately determined by your NEET rank and the official counseling process conducted by relevant authorities. However, we provide expert guidance to help you make the most strategic choices based on your rank and preferences, significantly improving your chances of securing admission to your desired college."
    },
    {
      question: "What if I need assistance after the counseling session?",
      answer: "Our college counseling package includes follow-up support until you secure your admission. If you have any questions or need additional guidance after your initial counseling session, you can reach out to your assigned counselor for assistance without any extra charges."
    }
  ];

  const counselingProcess = [
    {
      title: "Initial Assessment",
      description: "Comprehensive evaluation of your NEET rank, category, state of domicile, and preferences."
    },
    {
      title: "College Options Analysis",
      description: "Detailed review of medical colleges you're eligible for based on your rank and preferences."
    },
    {
      title: "Strategy Development",
      description: "Creating a strategic plan for the counseling rounds to maximize your chances of admission."
    },
    {
      title: "Documentation Guidance",
      description: "Assistance with preparing all necessary documents required for the admission process."
    },
    {
      title: "Counseling Accompaniment",
      description: "Virtual support during the official counseling process to help you make informed decisions."
    },
    {
      title: "Post-Admission Support",
      description: "Guidance on hostel allocation, fee payment, and other post-admission procedures."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      
      <div className="py-12 bg-neet-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-neet-text mb-4">College Counseling</h1>
            <p className="text-lg text-neet-lightText">Secure your seat in India's top medical colleges with expert guidance</p>
          </div>
        </div>
      </div>
      
      <div className="container px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold font-heading text-neet-text">Make the Right College Choice</h2>
            <p className="text-neet-lightText">
              The college you choose shapes your medical career. Our counseling service connects you with experienced advisors from top medical institutions who provide personalized guidance based on your NEET rank.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
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
                <span className="text-neet-lightText">Personalized college recommendations based on your rank</span>
              </li>
              <li className="flex items-center">
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
                <span className="text-neet-lightText">Insights on college infrastructure and faculty</span>
              </li>
              <li className="flex items-center">
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
                <span className="text-neet-lightText">Guidance on counseling rounds and seat allocation</span>
              </li>
              <li className="flex items-center">
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
                <span className="text-neet-lightText">Support with documentation and verification</span>
              </li>
            </ul>
            <div>
              <Button className="bg-neet-primary hover:bg-neet-secondary">Book Counseling Session - ₹1999</Button>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop" 
              alt="College Counseling" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-heading text-neet-text mb-4">Our Counseling Process</h2>
            <p className="text-neet-lightText">A systematic approach to finding your ideal medical college</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {counselingProcess.map((step, index) => (
              <Card key={index} className="border border-gray-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-neet-background rounded-full w-12 h-12 flex items-center justify-center">
                      <span className="text-neet-primary font-heading font-bold text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-neet-text mb-2">{step.title}</h3>
                      <p className="text-neet-lightText font-body">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <Tabs defaultValue="colleges" className="w-full mb-16">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="colleges">Top Medical Colleges</TabsTrigger>
            <TabsTrigger value="faq">Frequently Asked Questions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="colleges">
            <div className="grid md:grid-cols-2 gap-6">
              {topColleges.map((college) => (
                <Card key={college.name} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img 
                      src={college.image} 
                      alt={college.name} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="font-heading font-semibold text-lg text-neet-text mb-2">{college.name}</h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <p className="text-neet-lightText">
                        <span className="font-medium text-neet-primary">MBBS Seats:</span> {college.seats}
                      </p>
                      <p className="text-neet-lightText">
                        <span className="font-medium text-neet-primary">Approx. Cutoff:</span> {college.cutoff}
                      </p>
                    </div>
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
        
        <div className="bg-neet-primary rounded-xl text-white p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold font-heading">Ready to Secure Your Medical Future?</h2>
              <p>
                Our expert counselors are ready to help you find the perfect medical college that matches your rank and preferences.
              </p>
              <Button className="bg-white text-neet-primary hover:bg-gray-100">Book Your Counseling Session</Button>
            </div>
            <div className="space-y-4 bg-white/10 rounded-lg p-6">
              <h3 className="font-heading font-semibold text-xl">College Counseling Package</h3>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold">₹1999</span>
                <span className="line-through text-white/70">₹2999</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>2-hour comprehensive counseling session</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Personalized college recommendation list</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Document verification assistance</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>30-day post-counseling support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Counseling;
