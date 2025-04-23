
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const team = [
    {
      name: "Dr. Rajiv Mehta",
      role: "Founder & Chief Mentor",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1470&auto=format&fit=crop",
      bio: "AIIMS graduate with 10+ years of experience in medical education and mentorship."
    },
    {
      name: "Dr. Priya Sharma",
      role: "Head of Mentorship",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1470&auto=format&fit=crop",
      bio: "Former NEET topper with expertise in developing personalized study strategies for aspirants."
    },
    {
      name: "Dr. Aditya Singh",
      role: "College Counseling Expert",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1364&auto=format&fit=crop",
      bio: "Specialized in medical college admissions with deep knowledge of the counseling process."
    },
    {
      name: "Ms. Sneha Patel",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop",
      bio: "Ensures smooth functioning of all mentorship programs and excellent service delivery."
    }
  ];

  const milestones = [
    {
      year: "2021",
      title: "Foundation",
      description: "NEET Ace Mentor was founded with a mission to provide quality mentorship to medical aspirants."
    },
    {
      year: "2022",
      title: "First Success Batch",
      description: "Our first batch of mentees achieved remarkable success with 85% securing seats in government medical colleges."
    },
    {
      year: "2023",
      title: "Expanded Services",
      description: "Launched college counseling services and expanded our mentor network to cover all medical specialties."
    },
    {
      year: "2024",
      title: "Digital Transformation",
      description: "Introduced our online platform to reach students across India with personalized mentorship services."
    },
    {
      year: "2025",
      title: "Growing Community",
      description: "Currently serving thousands of NEET aspirants with a team of 50+ expert mentors from premier institutions."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      
      <div className="py-12 bg-neet-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-neet-text mb-4">About NEET Ace Mentor</h1>
            <p className="text-lg text-neet-lightText">Empowering medical aspirants to achieve their dreams</p>
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
            <h2 className="text-2xl md:text-4xl font-bold font-heading text-neet-text">Our Mission</h2>
            <p className="text-neet-lightText">
              At NEET Ace Mentor, we believe that every medical aspirant deserves personalized guidance from those who have already walked the path. Our mission is to democratize access to quality mentorship and make the journey to medical college less daunting and more structured.
            </p>
            <p className="text-neet-lightText">
              We bridge the gap between aspiration and achievement by connecting NEET candidates with successful medical students who provide real-world insights, proven study strategies, and emotional support throughout the preparation journey.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-neet-background rounded-lg text-center">
                <p className="text-3xl font-bold text-neet-primary mb-2">1500+</p>
                <p className="text-neet-lightText text-sm">Students Mentored</p>
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
                <p className="text-3xl font-bold text-neet-primary mb-2">20+</p>
                <p className="text-neet-lightText text-sm">Medical Colleges</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-heading text-neet-text mb-4">Our Journey</h2>
            <p className="text-neet-lightText">The evolution of NEET Ace Mentor</p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-neet-background"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} md:justify-between`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-neet-background bg-neet-primary"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 text-right' : 'md:pl-8 text-left'}`}>
                    <div className="p-6 bg-white shadow-md rounded-lg">
                      <span className="inline-block px-3 py-1 bg-neet-background text-neet-primary text-sm font-medium rounded-full mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="text-lg font-heading font-semibold text-neet-text mb-2">{milestone.title}</h3>
                      <p className="text-neet-lightText text-sm">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-heading text-neet-text mb-4">Meet Our Team</h2>
            <p className="text-neet-lightText">The experts behind NEET Ace Mentor</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="border border-gray-100 overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold text-lg text-neet-text">{member.name}</h3>
                  <p className="text-neet-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-neet-lightText text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
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
