
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import AdminSetup from "@/components/AdminSetup";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-body">
      <SEO 
        title="Best NEET Mentor for Droppers & Freshers"
        description="Join India's top NEET mentorship platform. Daily study plans, expert tips, and 1:1 guidance."
        keywords="NEET mentor, NEET preparation, NEET coaching, medical entrance exam, NEET droppers, NEET freshers"
      />
      <Navbar />
      <main>
        <Hero />
        <div className="py-4 bg-gradient-to-b from-white to-indigo-50/30">
          <Features />
        </div>
        <div className="py-4 bg-white">
          <Services />
        </div>
        <Testimonials />
        <div className="py-4 bg-white">
          <BlogSection />
        </div>
        <CTASection />
      </main>
      <Footer />
      <AdminSetup />
    </div>
  );
};

export default Index;
