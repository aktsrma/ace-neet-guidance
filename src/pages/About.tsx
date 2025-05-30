
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      
      <div className="py-12 bg-neet-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-neet-text mb-4">Our Story: Beyond Just Mentorship</h1>
            <p className="text-lg text-neet-lightText">A journey of transforming medical education, one student at a time</p>
          </div>
        </div>
      </div>
      
      <div className="container px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1470&auto=format&fit=crop" 
              alt="Students collaborating" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold font-heading text-neet-text">Why We Exist</h2>
            <p className="text-neet-lightText">
              NEET Ace Mentor emerged from a simple yet profound realization: medical entrance exam preparation is more than just studying. It's about understanding individual potential, managing stress, and providing holistic guidance.
            </p>
            <p className="text-neet-lightText">
              We're not just another coaching institute. We're a support system that recognizes each student's unique journey, challenges, and aspirations. Our mentors have walked the same path and understand the emotional and academic complexities of becoming a medical professional.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-neet-background rounded-lg text-center">
                <p className="text-3xl font-bold text-neet-primary mb-2">2000+</p>
                <p className="text-neet-lightText text-sm">Students Guided</p>
              </div>
              <div className="p-4 bg-neet-background rounded-lg text-center">
                <p className="text-3xl font-bold text-neet-primary mb-2">85%</p>
                <p className="text-neet-lightText text-sm">Success Rate</p>
              </div>
              <div className="p-4 bg-neet-background rounded-lg text-center">
                <p className="text-3xl font-bold text-neet-primary mb-2">50+</p>
                <p className="text-neet-lightText text-sm">Expert Mentors</p>
              </div>
              <div className="p-4 bg-neet-background rounded-lg text-center">
                <p className="text-3xl font-bold text-neet-primary mb-2">15+</p>
                <p className="text-neet-lightText text-sm">States Served</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-neet-background rounded-xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-neet-text mb-4">Our Approach</h2>
              <p className="text-neet-lightText mb-6">
                We believe in a holistic approach to NEET preparation that goes beyond just subject knowledge. Our mentors focus on:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-neet-primary mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neet-lightText">Personalized study plans based on individual strengths and weaknesses</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-neet-primary mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neet-lightText">Effective time management strategies for balanced preparation</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-neet-primary mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neet-lightText">Focus on high-yield topics and exam-oriented preparation</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-neet-primary mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neet-lightText">Mental health support and stress management techniques</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-neet-primary mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neet-lightText">Regular performance analysis and course correction</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop" 
                alt="Students collaborating" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold font-heading text-neet-text mb-6">Join Our Community</h2>
          <p className="text-lg text-neet-lightText mb-8">
            Become part of the NEET Ace Mentor family and take your first step towards becoming a doctor.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/mentorship" className="inline-flex items-center justify-center rounded-md bg-neet-primary hover:bg-neet-secondary h-10 px-4 py-2 text-sm font-medium text-white">
              Explore Mentorship Options
            </a>
            <a href="/counseling" className="inline-flex items-center justify-center rounded-md border border-neet-primary bg-white hover:bg-neet-background h-10 px-4 py-2 text-sm font-medium text-neet-primary">
              Learn About College Counseling
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
