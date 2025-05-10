
import { Tables } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface BlogListProps {
  blogs: Tables<"blogs">[];
  loading: boolean;
  onEdit: (slug: string) => void;
  onDelete: (id: string) => void;
}

const BlogList = ({ blogs, loading, onEdit, onDelete }: BlogListProps) => {
  // Format date for better readability
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6">
        {[1, 2, 3].map((n) => (
          <div key={n} className="h-16 bg-muted animate-pulse rounded-lg" />
        ))}
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="text-center py-12 border rounded-lg bg-muted/20">
        <h2 className="text-xl font-semibold text-gray-700">No blog posts found</h2>
        <p className="text-muted-foreground mt-2">
          Create your first blog post to get started.
        </p>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[400px]">Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>Last Updated</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {blogs.map((blog) => (
          <TableRow key={blog.id}>
            <TableCell className="font-medium">
              {blog.title}
              <div className="text-xs text-muted-foreground mt-1 truncate max-w-xs">
                {blog.slug}
              </div>
            </TableCell>
            <TableCell>
              {blog.published_at ? (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Published
                </span>
              ) : (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                  Draft
                </span>
              )}
            </TableCell>
            <TableCell>{formatDate(blog.created_at)}</TableCell>
            <TableCell>{formatDate(blog.updated_at)}</TableCell>
            <TableCell className="text-right space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onEdit(blog.slug)}
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onDelete(blog.id)}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BlogList;
