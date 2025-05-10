
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { ChevronLeft, Save } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogContentPreview from "@/components/admin/BlogContentPreview";
import { blogCategories } from "@/constants/blogCategories";

type EditorMode = "new" | "edit";

interface BlogFormData {
  title: string;
  content: string;
  excerpt: string;
  featured_image: string;
  tags: string[];
  is_published: boolean;
}

const BlogEditor = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    content: "",
    excerpt: "",
    featured_image: "",
    tags: [],
    is_published: false,
  });
  const [loading, setLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("write");

  const mode: EditorMode = slug === "new" ? "new" : "edit";

  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        navigate("/login");
        return;
      }

      // Check if user is admin
      const checkAdmin = async () => {
        try {
          const { data, error } = await supabase
            .from("profiles")
            .select("role")
            .eq("id", user.id)
            .single();
  
          if (error) throw error;
          
          if (data?.role !== "admin") {
            toast({
              title: "Access Denied",
              description: "You don't have permission to access this page.",
              variant: "destructive",
            });
            navigate("/");
          }
        } catch (error) {
          console.error("Error checking admin status:", error);
          toast({
            title: "Error",
            description: "Failed to verify your permissions.",
            variant: "destructive",
          });
          navigate("/");
        }
      };

      checkAdmin();

      // If in edit mode, fetch the blog post data
      if (mode === "edit" && slug) {
        fetchBlogPost(slug);
      }
    }
  }, [user, authLoading, mode, slug, navigate]);

  const fetchBlogPost = async (slug: string) => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) throw error;

      if (data) {
        setFormData({
          title: data.title || "",
          content: data.content || "",
          excerpt: data.excerpt || "",
          featured_image: data.featured_image || "",
          tags: data.tags || [],
          is_published: Boolean(data.published_at),
        });
        setSelectedTags(data.tags || []);
      }
    } catch (error) {
      console.error("Error fetching blog post:", error);
      toast({
        title: "Error",
        description: "Failed to load blog post. Please try again later.",
        variant: "destructive",
      });
      navigate("/admin");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTagChange = (value: string) => {
    if (!selectedTags.includes(value)) {
      const newTags = [...selectedTags, value];
      setSelectedTags(newTags);
      setFormData(prev => ({ ...prev, tags: newTags }));
    }
  };

  const removeTag = (tag: string) => {
    const newTags = selectedTags.filter(t => t !== tag);
    setSelectedTags(newTags);
    setFormData(prev => ({ ...prev, tags: newTags }));
  };

  const handlePublishToggle = (isPublished: boolean) => {
    setFormData(prev => ({ ...prev, is_published: isPublished }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      setIsSaving(true);
      
      // Generate a slug from the title if we're creating a new post
      const generateSlug = (title: string) => {
        return title
          .toLowerCase()
          .replace(/[^\w\s]/gi, '')
          .replace(/\s+/g, '-');
      };

      const blogData = {
        title: formData.title,
        content: formData.content,
        excerpt: formData.excerpt,
        featured_image: formData.featured_image,
        tags: selectedTags,
        author_id: user.id,
        published_at: formData.is_published ? new Date().toISOString() : null,
        // Add slug for new posts or use the existing one
        slug: mode === "new" ? generateSlug(formData.title) : slug
      };

      let result;
      
      if (mode === "new") {
        // Create new blog post - Pass the object directly, not in an array
        result = await supabase.from("blogs").insert(blogData);
      } else {
        // Update existing blog post
        result = await supabase
          .from("blogs")
          .update(blogData)
          .eq("slug", slug);
      }

      const { error } = result;
      if (error) throw error;

      toast({
        title: "Success",
        description: mode === "new" 
          ? "Blog post created successfully." 
          : "Blog post updated successfully.",
      });

      // Navigate back to admin dashboard
      navigate("/admin");
    } catch (error) {
      console.error("Error saving blog post:", error);
      toast({
        title: "Error",
        description: "Failed to save blog post. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={mode === "new" ? "Create New Blog Post" : "Edit Blog Post"} 
        description="Create or edit blog content"
      />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-8">
            <Button variant="ghost" onClick={() => navigate("/admin")} className="mr-4">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-3xl font-bold">
              {mode === "new" ? "Create New Blog Post" : "Edit Blog Post"}
            </h1>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter blog post title"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt / Summary</Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  placeholder="Brief summary of the blog post"
                  rows={2}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="featured_image">Featured Image URL</Label>
                <Input
                  id="featured_image"
                  name="featured_image"
                  value={formData.featured_image}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                />
                {formData.featured_image && (
                  <div className="mt-2 aspect-video w-full max-w-md relative rounded-md overflow-hidden border">
                    <img 
                      src={formData.featured_image}
                      alt="Preview"
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <Label>Categories / Tags</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {selectedTags.map(tag => (
                    <div key={tag} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center">
                      {tag}
                      <button 
                        type="button" 
                        onClick={() => removeTag(tag)}
                        className="ml-2 text-primary hover:text-primary/70"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
                <Select onValueChange={handleTagChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {blogCategories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="mb-2">
                    <TabsTrigger value="write">Write</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                  </TabsList>
                  <TabsContent value="write" className="mt-0">
                    <Textarea
                      id="content"
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      placeholder="Write your blog post content here... You can use HTML tags for formatting."
                      className="min-h-[400px] font-mono"
                    />
                  </TabsContent>
                  <TabsContent value="preview" className="mt-0">
                    <div className="border rounded-md p-4 min-h-[400px] bg-white">
                      <BlogContentPreview content={formData.content} />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <span className="font-medium">Status:</span>
                  <Select
                    value={formData.is_published ? "published" : "draft"}
                    onValueChange={(value) => handlePublishToggle(value === "published")}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex space-x-4">
                  <Button type="button" variant="outline" onClick={() => navigate("/admin")}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSaving}>
                    {isSaving && (
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-t-transparent" />
                    )}
                    <Save className="h-4 w-4 mr-2" />
                    Save {formData.is_published ? "& Publish" : "as Draft"}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogEditor;
