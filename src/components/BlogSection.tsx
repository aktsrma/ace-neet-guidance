
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const featuredBlogs = [
  {
    id: 1,
    title: "How to Prepare for NEET Chemistry",
    excerpt: "Master NEET Chemistry with these proven strategies and study tips for better scores.",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=2070&auto=format&fit=crop",
    slug: "how-to-prepare-for-neet-chemistry"
  },
  {
    id: 2,
    title: "Biology Mnemonics for NEET",
    excerpt: "Learn easy-to-remember mnemonics for biology topics to boost your NEET preparation.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2069&auto=format&fit=crop",
    slug: "biology-mnemonics-for-neet"
  },
  {
    id: 3,
    title: "Physics Problem-Solving Strategies",
    excerpt: "Improve your physics problem-solving skills with these effective strategies for NEET.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    slug: "physics-problem-solving-strategies-for-neet"
  }
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-neet-text mb-2">Latest Articles</h2>
            <p className="text-muted-foreground">Expert tips and strategies for NEET preparation</p>
          </div>
          <Link to="/blog" className="mt-4 md:mt-0 text-neet-primary hover:text-neet-secondary flex items-center group">
            View all articles
            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredBlogs.map((blog) => (
            <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-xl line-clamp-2">
                  <Link to={`/blog/${blog.slug}`} className="hover:text-neet-primary transition-colors">
                    {blog.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-muted-foreground line-clamp-2 mb-4">{blog.excerpt}</p>
                <Link to={`/blog/${blog.slug}`}>
                  <Button variant="outline" className="mt-2 hover:bg-neet-primary/10">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
