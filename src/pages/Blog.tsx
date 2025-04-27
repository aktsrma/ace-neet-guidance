
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import CategoryFilter from "@/components/blog/CategoryFilter";
import { type Category } from "@/constants/blogCategories";
import { toast } from "@/components/ui/use-toast";

const Blog = () => {
  const [blogs, setBlogs] = useState<Tables<"blogs">[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
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
          throw error;
        }
        
        console.log("Fetched blogs:", data);
        setBlogs(data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
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
