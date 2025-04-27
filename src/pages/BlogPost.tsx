
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Tables<"blogs"> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .eq("slug", slug)
          .single();

        if (error) throw error;
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
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
