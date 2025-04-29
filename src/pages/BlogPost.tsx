
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/components/ui/use-toast";

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Tables<"blogs"> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        
        // Try to fetch from Supabase
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .eq("slug", slug)
          .maybeSingle(); // Using maybeSingle instead of single to handle not found case
        
        if (error) {
          console.error("Error fetching blog:", error);
          toast({
            title: "Error",
            description: "Failed to load blog post. Please try again later.",
            variant: "destructive",
          });
        }

        if (data) {
          setBlog(data);
        } else {
          // If not found in database, use mock data for the requested slug
          console.log("Blog not found in database, checking mock data");
          // Create mock blog data that matches the Table type
          const mockBlog = {
            id: "1",
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            title: slug === "how-to-prepare-for-neet-chemistry" 
              ? "How to Prepare for NEET Chemistry"
              : slug === "biology-mnemonics-for-neet"
              ? "Biology Mnemonics for NEET"
              : slug === "physics-problem-solving-strategies-for-neet"
              ? "Physics Problem-Solving Strategies for NEET"
              : slug === "time-management-tips-for-neet-aspirants"
              ? "Time Management Tips for NEET Aspirants"
              : "Blog Post Not Found",
            slug: slug || "",
            content: "<p>This is a detailed article about NEET preparation. The content provides in-depth guidance for students preparing for the NEET examination.</p><p>Start with understanding the exam pattern and syllabus. Create a study plan that covers all subjects. Practice with previous years' question papers. Take regular mock tests to assess your preparation level.</p><p>Focus on your weak areas and revise regularly. Join a study group or find a study partner for better motivation. Take care of your physical and mental health during preparation.</p>",
            excerpt: "Comprehensive guide for NEET preparation with expert tips and strategies.",
            featured_image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=2070&auto=format&fit=crop",
            author_id: "1",
            tags: ["NEET", "Preparation", "Study Tips"],
            published_at: new Date().toISOString(),
            is_featured: false
          } as Tables<"blogs">;
          
          setBlog(mockBlog);
        }
      } catch (error) {
        console.error("Error in blog fetch process:", error);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto animate-pulse">
            <div className="h-8 bg-muted rounded w-3/4 mb-4" />
            <div className="h-4 bg-muted rounded w-1/4 mb-8" />
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded" />
              <div className="h-4 bg-muted rounded" />
              <div className="h-4 bg-muted rounded w-3/4" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold">Blog post not found</h1>
            <p className="mt-4">The blog post you're looking for doesn't exist or has been removed.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto">
          {blog.featured_image && (
            <div className="aspect-video relative overflow-hidden rounded-lg mb-8">
              <img
                src={blog.featured_image}
                alt={blog.title}
                className="object-cover w-full h-full"
              />
            </div>
          )}
          
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          
          <div className="flex items-center gap-4 text-muted-foreground mb-8">
            <time>{new Date(blog.created_at).toLocaleDateString()}</time>
            <div className="flex gap-2">
              {blog.tags?.map((tag) => (
                <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="prose prose-blue max-w-none" 
               dangerouslySetInnerHTML={{ __html: blog.content }} />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
