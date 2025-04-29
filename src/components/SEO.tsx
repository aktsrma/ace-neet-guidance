
import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  keywords?: string;
  isArticle?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEO = ({
  title,
  description,
  canonicalUrl,
  ogImage = "https://neetacementor.in/banner.png",
  ogType = "website",
  keywords,
  isArticle = false,
  publishedTime,
  modifiedTime
}: SEOProps) => {
  const siteTitle = "NEETAceMentor";
  const fullTitle = title ? `${title} | ${siteTitle}` : "Best NEET Mentor for Droppers & Freshers | NEETAceMentor";
  const metaDescription = description || "Join India's top NEET mentorship platform. Daily study plans, expert tips, and 1:1 guidance.";
  const url = canonicalUrl || "https://neetacementor.in";
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      {isArticle && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {isArticle && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
