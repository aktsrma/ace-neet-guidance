
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tables } from "@/integrations/supabase/types";

interface BlogCardProps {
  blog: Tables<"blogs">;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  // Format date for better readability
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <Card className="hover:shadow-lg transition-shadow h-full flex flex-col overflow-hidden border border-indigo-100">
      {blog.featured_image && (
        <div className="aspect-video relative overflow-hidden">
          <img
            src={blog.featured_image}
            alt={blog.title}
            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-neet-primary to-neet-accent"></div>
        </div>
      )}
      <CardHeader>
        <CardTitle className="line-clamp-2 text-lg">
          <Link to={`/blog/${blog.slug}`} className="hover:text-neet-primary transition-colors">
            {blog.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p className="text-muted-foreground line-clamp-3 mb-4">{blog.excerpt}</p>
        <div className="mt-auto flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            {blog.tags && blog.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs bg-indigo-100 text-neet-primary hover:bg-indigo-200">
                {tag}
              </Badge>
            ))}
          </div>
          <time className="text-muted-foreground text-sm block mt-2">
            {formatDate(blog.created_at)}
          </time>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
