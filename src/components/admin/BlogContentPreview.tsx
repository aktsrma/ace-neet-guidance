
import { useEffect, useState } from "react";

interface BlogContentPreviewProps {
  content: string;
}

const BlogContentPreview = ({ content }: BlogContentPreviewProps) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="animate-pulse bg-gray-200 h-full w-full" />;
  }

  return (
    <div 
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: content }} 
    />
  );
};

export default BlogContentPreview;
