import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import CategoryFilter from "@/components/blog/CategoryFilter";
import { type Category } from "@/constants/blogCategories";
import { toast } from "@/components/ui/use-toast";
import SEO from "@/components/SEO";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Blog = () => {
  const [blogs, setBlogs] = useState<Tables<"blogs">[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  
  // Add mock data to ensure blogs are displayed
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        
        // First try to fetch from Supabase
        let query = supabase
          .from("blogs")
          .select("*")
          .order("created_at", { ascending: false });

        if (selectedCategory) {
          query = query.contains('tags', [selectedCategory]);
        }

        const { data, error } = await query;
        
        if (error) {
          console.error("Error fetching blogs:", error);
          toast({
            title: "Error",
            description: "Failed to load blog posts. Please try again later.",
            variant: "destructive",
          });
        }
        
        // If we got data from Supabase, use it, otherwise use mock data
        if (data && data.length > 0) {
          console.log("Fetched blogs from Supabase:", data);
          setBlogs(data);
        } else {
          // If no blogs found in database, use mock data
          console.log("No blogs found in database, using mock data");
          const mockBlogs = [
            {
              id: "1",
              created_at: new Date().toISOString(),
              title: "How to Prepare for NEET Chemistry",
              slug: "how-to-prepare-for-neet-chemistry",
              content: "<p>Chemistry is often considered one of the most scoring subjects in NEET. Here's how to prepare effectively...</p><p>Start with NCERT textbooks and master all concepts. Practice numerical problems regularly. Create short notes for quick revision before the exam.</p>",
              excerpt: "Master NEET Chemistry with these proven strategies and study tips for better scores.",
              featured_image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=2070&auto=format&fit=crop",
              tags: ["Chemistry", "Study Tips"],
              author_id: "1",
              published_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              is_featured: false
            },
            {
              id: "2",
              created_at: new Date().toISOString(),
              title: "Biology Mnemonics for NEET",
              slug: "biology-mnemonics-for-neet",
              content: "<p>Memorizing biological terms and processes can be challenging. Use these mnemonics to make it easier...</p><p>For remembering the cranial nerves: 'On Old Olympus Towering Top A Finn And German Viewed Some Hops'.</p>",
              excerpt: "Learn easy-to-remember mnemonics for biology topics to boost your NEET preparation.",
              featured_image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2069&auto=format&fit=crop",
              tags: ["Biology", "Memory Techniques"],
              author_id: "1",
              published_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              is_featured: false
            },
            {
              id: "3",
              created_at: new Date().toISOString(),
              title: "Physics Problem-Solving Strategies for NEET",
              slug: "physics-problem-solving-strategies-for-neet",
              content: "<p>Physics requires a strong conceptual understanding and problem-solving approach. Follow these techniques...</p><p>Begin with understanding the basic laws and principles. Practice applying formulas to different problem scenarios. Learn to analyze questions and identify the right approach quickly.</p>",
              excerpt: "Improve your physics problem-solving skills with these effective strategies for NEET.",
              featured_image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
              tags: ["Physics", "Problem Solving"],
              author_id: "1",
              published_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              is_featured: false
            },
            {
              id: "4",
              created_at: new Date().toISOString(),
              title: "Time Management Tips for NEET Aspirants",
              slug: "time-management-tips-for-neet-aspirants",
              content: "<p>Effective time management is crucial for NEET preparation. Here's how to optimize your study schedule...</p><p>Create a daily timetable that allocates specific hours for each subject. Use the Pomodoro technique for focused study sessions. Include short breaks and revision periods in your schedule.</p>",
              excerpt: "Learn how to manage your study time effectively to maximize your NEET preparation.",
              featured_image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
              tags: ["Study Tips", "Time Management"],
              author_id: "1",
              published_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              is_featured: false
            }
          ] as Tables<"blogs">[];
          
          // If a category is selected, filter mock blogs by that category
          if (selectedCategory) {
            const filteredMockBlogs = mockBlogs.filter(blog => 
              blog.tags && blog.tags.includes(selectedCategory)
            );
            setBlogs(filteredMockBlogs);
          } else {
            setBlogs(mockBlogs);
          }
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        toast({
          title: "Error",
          description: "Failed to load blog posts. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [selectedCategory]);

  const handleCategorySelect = (category: Category | null) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="NEET Preparation Blog" 
        description="Expert NEET preparation articles, study tips, and strategies to help you crack the medical entrance exam."
        keywords="NEET blog, NEET study tips, NEET preparation articles, medical entrance exam tips"
        canonicalUrl="https://neetacementor.in/blog"
      />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">NEET Preparation Blog</h1>
          
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            onSelectCategory={handleCategorySelect} 
          />
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-[300px] bg-muted animate-pulse rounded-lg" />
              ))}
            </div>
          ) : blogs.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {blogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-700">No blog posts found</h2>
              <p className="text-muted-foreground mt-2">
                {selectedCategory 
                  ? `No posts found in the "${selectedCategory}" category.` 
                  : "There are currently no blog posts available."}
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
