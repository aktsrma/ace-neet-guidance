
export interface WebsiteSchemaProps {
  siteUrl: string;
  siteName: string;
  title: string;
  description: string;
  language?: string;
}

export interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  authorName: string;
  publisherName: string;
  publisherLogo: string;
  datePublished: string;
  dateModified: string;
}

export const generateWebsiteSchema = ({
  siteUrl,
  siteName,
  title,
  description,
  language = 'en-US'
}: WebsiteSchemaProps) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    "url": siteUrl,
    "name": siteName,
    "description": description,
    "inLanguage": language,
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": `${siteUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    ]
  };
};

export const generateArticleSchema = ({
  title,
  description,
  url,
  imageUrl,
  authorName,
  publisherName,
  publisherLogo,
  datePublished,
  dateModified,
}: ArticleSchemaProps) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "headline": title,
    "description": description,
    "image": imageUrl,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": publisherName,
      "logo": {
        "@type": "ImageObject",
        "url": publisherLogo
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified
  };
};

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NEETAceMentor",
    "url": "https://neetacementor.in",
    "logo": "https://neetacementor.in/logo.png",
    "sameAs": [
      "https://instagram.com/neetacementor",
      "https://t.me/neetacementor"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9876543210",
        "contactType": "customer service",
        "email": "neetacementor@gmail.com",
        "availableLanguage": ["English", "Hindi"]
      }
    ]
  };
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};
