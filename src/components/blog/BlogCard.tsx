
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tables } from "@/integrations/supabase/types";

interface BlogCardProps {
  blog: Tables<"blogs">;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      {blog.featured_image && (
        <div className="aspect-video relative overflow-hidden rounded-t-lg">
          <img
            src={blog.featured_image}
            alt={blog.title}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="line-clamp-2">
          <Link to={`/blog/${blog.slug}`} className="hover:text-blue-600">
            {blog.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">{blog.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="flex flex-wrap gap-2">
            {blog.tags?.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <time className="text-muted-foreground whitespace-nowrap ml-4">
            {new Date(blog.created_at).toLocaleDateString()}
          </time>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
