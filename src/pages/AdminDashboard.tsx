
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash } from "lucide-react";
import { Tables } from "@/integrations/supabase/types";
import { toast } from "@/components/ui/use-toast";
import BlogList from "@/components/admin/BlogList";
import { useAuth } from "@/hooks/useAuth";

const AdminDashboard = () => {
  const { user, session, loading: authLoading } = useAuth();
  const [blogs, setBlogs] = useState<Tables<"blogs">[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      if (!user) return;

      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();

        if (error) throw error;
        setIsAdmin(data?.role === "admin");
        
        if (data?.role !== "admin") {
          toast({
            title: "Access Denied",
            description: "You don't have permission to access this page.",
            variant: "destructive",
          });
          navigate("/");
        }
      } catch (error: any) {
        console.error("Error checking admin status:", error);
        toast({
          title: "Error",
          description: "Failed to verify your permissions. Please try again later.",
          variant: "destructive",
        });
        navigate("/");
      }
    };

    if (!authLoading) {
      if (!user) {
        navigate("/login");
      } else {
        checkAdmin();
        fetchBlogs();
      }
    }
  }, [user, authLoading, navigate]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
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

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog post? This action cannot be undone.")) {
      try {
        const { error } = await supabase
          .from("blogs")
          .delete()
          .eq("id", id);

        if (error) throw error;

        setBlogs(blogs.filter(blog => blog.id !== id));
        toast({
          title: "Success",
          description: "Blog post deleted successfully.",
        });
      } catch (error) {
        console.error("Error deleting blog:", error);
        toast({
          title: "Error",
          description: "Failed to delete the blog post. Please try again later.",
          variant: "destructive",
        });
      }
    }
  };

  const handleEdit = (slug: string) => {
    navigate(`/admin/blog/edit/${slug}`);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return null; // Will be redirected by the useEffect
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Admin Dashboard" 
        description="Manage blog posts and content"
      />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Blog Management</h1>
            <Button onClick={() => navigate("/admin/blog/new")}>
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
          </div>
          
          <BlogList 
            blogs={blogs} 
            loading={loading} 
            onEdit={handleEdit} 
            onDelete={handleDelete}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
