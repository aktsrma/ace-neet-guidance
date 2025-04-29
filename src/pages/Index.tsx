
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
