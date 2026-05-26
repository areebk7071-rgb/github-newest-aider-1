import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { seoFaqItems } from "../../config/seo";

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "product";
  includeFaqSchema?: boolean;
  noSuffix?: boolean;
}

const siteConfig = {
  url: "https://nayabseeds.pk",
  siteName: "Nayab Seeds",
};

export default function Seo({
  title,
  description = "Grow the Extraordinary. Buy premium vegetable, flower, herb, and native seeds online in Pakistan.",
  path = "",
  image,
  type = "website",
  includeFaqSchema = false,
  noSuffix = false,
}: SeoProps) {
  const location = useLocation();
  const canonicalPath = path || location.pathname;
  const canonicalUrl = `${siteConfig.url}${canonicalPath}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: canonicalUrl,
    description,
    ...(type === "product" && {
      "@type": "Product",
    }),
  };

  return (
    <Helmet>
      <title>
        {title}
        {!noSuffix && " | Nayab Seeds"}
      </title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {image && <meta property="og:image" content={image} />}
      {type && <meta property="og:type" content={type} />}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      {includeFaqSchema && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: seoFaqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          })}
        </script>
      )}
    </Helmet>
  );
}
